import User from '../models/User';
import Item from '../models/Item';
import Product from '../models/Product';
import Category from '~~/server/models/Category';
import Order from '~~/server/models/Order';
import Polution from '~~/server/models/Polution';
import Resource from '~~/server/models/Resource';
import sampleUsers from '~~/server/utils/scripts/users';
import sampleCategories from '~~/server/utils/scripts/categories';
import sampleItems from '~~/server/utils/scripts/items';
import sampleProducts from '~~/server/utils/scripts/products';
import sampleOrders from '~~/server/utils/scripts/orders';
import samplePolutions from '~~/server/utils/scripts/polutions';
import sampleResources from '~~/server/utils/scripts/resources';

export default defineEventHandler(async (event) => {
  await Resource.collection.drop();
  await Polution.collection.drop();
  await Order.collection.drop();
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

  // Polutions
  for (const polution of JSON.parse(JSON.stringify(samplePolutions))) {
    try {
      await Polution.create(polution);
      // await Item.create(item);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // Resources
  for (const resource of JSON.parse(JSON.stringify(sampleResources))) {
    try {
      await Resource.create(resource);
      // await Item.create(item);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // Items
  for (const item of JSON.parse(JSON.stringify(sampleItems))) {
    item.category = await Category.findOne({ nameId: item.category });
    if (item.polutions !== undefined) {
      for (let i = 0; i < item.polutions.length; i++) {
        item.polutions[i] = await Polution.findOne({
          nameId: item.polutions[i]
        });
      }
    }
    for (let i = 0; i < item.resources.length; i++) {
      item.resources[i] = await Resource.findOne({ nameId: item.resources[i] });
    }
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
    for (let i = 0; i < product.polutions.length; i++) {
      product.polutions[i] = await Polution.findOne({
        nameId: product.polutions[i]
      });
    }
    for (let i = 0; i < product.resources.length; i++) {
      product.resources[i] = await Resource.findOne({
        nameId: product.resources[i]
      });
    }
    try {
      await Product.create(product);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // Orders
  for (const order of JSON.parse(JSON.stringify(sampleOrders))) {
    for (let i = 0; i < order.products.length; i++) {
      order.products[i] = await Product.findOne({
        nameId: order.products[i].nameId
      });
    }

    try {
      const bdOrder = await Order.create(order);
      await User.updateOne(
        { username: 'user-a' },
        {
          $push: {
            'consumerData.orders': bdOrder
          }
        }
      );
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  return 'nice';
});
