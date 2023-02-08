[Return](https://github.com/LuisVA29/core-code-from-scratch-readme)
# Lunes 9 de enero de 2023
## String: substr()
[Description](https://www.jshero.net/en/koans/stringsubstr.html)
``` Javascript
function firstWord(str) {
  return str.substr(0, str.indexOf(" "));
}
```
## String: replace()
[Description](https://www.jshero.net/en/koans/replace.html)
``` Javascript
function normalize(date) {
return date.replace(/-/g, '/')
}
```
## Increment
[Description](https://www.jshero.net/en/koans/increment.html)
``` Javascript
// The value of x is 7.
```
## Fahrenheit
[Description](https://www.jshero.net/en/koans/fahrenheit.html)
``` Javascript
function toFahrenheit(celsius) {
return solution = celsius * 1.8 + 32;
}
```
## Boolean
[Description](https://www.jshero.net/en/koans/bool.html)
``` Javascript
function nand(value1,value2){
return !(value1 && value2)
}
```
# Martes 10 de enero de 2023
## Objects
[Description](https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript)
```Javascript 
function animal(obj){
  return 'This '+obj.color+' '+obj.name+' has '+obj.legs+" legs.";
}
```
## Return to sanity
[Description](https://www.codewars.com/kata/514a7ac1a33775cbb500001e/train/javascript)
```JavaScript 
function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}
```
## Object syntax debug
[Description](https://www.codewars.com/kata/56d8ae9237123036d3001b54/train/javascript)
```JavaScript
let rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient',
 },
    },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water',
          },
        },
};
```
# Miércoles 11 de enero de 2023
## Count strings in objects
[Description](https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript)
``` Javascript
function strCount(obj) {
    if (!obj) return 0;
    let count = 0;
    for (const value of Object.values(obj)) {
        if (typeof value === 'string') {
            count++;
        } else if (Array.isArray(value)) {
            count += countStringInArray(value);
        } else if (typeof value === 'object') {
            count += strCount(value);
        }
    }
    return count;
}
function countStringInArray(arr) {
    if (!arr) return 0;
    let count = 0;
    for (const item of arr) {
        if (typeof item === 'string') {
            count++;
        } else if (Array.isArray(item)) {
            count += countStringInArray(item);
        } else if (typeof item === 'object') {
            count += strCount(item);
        }
    }
    return count;
}
console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: [ "anytime",2,3,4,['a','b','c'] ],
  fifth:  null
}));
```
## Extending JavaScript Objects: Get First & Last Array Element
[Description](https://www.codewars.com/kata/581351c40d8f13bc450008b8/train/javascript)
``` Javascript
Array.prototype.first = function() {
    return this[0];
};
Array.prototype.last = function() {
    return this[this.length - 1];
};
```
## Object Oriented Piracy
[Description](https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript)
``` Javascript
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}
Ship.prototype.isWorthIt = function() {
    var totalWeight = this.draft;
    var weightOfCrew = this.crew * 1.5;
    var netWeight = totalWeight - weightOfCrew;
    if (netWeight > 20) {
        return true;
    }
    return false;
}
```
# Jueves 12 de enero de 2023
## Convert a String to a Number!
[Description](https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript)
``` Javascript
const stringToNumber = function(str){
  return Number(str)
}
```
## Convert number to reversed array of digits
[Description](https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript)
``` Javascript
function digitize(n) {
    return n.toString().split('').map(Number).reverse();
}
```
## Truthy and Falsy
[Description](https://www.codewars.com/kata/595c2988d946a13298000157/train/javascript)
``` Javascript
let truthy = [1, 'string', [], {}, true];
let falsy = [0, '', null, undefined, false];
```
## Training JS #4: Basic data types--Array
[Description](https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript)
``` Javascript
function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length-1];
}
function pushElement(arr, element) {
  arr.push(element);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}
```
