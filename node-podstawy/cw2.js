// 1. Stworz funkcje multiply, ktorej zadaniem bedzie wymnozyc przez siebie 2 liczby

// multiply(3, 3) -> 9

// 2. Stworz funkcje, ktora zwroci liczbe znakow z danego stringa

// checkLetter('Damian') -> 6

// 3. Stworz funkcje findByCategory, ktora przyjmuje kolekcje i kategorie, a nastepnie wyszukaj wszystkie ksiazki, ktore maja podana kategorie.

//findByCategory(books2, 'adventure') -> [{ob1}]

const books2 = [
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

const shopping = [
    {
      id: 1,
      name: "Banan",
      quantity: 3,
      price: 3.99
    },
    {
        id: 3,
        name: "Wiśnie",
        quantity: 0.5,
        price: 19.99
    },
    {
      id: 2,
      name: "Chleb",
      quantity: 1,
      price: 4.99
    }
    
  ]



const multiply = (value1,value2) => {
    return value1 * value2;
}


const checkLetter = (string) => {
    return string.length;
}



const findByCategory = (books, category) => {
    return books
        .filter(book => book.category === category);  
}


const findByCategoryExtended = (books, category) => {
    const temp = findByCategory(books, category);

    if (temp.length === 0) return 'No books';
    
    return temp;
}



console.log(multiply(3,5));

console.log(checkLetter('Damian'));

console.log(findByCategory(books2,'adventure'));

console.log(findByCategoryExtended(books2,'test'));

//pierwszaz listy
const fantasyBook = books2.find(book => book.category === 'fantasy');

console.log(fantasyBook);

const price3 = shopping.reduce((accumulator,product) => {
            return accumulator + product.price;
}, 0)

console.log(price3);


const sortedShoppingListAsc = shopping.sort((a, b) => {
    return a.price > b.price ? 1 : -1;
});

const sortedShoppingListDesc = shopping.sort((a, b) => {
    return a.price > b.price ? -1 : 1;
})

console.log(sortedShoppingListAsc);

 console.log(sortedShoppingListDesc);