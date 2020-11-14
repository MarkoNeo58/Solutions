// ask the user for an array of numbers
let nums = prompt("Unesi brojeve za N niz. Pozor: odvojite ih zarezom.").split(",");
let N = nums.map((el)=>{
    return parseInt(el);
});

// ask the user for the value of B
const B = parseInt(prompt("Unesi broj B"));


let result = 0;
let counter = 0;

// sort the numbers in descending order
N.sort((a, b)=> b - a);

// go through the array N
for(let el of N){
    // find the biggest number after B 
    if(el < B){
        // add it to the result
        result += el;
        counter ++;
        // check if the result is larger than B, if not, add that number again
        while (result < B){
            result += el;
            counter ++;
        }
        // if the result is larger than B, return the result to the former value and continue
        if (result > B){
            //return to the former value
            result -= el;
            counter --;
        }
    }
    // if the value is equal to B, break the loop and return 1
    else if (el === B){
        result = el;
        counter = 1;
        break;
    }
};



// check if the result is equal to B, if not, set the output to -1
if(result !== B) {
    counter = -1;
    console.log(`Do broja ${B} nije moguće doći zbrajanjem brojeva iz niza N, output: ${counter}`);
} else {
    console.log(`Rezultat zbrajanja je: ${result} Broj korištenih brojeva je: ${counter}`);
};
