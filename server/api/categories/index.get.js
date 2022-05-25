import Category from '~~/server/utils/models/Category';

export default defineEventHandler(async (event) => {
	event.res.jsonResponse.context = event.context.params;

	const params = useQuery(event);
	const categories = await Category.find(params);

	const max = categories.reduce(function (prev, current) {
		return prev.level > current.level ? prev : current;
	});
	const maxLevel = max.level;

	let populateLevels = `{
	"path": "categories",
  `;
	for (let i = 0; i < maxLevel; i++) {
		populateLevels += `"populate": {
			"path": "categories"
		`;
		if (i != maxLevel - 1) populateLevels += ',';
	}
	for (let j = 0; j < maxLevel + 1; j++) {
		populateLevels += `
	}
	`;
	}

	const categoriesFinal = await Category.find(params).populate(
		JSON.parse(populateLevels)
	);

	event.res.jsonResponse.data = {
		items: categoriesFinal
	};
	return event.res.jsonResponse;
});
