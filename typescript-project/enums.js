"use strict";
// enum k number stays the same and it assigns the value from the start as 0 and if we assign the value then it starts from from there 
var Numberr;
(function (Numberr) {
    Numberr[Numberr["hamza"] = 12] = "hamza";
    Numberr[Numberr["babar"] = 13] = "babar";
    Numberr[Numberr["asd"] = 33] = "asd";
    Numberr[Numberr["dsx"] = 22] = "dsx";
})(Numberr || (Numberr = {}));
console.log(Numberr.dsx);
