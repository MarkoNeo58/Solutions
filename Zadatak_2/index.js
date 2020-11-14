function palindrom(str) {
    // remove non-letter characters
    str = str.replace(/\W/g, '');
    // convert the word into an array
    const arr = str.split("");
    // reverse the order of elemnts in the array
    const arrReverse = arr.reverse();
    // convert the array into a string
    const strReverse = arrReverse.join("");
    // return the string without spaces
    return strReverse.split(" ").join("");
};

// get the word, remove spaces and non-letter characters
const word = prompt("Provjeri je li palindrom").split(" ").join("").replace(/\W/g, '');

// reverse a given word
const reverse = palindrom(word);

// check if they are the same
if(word.toLowerCase() === reverse.toLowerCase()){
    console.log("Palindrom");
} else {
    console.log("Nije palindrom");
};