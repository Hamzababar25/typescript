// //A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:
//tuple ma ham array bna k us ma values ki types likhte hain k kon se index ma kis type ki value ae gii

var arrays:[string,number,boolean]

arrays=["hamza",23,false,]
arrays.push("sd")
console.log(arrays)

//agr ham jo length hm ne define ki ha us se uper push kre gein to ho jae gi pr agr ham jo defined length ha usko sequence wise sahi se nhi likhein gei
//to errror dega
var arrayss:[string,number,boolean]

arrayss=["hamza","jdn",23,false,]
arrays.push("sd")
console.log(arrayss)
//error ho rhe 

// Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:


var numbersss: readonly[string,string,string]
numbersss=["adcadv","ascfc","ascc"]
numbersss.push("acac")
//we can not push as it is read only




