const arrayavg = (arr) =>{
    let sum =0;
    for (let i=0; i<arr.length;i++){
        sum = sum +arr[i];
    }
    let avg =(sum)/arr.length;
    return avg;
}

console.log(arrayavg([1,2,20,4,5]));

const even = (n) =>{
    return n%2 == 0;
}

console.log(even(4));
console.log(even(5));