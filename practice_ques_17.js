
let arr =[0,1,1,5,2,44];
let n=3;

console.log(arr.slice(0,n));
console.log(arr.slice(-n));

str=prompt("pls enter a string");

if(str.length == 0){
    console.log("string is empty");
}
else{
    console.log("string is not empty");
    console.log(str.trim());
}

if(str[n] == str[n].toLowerCase()){
    console.log("character is lowercase");
}else{
    console.log("character is not lowercase");
}
//WriteaJavaScriptprogramtocheckifanelementexistsinanarrayornot.
if(arr.indexOf(0)!=-1){
    console.log("item is present");
}else{
    console.log("item is not present");
}