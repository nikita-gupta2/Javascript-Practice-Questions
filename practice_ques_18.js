
//q1
// let arr =[1,3,4,5,6,5,9];
// let n =5;
// console.log(arr);
// for (i of arr) {
//     if (n == arr[i]){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

//q2 and q3

// let num = 123456;
// let count =0;
// let sum=0;
// while(num > 0){
//     count++;
//     sum = sum+num%10;
//     num=Math.floor(num/10);
// }
// console.log(count);
// console.log(sum);


// q4
// let n =7;
// let fac =1;
// for ( i =1; i<=n;i++)
// {
//     fac = fac * i;
// }
// console.log(fa24c);

//q5
let arr=[2,5,10,24,2,7,1,9];
let largest=0;
for (i =0; i< arr.length ; i++){
    if (largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);