import User from '../models/User';
import Item from '../models/Item';
import Product from '../models/Product';
import Category from '~~/server/models/Category';
import sampleUsers from '~~/server/utils/scripts/users';
import sampleCategories from '~~/server/utils/scripts/categories';
import sampleItems from '~~/server/utils/scripts/items';
import sampleProducts from '~~/server/utils/scripts/products';

export default defineEventHandler(async (event) => {
  await Product.collection.drop();
  await Item.collection.drop();
  await Category.collection.drop();
  await User.collection.drop();

  // Users
  for (const user of sampleUsers) {
    // item.category = await Category.findOne({ nameId: item.category });
    try {
      await User.create(user);
      // await Item.create(item);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // Categories
  for (const category of JSON.parse(JSON.stringify(sampleCategories))) {
    const { parent, ...processedCategory } = category;
    await Category.create(processedCategory);
  }
  for (const category of JSON.parse(JSON.stringify(sampleCategories))) {
    const current = await Category.findOne({ nameId: category.nameId });
    const parent = await Category.findOne({
      nameId: category.parent
    });
    if (parent) {
      try {
        await Category.updateOne(current, { parent });
        await Category.updateOne(parent, {
          $push: { children: current }
        });
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  }

  // Items
  for (const item of JSON.parse(JSON.stringify(sampleItems))) {
    item.category = await Category.findOne({ nameId: item.category });
    try {
      await Item.create(item);
      // await Item.create(item);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // Products
  for (const product of JSON.parse(JSON.stringify(sampleProducts))) {
    product.item = await Item.findOne({ name: product.item });
    product.supplier = await User.findOne({ username: product.supplier });
    try {
      await Product.create(product);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  return 'nice';
});
