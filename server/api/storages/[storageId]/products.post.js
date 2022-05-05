export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	try {
		const decoded = await jwt.verify(token, 'secretkey');

		let { id } = req.params;
		let { item, price, unit, quantity } = req.body;

		let storage = await Storage.findById(id);
		let itm = await Item.findById(item);

		if (!itm) {
			res.json({ error: 'Item not found' });
		} else if (!storage) {
			res.json({ error: 'Storage not found' });
		} else if (storage.owner != decoded.user._id) {
			res.json({
				error: 'You must be the owner to change this storage'
			});
		} else {
			// Falta verificar se o item que esta a ser inserido existe na lista de produtos do storage, se sim deve retornar um erro

			let product = await Product.create({
				item: item,
				price: price,
				unit: unit,
				quantity: quantity
			});

			let storage = await Storage.updateOne(
				{ _id: id },
				{
					$push: { products: product }
				}
			);

			res.json(storage);
		}
	} catch (err) {
		console.log(err);
		res.send(err);
	}

	return event.res.jsonResponse;
});
