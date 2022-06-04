import Category from '~~/server/models/Category';
export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const { name } = await useBody(event);

	try {
		await Category.create({
			name: 'Eletrodomésticos',
			description: 'Eletrodomésricos',
			isRoot: true,
			categories: [
				await Category.create({
					name: 'máquinas de roupa',
					description: 'máquinas de roupa',
					categories: [
						await Category.create({
							name: 'lavar',
							description:
								'máquinas de roupa de lavar'
						}),
						await Category.create({
							name: 'secar',
							description:
								'máquinas de roupa de secar'
						}),
						await Category.create({
							name: 'lavar e secar',
							description:
								'máquinas de roupa de lavar e secar'
						}),
						await Category.create({
							name: 'outros máquinas de roupa',
							description:
								'outros máquinas de roupa'
						})
					]
				}),
				await Category.create({
					name: 'máquinas de loiça',
					description: 'máquinas de loiça',
					categories: [
						await Category.create({
							name: 'máquinas',
							description: 'máquinas'
						}),
						await Category.create({
							name: 'outros máquinas de loiça',
							description:
								'outros máquinas de loiça'
						})
					]
				})
			]
		});
	} catch (err) {
		event.res.jsonResponse.error = {
			message: err
		};
	}
	return event.res.jsonResponse;
});
