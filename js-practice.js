// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

// while loop
// function selectEven(array) {
//   var newArray = [];
//   var i = 0;
//   while (i < array.length) {
//     newArray.push(array[i]);
//     i += 2;
//   }
//   return newArray;
// }

// for loop
// function selectEven(array) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i += 2) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }

// console.log(selectEven(["a", "b", "c", "d", "e", "f"]));

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// def factorial(number)
//   result = 1
//   current_number = number
//   number.times do
//     result = result * current_number
//     current_number = current_number - 1
//   end
//   result
// end
// p factorial(5)

// while loop
// function factorial(num) {
//   var result = 1;
//   var currentNumber = num;
//   while (currentNumber >= 1) {
//     result = result * currentNumber;
//     currentNumber = currentNumber - 1;
//   }
//   return result;
// }

// for loop
// function factorial(num) {
//   var result = 1;
//   for (var currentNumber = num; currentNumber >= 1; currentNumber -= 1) {
//     result = result * currentNumber;
//   }
//   return result;
// }

// console.log(factorial(5));

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// def descending(numbers)
//   result = []
//   index = numbers.length - 1
//   numbers.length.times do
//     result << numbers[index]
//     index = index - 1
//   end
//   result
// end
// p descending([1, 3, 5, 7])

// while loop
// function descending(array) {
//   var result = [];
//   var i = array.length - 1;
//   while (i >= 0) {
//     result.push(array[i]);
//     i--;
//   }
//   return result;
// }

// for loop
// function descending(array) {
//   var result = [];
//   for (var i = array.length - 1; i >= 0; i--) {
//     result.push(array[i]);
//   }
//   return result;
// }

// console.log(descending([1, 3, 5, 7]));

// # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// def sum_combinations(numbers1, numbers2)
//   result = []
//   numbers1.each do |number1|
//     numbers2.each do |number2|
//       result << number1 + number2
//     end
//   end
//   result
// end
// p sum_combinations([1, 5, 10], [100, 500, 1000])

// while loop
// function sumCombinations(numsOne, numsTwo) {
//   var result = [];
//   var i = 0;
//   while (i < numsOne.length) {
//     var j = 0;
//     while (j < numsTwo.length) {
//       result.push(numsOne[i] + numsTwo[j]);
//       j++;
//     }
//     i++;
//   }
//   return result;
// }

// for loop
// function sumCombinations(numsOne, numsTwo) {
//   var result = [];
//   for (var i = 0; i < numsOne.length; i++) {
//     for (var j = 0; j < numsTwo.length; j++) {
//       result.push(numsOne[i] + numsTwo[j]);
//     }
//   }
//   return result;
// }

// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

// javascript bubble sort

// function bubbleSort(array) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         var tempNum = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = tempNum;
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSort([2, 4, 1, 245, 23, 5]));

// 1) Write a function that takes in an array of numbers and returns its sum.

// function sum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (num) {
//     sum += num;
//   });
//   return sum;
// }

// console.log(sum([4, 2, 5, 6]));

// 2) Write a function that takes in an array of strings and returns the smallest string.

// function smallestString(words) {
//   var smallest = words[0];
//   words.forEach(function (word) {
//     if (smallest.length > word.length) {
//       smallest = word;
//     }
//   });
//   return smallest;
// }

// console.log(smallestString(["hey", "hi", "hello"]));

// 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reverseNums(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

console.log(reverseNums([1, 2, 3, 4, 5]));

// 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

// 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.

// 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

// 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
