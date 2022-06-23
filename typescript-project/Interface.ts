interface Man{
    height:number,
    color:string,
    voice:string
}

let obj:Man={
     height:15,
     color:"white",
     voice:"shrill"


}
console.log(obj.color)

//noe we will do it with extend 


interface Women{
    height:number
    weight:number
}
interface voice extends Women{
    voice:string
}

let woobj:voice={
    height:12,
    weight:11113,
    voice:"dc"

}
console.log(woobj)