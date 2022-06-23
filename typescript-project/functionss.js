"use strict";
//Using the | we are saying our parameter is a string or number:
function either(x) {
    console.log(`My code is ${x}`);
    //  ye ham ne literal use kiy ha mtlb k single quotes  andr string show hoga dollar k andr 
    // wo value dikhae ga
}
either("jasnc");
either(123);
///////////////////// above was union ////////////////////////
///        typescript   functionsss/////
// these function tell what the return type would be of the function and bounds it to that type
function getvalue() {
    return 2;
}
console.log(getvalue());
// void will return only output function
function showvalue() {
    console.log("bruhh");
}
showvalue();
//////    Parameters of functions//////////
function multiply(a, b) {
    return a * b;
}
let b = multiply(2, 3);
console.log(b);
//   optional parameters /////
function add(a, b, c) {
    return a + b + c;
}
let r = add(12, 13, 4);
console.log(r);
