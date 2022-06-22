// in here we will make an object and put data tpes of each 

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };


  //in type interface it wil automatically understandand what the type is and will not generate error if we put 
  // the same data type of value

  const carr = {
    type: "Toyota",
  };
  car.type = "Ford"; 
  carr.type = 2;

  // it generates an error because we can not put a number value in type


  