
arr =[40,30,50,60];
console.log(arr.every((el)=>(el%10 == 0)));

console.log(arr.reduce((min,el) =>{
    if (el<min)
        return el;
    else 
        return min;
}));

const square=arr.map((num)=>num*num);
console.log(square);

let sum=square.reduce((acc,cur)=>acc+cur);
let avg=sum/arr.length;
console.log(avg);

let fivelarge = arr.map((elem) => elem+5);
console.log(fivelarge);

let strings = ["adam","bob","catlyn","donald","eve"];
console.log(strings.map((string)=>string.toUpperCase()));

function dubleandreturnargs(arr,...args){
    let double = [...arr, ...args.map((elem) => 2*elem)];
    return double;
}
console.log(dubleandreturnargs([1,3,4,5],5,45,6,7));


const mergeobject = (obj1,obj2) => ({
    ...obj1,...obj2
});

console.log(mergeobject({a:1,b:2},{c:3,d:4}));//{a:1,b:2,c:3,d:4}