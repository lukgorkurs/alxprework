console.log('Hello world!!');

const shopping = [
    {
      id: 1,
      name: "Banan",
      quantity: 3,
      price: 3.99
    },
    {
      id: 2,
      name: "Chleb",
      quantity: 1,
      price: 4.99
    },
    {
      id: 3,
      name: "Wiśnie",
      quantity: 0.5,
      price: 19.99
    }
  ]

  let suma=0;

 shopping.forEach(id => {
    suma+=id.price*id.quantity;
});

 
 
console.log(`Suma wartości: ${suma}`) 


suma=0;

shopping.forEach(id => {

    if  (id.name.includes("e")) {     suma+=id.price*id.quantity;}
    
});
   

console.log(`Suma dla e: ${suma}`) 

suma =0;



// const test = shopping.filter(product =>{
//     return product.name.includes('e');
// });

// test.forEach(id => {

//          suma+=id.price*id.quantity;
    
// });



// shopping.filter(product =>{
//     return product.name.includes('e');
// }).forEach(id => {

//          suma+=id.price*id.quantity;
    
// });


shopping
  .filter(product => product.name.includes('e'))
  .forEach(product => {
         suma+=product.price*product.quantity;
    });

console.log(`Suma dla e filtered: ${suma}`) 
   



 