import Item from '../models/Item';
import Product from '../models/Product';
import Category from '~~/server/models/Category';
import sampleCategories from '~~/server/utils/scripts/categories';
import sampleItems from '~~/server/utils/scripts/items';
import sampleProducts from '~~/server/utils/scripts/products';

export default defineEventHandler(async (event) => {
	await Product.collection.drop();
	await Item.collection.drop();
	await Category.collection.drop();

	// Categories
	for (const category of sampleCategories) {
		const { parent, ...processedCategory } = category;
		await Category.create(processedCategory);
	}
	for (const category of sampleCategories) {
		const current = await Category.findOne({ name: category.name });
		const parent = await Category.findOne({
			name: category.parent
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
		console.log(item);
		item.category = await Category.findOne({ name: item.category });
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
		try {
			await Product.create(product);
		} catch (err) {
			console.log(err);
			return err;
		}
	}
	return 'nice';
});
