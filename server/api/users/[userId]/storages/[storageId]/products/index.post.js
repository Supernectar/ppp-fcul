export default defineEventHandler(async (event) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  try {
    const decoded = await jwt.verify(token, 'secretkey');

    const { id } = req.params;
    const { item, price, unit, quantity } = req.body;

    const storage = await Storage.findById(id);
    const itm = await Item.findById(item);

    if (!itm) {
      res.json({ error: 'Item not found' });
    } else if (!storage) {
      res.json({ error: 'Storage not found' });
    } else if (storage.owner !== decoded.user._id) {
      res.json({
        error: 'You must be the owner to change this storage'
      });
    } else {
      // Falta verificar se o item que esta a ser inserido existe na lista de produtos do storage, se sim deve retornar um erro

      const product = await Product.create({
        item,
        price,
        unit,
        quantity
      });

      const storage = await Storage.updateOne(
        { _id: id },
        {
          $push: { products: product }
        }
      );

      return storage;
    }
  } catch (err) {
    console.log(err);
    return { error: 'Could not create product' };
  }
});
