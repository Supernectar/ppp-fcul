export default [
  // >
  {
    nameId: 'main',
    name: 'main',
    description: 'This is the main category hihihehehaha',
    parent: '',
    attributes: []
  },
  // ->
  {
    nameId: 'largeAppliances',
    name: 'Large appliances',
    description: '',
    parent: 'main',
    attributes: []
  },
  // -->
  {
    nameId: 'washingMachines',
    name: 'Washing machines',
    description: '',
    parent: 'largeAppliances',
    attributes: ['filtro maquina da roupa']
  },
  // --->
  {
    nameId: 'wash',
    name: 'wash',
    description: '',
    parent: 'washingMachines',
    attributes: ['altura', 'largura', 'tamanho']
  },
  {
    nameId: 'dry',
    name: 'dry',
    description: '',
    parent: 'washingMachines',
    attributes: []
  },
  {
    nameId: 'washAndDry',
    name: 'Wash and dry',
    description: '',
    parent: 'washingMachines',
    attributes: []
  },
  {
    nameId: 'otherWashingMachines',
    name: 'Other washing machines',
    description: '',
    parent: 'washingMachines',
    attributes: []
  },
  // -->
  {
    nameId: 'dishwashers',
    name: 'Dishwashers',
    description: '',
    parent: 'largeAppliances',
    attributes: []
  },
  // --->
  {
    nameId: 'dishwasherMachines',
    name: 'Dishwasher machines',
    description: '',
    parent: 'dishwashers',
    attributes: []
  },
  {
    nameId: 'otherDishwashers',
    name: 'Other dishwashers',
    description: '',
    parent: 'dishwashers',
    attributes: []
  }
];
