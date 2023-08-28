// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// var numbers = [5, 10, 8, 3];
// var sum = numbers.reduce(function (sum, num) {
//   return sum + num;
// });

// console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// var strings = ["volleyball", "basketball", "badminton"];
// var string = strings.reduce(function (string, word) {
//   return string + word;
// });

// console.log(string);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];

// var total = items.reduce(function (total, item) {
//   return total + item.price;
// }, 0);

// console.log(total);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

// var numbers = [5, 10, 8, 3, 9, 2];
// var min = numbers[0];
// numbers.forEach(function (number) {
//   if (number < min) {
//     min = number;
//   }
// });

// var min = numbers.reduce(function (min, num) {
//   if (min > num) {
//     return num;
//   } else {
//     return min;
//   }
// }, numbers[0]);

// console.log(min);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// var strings = ["volleyball", "basketball", "badminton"];
// var totalLength = strings.reduce(function (totalLength, string) {
//   return totalLength + string.length;
// }, 0);

// console.log(totalLength);

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];

// var cheapestItem = items.reduce(function (cheapestItem, item) {
//   if (cheapestItem > item.price) {
//     return item;
//   } else {
//     return cheapestItem;
//   }
// }, items[0].price);

// console.log(cheapestItem);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// var numbers = [5, 10, 8, 3];
// var product = numbers.reduce(function (product, number) {
//   return product * number;
// }, 1);

// console.log(product);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// var sports = ["volleyball", "basketball", "badminton"];
// var combinedSports = sports.reduce(function (combinedSports, sport) {
//   return combinedSports + `${sport}-`;
// }, "-");

// console.log(combinedSports);

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];

// var shortestName = items.reduce(function (shortestName, item) {
//   if (shortestName.name.length > item.name.length) {
//     return item;
//   } else {
//     return shortestName;
//   }
// }, items[0]);

// console.log(shortestName);

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

var numbers = [5, 10, 8, 3];
var max = numbers.reduce(function (max, number) {
  if (max < number) {
    return number;
  } else {
    return max;
  }
}, numbers[0]);

console.log(max);
