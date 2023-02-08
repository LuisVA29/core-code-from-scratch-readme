[Return](https://github.com/LuisVA29/core-code-from-scratch-readme)
# Lunes 23 de enero de 2023
## "this" is a problem
[Description](https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript)
``` Javascript
function NameMe(first, last) {
this.firstName = first;
this.lastName = last;
this.name = this.firstName + ' ' + this.lastName;
}
var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe
```
## Thinkful - List and Loop Drills: Lists of lists
[Description](https://www.codewars.com/kata/586e1d458cb711f0a800033b/train/javascript)
``` Javascript
function processData(data) {
let product = 1;
for (let i = 0; i < data.length; i++) {
product *= data[i][0] - data[i][1];
}
return product;
}
console.log(processData([[2, 5], [3, 4], [8, 7]]));
console.log(processData([[3, 2], [5, 4], [7, 6]]));
console.log(processData([[10, 2], [3, 4], [8, 7]])); 
```
## Stop gninnipS My sdroW!
[Description](https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript)
``` Javascript
function spinWords(str) {
let words = str.split(" ");
for (let i = 0; i < words.length; i++) {
if (words[i].length >= 5) {
words[i] = words[i].split("").reverse().join("");
}
}
return words.join(" ");
}
console.log(spinWords("Hey fellow warriors")); // Output: "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // Output: "This is a test"
console.log(spinWords("This is another test")); // Output: "This is rehtona test"
```
# Martes 24 de enero de 2023
## "this" is an other problem
[Description](https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript)
``` Javascript
function NamedOne(first, last) {
  let _firstName = first;
  let _lastName = last;
  let _fullName = first + ' ' + last;
  Object.defineProperty(this, 'firstName', {
    get: function() {
      return _firstName;
    },
    set: function(value) {
      _firstName = value;
      _fullName = _firstName + ' ' + _lastName;
    }
  });
  Object.defineProperty(this, 'lastName', {
    get: function() {
      return _lastName;
    },
    set: function(value) {
      _lastName = value;
      _fullName = _firstName + ' ' + _lastName;
    }
  });
  Object.defineProperty(this, 'fullName', {
    get: function() {
      return _fullName;
    },
    set: function(value) {
      if (value.split(' ').length === 2) {
        _fullName = value;
        var names = value.split(' ');
        _firstName = names[0];
        _lastName = names[1];
      }
    }
  });
}
```
## Who likes it?
[Description](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)
``` Javascript
function likes(names) {
  return names.length === 0 ? "no one likes this" :
         names.length === 1 ? `${names[0]} likes this` :
         names.length === 2 ? `${names[0]} and ${names[1]} like this` :
         names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
         `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
```
## Convert string to camel case
[Description](https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript)
``` Javascript
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}
```
# Miércoles 25 de enero de 2023
## Easy mathematical callback
[Description](https://www.codewars.com/kata/54b7c8d2cd7f51a839000ebf)
``` Javascript
function processArray(array, callback) {
  return array.map(callback);
}
// Test Cases
// Test Case 1
var myArray = [4, 8, 2, 7, 5];
myArray = processArray(myArray,function (a) {
  return a * 2;
});
console.log(myArray); // Output: [ 8, 16, 4, 14, 10 ]
// Test Case 2
var myArray = [7, 8, 9, 1, 2];
myArray = processArray(myArray, function (a) {
  return a + 5;
});
console.log(myArray); // Output: [ 12, 13, 14, 6, 7 ]
// Test Case 3
var myArray = [1, 2, 3, 4, 5];
myArray = processArray(myArray, function (a) {
  return a * a;
});
console.log(myArray); // Output: [ 1, 4, 9, 16, 25 ]
```
## Moving Zeros To The End
[Description](https://www.codewars.com/kata/52597aa56021e91c93000cb0)
``` Javascript
function moveZeros(arr) {
  let nonZero = arr.filter(x => x !== 0);
  let zeros = arr.filter(x => x === 0);
  return nonZero.concat(zeros);
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// Output: [false, 1, 1, 2, 1, 3, "a", 0, 0]
```
## Valid Parentheses
[Description](https://www.codewars.com/kata/52774a314c2333f0a7000688)
``` Javascript
function validParentheses(string) {
  let count = 0;
  for (let char of string) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}
```
# Jueves 26 de enero de 2023
##The Hastag Generator
[Description](https://www.codewars.com/kata/52449b062fb80683ec000024)
``` Javascript
function generateHashtag(str) {
  let words = str.split(" ").filter(word => word);
  let result = "#" + words.map(word => word[0].toUpperCase() + word.slice(1)).join("");
  return result.length > 140 || !words.length ? false : result;
}
```
## String Incrementer
[Description](https://www.codewars.com/kata/54a91a4883a7de5d7800009c)
``` Javascript
function incrementString(str) {
  const body = str.slice(0, -1);
  const lastDigit = str.slice(-1).match(/[0-9]/);
  return lastDigit === null
    ? str + "1"
    : lastDigit != 9
    ? body + (+lastDigit + 1)
    : incrementString(body) + "0";
}
```
