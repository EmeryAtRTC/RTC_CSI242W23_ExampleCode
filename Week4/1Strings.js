//string literal or template string, use ` backticks
let input = `Gianni@student.rtc.edu`;
//a string is just a character array
//get the character at a given index
console.log(`The character at index 1 ${input.charAt(1)}`);
//Something that might be useful when analyzing strings
console.log(`The code for the character at index 1 ${input.charCodeAt(1)}`);

//loop through a string
for(let i = 0; i < input.length; i++){
    console.log(`Character: ${input.charAt(i)} Index: ${i}`);
}

//indexOf() - takes a character and returns FIRST index
console.log(`The first . is located at ${input.indexOf('.')}`);
//lastIndexOf() - returns the last index of a given caharacter
console.log(`The last . is located at ${input.lastIndexOf('.')}`);
//index of can find a whole string
console.log(`The rtc is located at ${input.indexOf('rtc')}`);
//If you search for something that doesnt exist
console.log(`This does not exist ${input.indexOf('Josh')}`);

//We can replace values. First paramter is what you want to take out
//second parameter is what you put there instead
let input2 = input.replace('student.rtc.edu', 'gmail.com');
console.log(`After replace ${input2}`);
//You can also replace by index
//substr() - This method is deprecated
//substring()
let input3 = input.substring(input.indexOf('@') + 1);
console.log(input3);
let input4 = input.substring(input.indexOf('.') + 1, input.lastIndexOf('.'));
console.log(input4);

//split() - this takes a character and splits your string into an array of string
//divided by the caracter
let inputArray = input.split('.');
console.log(inputArray);

//ToUpperCase - ToLowerCase
console.log(`We can make strings uppercase ${input.toUpperCase()}`);
console.log(`We can make strings lowercase ${input.toLowerCase()}`);

//calling our function
console.log(`The location of the n: ${findCharacters(input, 'n', 5)}`);

//I want a method that takes a string, a character and a starting index
//and returns all of the locations of that character after the starting index
//"Hello World" 'l' 1
function findCharacters(inputString, searchValue, index = 0){
    let result = [];
    for(let i = index; i < inputString.length; i++){
        if(inputString.charAt(i) === searchValue){
            result.push(i);
        }
    }
    return result;
}