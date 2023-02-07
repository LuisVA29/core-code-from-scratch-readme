# Lunes 16 de enero de 2023
## Training JS #7: if..else and ternary operator
[Description](https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript)
``` Javascript
function saleHotdogs(n) {
    if (n < 5) {
        return n * 100;
    } else if (n >= 5 && n < 10) {
        return n * 95;
    } else {
        return n * 90;
    }
}
```
## Training JS #8: conditional statement--switch
[Description](https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript)
``` Javascript
function howManydays(month) {
    switch (month) {
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}
```
## Basic calculator
[Description](https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript)
``` Javascript
function calculate(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return null;
        } else {
            return num1 / num2;
        }
    } else {
        return null;
    }
}
```
# Martes 17 de enero de 2023
## Even or odd
[Description](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript)
``` Javascript
function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
```
## A wolf in sheep's clothing
[Description](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript)
``` Javascript
function warnTheSheep(queue) {
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep";
    } else {
        return `Oi! Sheep number ${queue.length - queue.indexOf("wolf") - 1}! You are about to be eaten by a wolf!`;
    }
}
```
## Decode the morse code
[Description](https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript)
``` Javascript
function decodeMorse(morseCode) {
    let words = morseCode.trim().split('   ');
    let decodedWords = words.map(word => {
        let letters = word.split(' ');
        let decodedLetters = letters.map(letter => MORSE_CODE[letter]).join('');
        return decodedLetters;
    });
    return decodedWords.join(' ');
}
```
# Miércoles 18 de enero de 2023
## Who likes it?
[Desciption](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript)
``` Javascript
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
```
## Bit counting
[Desciption](https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript)
``` Javascript
function countOnes(n) {
  var binary = n.toString(2);
  var count = 0;
  for (var i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      count++;
    }
  }
  return count;
}
```
## Your order, please
[Desciption](https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript)
``` Javascript
function order(sentence) {
  if (!sentence) {
    return "";
  }
  var words = sentence.split(" ");
  var sortedWords = new Array(words.length);
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var position = word.replace(/[^0-9]/g, "");
    sortedWords[position - 1] = word;
  }
  return sortedWords.join(" ");
}
```
# Jueves 19 de enero de 2023
## Counting duplicates
[Desciption](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript)
``` Javascript
function duplicateCount(text) {
  var lowerText = text.toLowerCase();
  var charCounts = {};
  var duplicates = 0;
  for (var i = 0; i < lowerText.length; i++) {
    var char = lowerText[i];
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }
  for (var char in charCounts) {
    if (charCounts[char] > 1) {
      duplicates++;
    }
  }
  return duplicates;
}
```
## Encrypt this!
[Desciption](https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript)
``` Javascript
function encryptThis(text) {
    let words = text.split(" ");
    let res = [];
    for (let i of words) {
        let newWord = "";
        let temp = "";
        for (let j = 0; j < i.length; j++) {
            if (j === 0) {
                newWord += i.charCodeAt(j);
            } else if (j === 1) {
                temp = i[j];
                newWord += i[i.length - 1];
            } else if (j === i.length - 1) {
                newWord += temp;
            } else {
                newWord += i[j];
            }
        }
        res.push(newWord);
    }
    return res.join(" ");
}
```
## Valid parentheses
[Desciption](https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript)
``` Javascript
function validParentheses(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else if (str[i] === ')' && stack.length > 0) {
      stack.pop();
    } else if (str[i] === ')' && stack.length === 0) {
      return false;
    }
  }
  return stack.length === 0;
}
```
## Convert string to camel case
[Desciption](https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript)
``` Javascript
function toCamelCase(str) {
let words = str.split(/[-_]/);
let camelCase = words[0];
for (let i = 1; i < words.length; i++) {
let word = words[i];
camelCase += word[0].toUpperCase() + word.slice(1);
}
return camelCase;
}
```
