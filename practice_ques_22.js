
function printpoem(){
    console.log("twinkle twinkle little star");
}
6
printpoem();

function rolldice(){
    let num = Math.floor(Math.random()* +1);
    console.log(num);
}

rolldice();

function avgof3(num1,num2,num3){
    console.log((num1+num2+num3)/3);
}

avgof3(4,5,9);

function tableofn(n){
    for (let i=n ;i <=n*10; i+=n){
        console.log(i);
    }
}
tableofn(4);
tableofn(5);

function sumofn(n){
    let sum=0;
    for (let i=1;i<=n;i++){
        sum = sum+i;
    }
    return sum;
}

console.log(sumofn(3));

let str = ["hi", "hello", "bye"," "]
function concatarr(str){
    let result ='';
    for (let i=0; i<str.length;i++){
       result = result+str[i]; 
    }

    return result
}

console.log(concatarr(str));