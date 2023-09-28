// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
cats.length = 0;


cats.push('Milo', 'Otis', 'Garfield');
const destructivelyAppendCat = function() {
cats.push('Ralph');
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


function destructivelyPrependCat() {
    cats.unshift ("Bob");
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveLastCat() {
    cats.pop()
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveFirstCat() {
    cats.shift()
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


let newCat
const appendCat= function() {
newCat= [...cats, "Broom"];
return newCat;
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


let newCat1
const prependCat= function() {
newCat1= ["Arnold", ...cats];
return newCat1;
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


let newCat2
const removeLastCat= function() {
newCat2 = [...cats.slice(0, 2)];
return newCat2;
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


let newCat3
const removeFirstCat= function() {
newCat3 = [...cats.slice(1, 3)];
return newCat3;
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

