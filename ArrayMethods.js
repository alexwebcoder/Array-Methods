

//Using the filter method to return all names that start with the letter s

  let names = ["steve", "mark", "bob", "sam", "sully"];

  let sNames = names.filter(name => name[0] === "s");

  console.log(sNames);   


//Using filter, map, sort and reduce to find all numbers that are less than or equal to 25, subtract one from each number, add them up and give the average

let numbers = [3, 5, 88, 22, 99, 4, 6, 25, 33];

let filteredNumbers = numbers

.filter((number)=>{

  return number <=25 ? true : false; 

})
.map((number)=>{

  return number - 1;

})
.sort((a, b)=>{

 return a - b;

})
.reduce((acc, number, index, array)=>{

  acc += number;

  return index === array.length-1 ? acc/array.length : acc;

});
console.log(filteredNumbers);

//Using the for each method to log out each index and item as well as find one and make it uppercase

let dogs = ["german shephard", "doberman", "labradore retriever", "weinerheimmer", "pug"];

dogs.forEach((item, index, array)=>{

  if(item === "doberman"){
    item = item.toUpperCase();
  }else{

  }

   console.log(`Index number: ${index} -----> ${item}`);
 });

//using a for of loop to loop through an array, find the number greater than or equal to 21 and push it into an empty array

let ages = [21, 3, 5, 18, 44, 55, 17, 10, 19];
let oldEnough = [];


for(let age of ages){

  age >= 21 ? oldEnough.push(age) : oldEnough.push();

}

console.log(oldEnough);
