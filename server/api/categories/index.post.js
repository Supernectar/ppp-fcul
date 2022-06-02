import Category from '~~/server/utils/models/Category';
export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const { name } = await useBody(event);

	try {
		/*
		await Category.create({
			name: 'SUPER',
			description: 'categoria suprema',
			level: 0,
			isRoot: false,
			attributes: ['brand', 'producer', 'color'],
			categories: [
				await Category.create({
					name: 'Grandes Eletrodomésticos',
					description: 'Grandes Eletrodomésticos',
					level: 1,
					isRoot: true,
					attributes: [
						'height',
						'width',
						'length'
					],
					categories: [
						await Category.create({
							name: 'máquinas de roupa',
							description:
								'máquinas de roupa',
							level: 2,
							attributes: [],
							categories: [
								await Category.create(
									{
										name: 'lavar',
										description:
											'máquinas de roupa de lavar',
										level: 3,
										attributes: [
											'capacidade',
											'classe energética'
										]
									}
								),
								await Category.create(
									{
										name: 'secar',
										description:
											'máquinas de roupa de secar',
										level: 3,
										attributes: [
											'capacidade',
											'classe energética'
										]
									}
								),
								await Category.create(
									{
										name: 'lavar e secar',
										description:
											'máquinas de roupa de lavar e secar',
										level: 3,
										attributes: [
											'capacidade de lavar',
											'capacidade de secar',
											'classe energética'
										]
									}
								),
								await Category.create(
									{
										name: 'outros máquinas de roupa',
										description:
											'outros máquinas de roupa',
										level: 3
									}
								)
							]
						}),
						await Category.create({
							name: 'máquinas de loiça',
							description:
								'máquinas de loiça',
							level: 2,
							categories: [
								await Category.create(
									{
										name: 'máquinas',
										description:
											'máquinas',
										level: 3
									}
								),
								await Category.create(
									{
										name: 'outros máquinas de loiça',
										description:
											'outros máquinas de loiça',
										level: 3
									}
								)
							]
						})
					]
				})
			]
		});*/
	} catch (err) {
		event.res.jsonResponse.error = {
			message: err
		};
	}
	return event.res.jsonResponse;
});
