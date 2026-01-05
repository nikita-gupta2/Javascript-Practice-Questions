
let n =45;
let arr = [2,67,89,34,67];
function largerelem(){
    for (let i =0; i<=arr.length ; i++){
        if (arr[i] > n){
            console.log(arr[i]);
        }
    }
}

largerelem();

let str = "aabbcddeefgggg";
function uniquechar(str){
    let ans ="";
    for (let i=0; i<str.length;i++){
        let currchar = str[i];
        if (ans.indexOf(currchar) == -1){
            ans= ans+currchar;
        }
    }
    return ans;
}

console.log(uniquechar(str));

let country=["Australia","United States of America","Germany"];
function longeststring(str){
    let max= '';
    for (let i =0; i<str.length;i++){
        if (str[i].length > max.length){
            max = str[i];
        }
    }
    return max;
}

console.log(longeststring(country));

let string = 'addregfdlgjei';
function  countnoofvowels(str){
    let count = 0;
    for (let i = 0; i< str.length;i++){
        if (str[i] == 'a' ||str[i] == 'e'|| str[i] == 'i' ||str[i] == 'o'|| str[i] == 'u'){
            count ++;
        }
    }
    return count;
}

console.log(countnoofvowels(string));

function generaterandomno(start,end){
    let diff = end-start;
    let num = (Math.floor(Math.random()*diff +start));
    return num;
}

console.log(generaterandomno(4,10));