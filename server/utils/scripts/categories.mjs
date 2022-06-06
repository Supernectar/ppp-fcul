export default [
	// >
	{
		name: 'categoria',
		description: 'categoria suprema',
		parent: '',
		attributes: []
	},
	// ->
	{
		name: 'Grandes Eletrodomésticos',
		description: '',
		parent: 'categoria',
		attributes: []
	},
	// -->
	{
		name: 'máquinas de roupa',
		description: '',
		parent: 'Grandes Eletrodomésticos',
		attributes: ['filtro maquina da roupa']
	},
	// --->
	{
		name: 'lavar',
		description: '',
		parent: 'máquinas de roupa',
		attributes: ['altura', 'largura', 'tamanho']
	},
	{
		name: 'secar',
		description: '',
		parent: 'máquinas de roupa',
		attributes: []
	},
	{
		name: 'lavar e secar',
		description: '',
		parent: 'máquinas de roupa',
		attributes: []
	},
	{
		name: 'outras máquinas de roupa',
		description: '',
		parent: 'máquinas de roupa',
		attributes: []
	},
	// -->
	{
		name: 'máquinas de loiça',
		description: '',
		parent: 'Grandes Eletrodomésticos',
		attributes: []
	},
	// --->
	{
		name: 'máquinas',
		description: '',
		parent: 'máquinas de loiça',
		attributes: []
	},
	{
		name: 'outras máquinas de loiça',
		description: '',
		parent: 'máquinas de loiça',
		attributes: []
	}
];
