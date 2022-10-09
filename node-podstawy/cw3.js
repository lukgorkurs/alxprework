const shopping = [
    {
      name: "banan",
      price: 3.99
    },
    {
      name: "Wiśnie",
      price: 19.99
    },
    {
      name: "Chleb",
      price: 4.99
    },
  ]

  
  const peoples = [
    {
        height: 178
    },
    {
        height: 164
    },
    {
        height: 199
    }
  ]

  // 1. Za pomocą funkcji sort, zwróc produkt, który jest najdrozszy
  // 2. Za pomoca funkcji find, sprawdz cene chleba
  // 3. Za pomoca funkcji reduce, sprawdz srednia wzrostu w klasie. W klasie sa 3 osoby [178, 164, 199]



const sortedShoppingList = shopping.sort((a, b) => {
    return a.price < b.price ? 1 : -1;
});


console.log(`najdroższy: ${sortedShoppingList[0].name} ${sortedShoppingList[0].price}`);

const breadPrice = shopping.find(shopping => shopping.name === 'Chleb');


console.log(`Cena chleba: ${breadPrice.price} `);



const sumHeight = peoples.reduce((accumulator,people) => {
    return accumulator + people.height;
}, 0)


console.log(sumHeight/peoples.length);