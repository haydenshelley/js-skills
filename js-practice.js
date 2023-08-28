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
