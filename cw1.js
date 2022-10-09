// Mamy listę ksiązek

// 1. Przy uzyciu funkcji filter, wyswietl tablice ksiazek z kategorii adventure
// 2. Przy uzyciu funkcji filter, wyszukaj elementy, ktore maja w swojej nazwie ciag znakow 'er'
// 3. Przy uzyciu funkcji map, stworz tablice zawierajaca ile jest liter w nazwie ksiazki

const books = [
    {
      name: "Harry Potter",
      category: "adventure"
    },
    {
      name: 'Alice in Wonderland',
      category: 'fantasy'
    },
    {
      name: 'Lord of the Rings',
      category: 'fantasy'
    }
  ]

//   shopping
//   .filter(product => product.name.includes('e'))
//   .forEach(product => {
//          suma+=product.price*product.quantity;
//     });

// console.log(`Suma dla e filtered: ${suma}`) 
   
console.log(`1. Przy uzyciu funkcji filter, wyswietl tablice ksiazek z kategorii adventure`);
books
  .filter(book => book.category === "adventure")
  .forEach(book => {
        console.log(`${book.name}`) 
    });


console.log(`2. Przy uzyciu funkcji filter, wyszukaj elementy, ktore maja w swojej nazwie ciag znakow 'er'`);
books
  .filter(book => book.name.includes('er'))
  .forEach(book => {
        console.log(`${book.name}`) 
    });

console.log(`3. Przy uzyciu funkcji map, stworz tablice zawierajaca ile jest liter w nazwie ksiazki`);

const map1 = books.map(books => books.name.length);
console.log(map1);