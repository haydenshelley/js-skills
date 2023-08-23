// # 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

// let word = "hello";
// console.log(word.toUpperCase());

// # 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

// let number = "1000";
// let num = parseInt(number);
// console.log(typeof num);

// # 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNumbers(4, 5);

// # 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

// function reverseString(string) {
//   let split = string.split("");
//   let reverse = split.reverse();
//   let joined = reverse.join("");
//   console.log(joined);
// }

// reverseString("hello");

// # 5. Write a program that asks the user to enter a number, then prints the number times 10.

// function timesTen(num) {
//   num *= 10;
//   console.log(num);
// }

// timesTen(10);

// # 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

// function twoCapitalWords(stringOne, stringTwo) {
//   console.log(`${stringOne.toUpperCase()} ${stringTwo.toUpperCase()}`);
// }

// twoCapitalWords("hello", "world");

// # 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

// function wordLength(string) {
//   console.log(string.length);
// }

// wordLength("alphabet");

// # 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

// # 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

// function multiplyNumbers(numOne, numTwo) {
//   console.log(numOne * numTwo);
// }

// multiplyNumbers(5, 5);

// # 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

function lengthCheck(string) {
  if (string.length > 5) {
    console.log("That's a long word");
  } else {
    console.log("That's a short word");
  }
}

lengthCheck("alphabet");
lengthCheck("hi");
