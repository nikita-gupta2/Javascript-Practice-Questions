const object={
    message:'Hello,World!',
    logMessage () {
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);
// After a delay of 1second,undefined is logged to the console.
// While the setTimeout() function uses the object.logMessage as a callback,still,it invokes object.
// logMessage as a regular function,rather than a method.And during a regular function invocation
// this equals the global object,which is a window in the case of the browser environment.That
// 's why console.log(this.message) inside log Message method logs window.message, which is undefined.


let length=4; 
function callback(){
    console.log(this.length);
}
const object2={
    length:5,
    method(callback){
        callback();
    },
};
object2.method(callback,1,2);
// Hello,World!'is logged to the console.
// object.getMessage() is a method invocation,
// that's why this inside the method equals object.There's also a variable
// declaration const message='Hello,Earth!
// 'inside the method.The variable doesn't influence the value of this.message.