const ordersFromPlayer = [
  {
    [0]: {
      items: {
        bread: 20,
        water: 50,
        toolkit: 2,
      },
      shelfBin: Math.random(1, 10),
      destinationShop: 'GeneralStore',
      destinationCoord: { x: 0.0, y: 0.0, z: 0.0 },
      orderby: 'license:0212848fas',
    },
    [1]: {
      items: {
        bread: 20,
        water: 50,
        toolkit: 2,
      },
      shelfBin: Math.random(1, 10),
      destinationShop: 'GeneralStore',
      destinationCoord: { x: 0.0, y: 0.0, z: 0.0 },
      orderby: 'license:0212848fas',
    },
    [2]: {
      items: {
        bread: 20,
        water: 50,
        toolkit: 2,
      },
      shelfBin: Math.random(1, 10),
      destinationShop: 'GeneralStore',
      destinationCoord: { x: 0.0, y: 0.0, z: 0.0 },
      orderby: 'license:0212848fas',
    },
    [3]: {
      items: {
        bread: 20,
        water: 50,
        toolkit: 2,
      },
      shelfBin: Math.random(1, 10),
      destinationShop: 'GeneralStore',
      destinationCoord: { x: 0.0, y: 0.0, z: 0.0 },
      orderby: 'license:0212848fas',
    },
  },
];

function GeneratePull(orderLists) {
  let pullListNumber =
    orderLists[Math.floor(Math.random() * orderLists.length)];
  return pullListNumber;
}

export default function OrdersApplication() {
  const generatedData = GeneratePull(ordersFromPlayer);
  return <div></div>;
}
