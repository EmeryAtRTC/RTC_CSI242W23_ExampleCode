//Arrays are a collection
const numbers = [1, 2];
console.log(numbers);
//I have some methods that make arrays
//easier to work with
//add elements to the array using push()
numbers.push(3);
numbers.push(4);
numbers.push(5);
console.log(numbers);
//We have a pop() method
//pop removes and returns the last element
let removedElement = numbers.pop();
console.log(removedElement);
console.log(numbers);
//method called shift()
//removes and returns the first element
let firstElement = numbers.shift();
console.log(firstElement);
console.log(numbers);
//unshift()
//unshift adds to the beginning
numbers.unshift(10);
console.log(numbers);
//splice() removes from a certain index and then takes a number of elements
let shorterArray = numbers.splice(1, 2);
console.log(shorterArray);
console.log(numbers);
//You can also use splice to add elements
numbers.splice(1, 0, 5, 6, 7);
console.log(numbers);
