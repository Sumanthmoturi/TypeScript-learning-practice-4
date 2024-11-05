//Iterables

//1.Iterable interface:- Iterable is a type we can use if we want to take in types listed above which are iterable
function toArray<X>(xs: Iterable<X>): X[] {
    return [...xs]
  }


//2.for..of statements
let someArray = [1, "string", false];
for (let entry of someArray) {
  console.log(entry);
}

//3.for..of vs. for..in statements
let list = [4, 5, 6];
for (let i in list) {
  console.log(i);
}
for (let i of list) {
  console.log(i);
}


//example
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
  console.log(pet);
}
for (let pet of pets) {
  console.log(pet);
}