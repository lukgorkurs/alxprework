const elementSay = document.querySelector('button#first');
const elementAdd = document.querySelector('button#second');
const elementWarning = document.querySelector('button#third');
const body = document.querySelector('body');



elementSay.addEventListener('click', (event) => {
    event.preventDefault(); // blokowanie defaultowej akcji przegladarki    
    alert('Hello world!');
})
  

elementAdd.addEventListener('click', (event) => {
    event.preventDefault(); // blokowanie defaultowej akcji przegladarki  
    body.innerHTML += '<p> Kurs ALX wiele mnie uczy. </p>';    
})
  

elementWarning.addEventListener('click', (event) => {
    event.preventDefault(); // blokowanie defaultowej akcji przegladarki    
    
    const h1 = document.querySelectorAll('h1');

    h1.forEach(h1 => {
       h1.classList.add('warning');
    });

 


})