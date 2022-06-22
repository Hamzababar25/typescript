"use strict";
//TypeScript has a specific syntax for typing arrays.
const names = ["hamza", "abar"];
console.log(names);
//Readonly
//The readonly keyword can prevent arrays from being changed.
const namess = ["jjbj"];
//namess.push("dylan")
//we wont be able to push because it is readonly property
///Type Inference
//TypeScript can infer the type of an array if it has values.
// mtlb k khudi guess krle data type 
const array = [1, 2, 3,];
array.push("Dc");
console.log(array);
//agr ham unknown lgae gein to wo infer hi krega ar waise agr ham ne sirf number ki array bnae ha to wo hamein tring nhi add krne de ga wo infer krega k numbers ki string ha
// ar agr ham array k andr strings ar numbers khud dein gein to wo string ar number dono ko infer krega 
const arrayy = [1, 2, 3];
//arrayy.push("Dc")
console.log(array);
const arrayyy = [1, 2, 3, "zdd"];
array.push("Dc");
console.log(array);
//all concepts written above 
