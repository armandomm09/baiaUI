const ordersList = [
    {
      name: "Pedro",
      orderNumber: 23,
      orderTotal: 327.45,
      order: [
        {quantity: 2, name: "Hamburguesa con queso", price: 118.00},
        {quantity: 1, name: "Hamburguesa hawaiana", price: 75.00},
        {quantity: 1, name: "Agua de horchata", price: 20.00},
        {quantity: 1, name: "Agua de jamaica", price: 20.00},
      ]
    },
    {
      name: "Armando",
      orderNumber: 24,
      orderTotal: 123.12,
      order: [
        {quantity: 3, name: "Tacos al pastor", price: 150.00},
        {quantity: 2, name: "Quesadilla de pollo", price: 80.00},
        {quantity: 1, name: "Refresco de cola", price: 25.00},
        {quantity: 2, name: "Agua de limón", price: 30.00},
      ]
    },
    {
      name: "Filip",
      orderNumber: 25,
      orderTotal: 543.21,
      order: [
        {quantity: 1, name: "Ensalada César", price: 70.00},
        {quantity: 2, name: "Sándwich de pavo", price: 90.00},
        {quantity: 3, name: "Jugo de naranja", price: 60.00},
        {quantity: 1, name: "Café americano", price: 35.00},
      ]
    }
  ];

export default {
    ordersList
}