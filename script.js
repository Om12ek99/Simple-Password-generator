

// variabile con il nome -------> Name
const Name = prompt("Inserisci il tuo nome"); 
console.log(Name, typeof Name);

// variabile con il cognnome -------> Surname
const Surname = prompt ("Inserisci il tuo cognome"); 
console.log(Surname, typeof Surname);

// variabile con il colore preferito -------> FavCol
const FavCol = prompt("Inserisci il tuo colore preferito"); 
console.log(FavCol, typeof FavCol)

// numero random
let randomNumber = Math.floor((Math.random() * 100) + 1)

// unione delle variabili variabili 
let password = `${Name}${Surname}${FavCol}${randomNumber}`;
console.log(password);


// chiamata elemento ed inserimento in HTML
document.getElementById("Pass").innerHTML=password;