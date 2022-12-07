
//Algoritmo para saber si una palabra es palindromo, es decir,si se lee de izquierda a derecha y viceversa (for).

function isPalindromic(word){
    for(let i = 0;i<word.length;i++){
        if (word[i]!=word[word.length-i-1])return false;
    }return true;
}

function result(boolean){
    if (boolean)return "The word is palindromic.";
    return "The word is not palindromic.";
}

//Creamos la variable user como nombre y word que es la palabra. Luegos hacemos un alert saludando y retornando el resultado de la palabra
let user = prompt("Please enter your name.");
let word = prompt("Enter the word. ");
alert("Hi "+ user+"!\n" + result(isPalindromic(word)));