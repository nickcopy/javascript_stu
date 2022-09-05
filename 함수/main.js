const myPrint = (...data) => {
  let sum = " ";

  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i] + " ";
  }
  // console.log(data.split(""));
};

myPrint("안녕", "하세요", "문어", "입니다");

// const min = (...items) => {
//   console.log("dqwdqw", "qwdqwd", "qwfqwfqw");
// };
// console.log(min(10, 20, 40, 5, 10, 20));

// const min = (arr) => {
//   let minResult;

//   console.log(arr);
//   minResult = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     minResult = minResult < arr[i] ? minResult : arr[i];
//     console.log(minResult);
//   }

//   return minResult;
// };

// const input = [10, 200, 20, 100, 1155, 9, 8, 500, 7, 15185, 4];
// console.log(min(input));

// const max = (arr) => {
//   let maxResult;
//   console.log(arr);
//   maxResult = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     maxResult = maxResult > arr[i] ? maxResult : arr[i];
//     console.log(maxResult);
//   }
//   return maxResult;
// };
// console.log(max(input));
// const min = (a, b, c) => {
//   var result = a < b ? a : b;
//   result = result < c ? result : c;
//   return result;
// };
// console.log(min(10811757, 129919172));
// const max = (a, b, c) => {
//   var result = a > b ? a : b;
//   result = result > c ? result : c;
//   return result;
// };
// console.log(max(1718925, 12689));

// const isLeapYear = (year) =>
//   (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// console.log(`2020년의 윤년일까 == ${isLeapYear(2020)}`);
// console.log(`2010년의 윤년일까 == ${isLeapYear(2010)}`);
// console.log(`2000년의 윤년일까 == ${isLeapYear(2000)}`);
// console.log(`1900년의 윤년일까 == ${isLeapYear(1900)}`);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 5));
// const sum2 = function (a, b) {
//   return a + b;
// };
// console.log(sum2(4, 6));
// const sum3 = (a, b) => {
//   return a + b;
// };
// console.log(sum3(1, 3));
// const sum4 = (a, b) => a + b;
// console.log(sum4(1, 5));

// let mes = prompt("좋아하는 과일이 뭐에요");
// console.log(`좋하하는 과일은 ${mes}`);
// let a = confirm();
// console.log(a);
// function main(a, b, c) {
//   console.log(`a값은 ${a}입니다`);
//   console.log(`b값은 ${b}입니다`);
//   console.log(`c값은 ${c}입니다`);
//   console.log("");
// }
// main(10, 20, 30);
// const main2 = function (a, b, c) {
//   console.log("두번째 함수입니다");
//   console.log(`${a},${b},${c}`);
// };
// main2(10, 20, 30);
// const main3 = (a, b, c) => console.log(`세번째 함수${a},${b},${c}`);
// main3(10, 20, 30);
/*main();
main();
console.log(typeof main);
console.log(typeof 1234);
console.log(typeof "1234");
console.log(typeof [1,2,3,4]);

const obj = {a:1,b:2,c:3};
console.log(typeof obj);

console.log(typeof 1234.23);
console.log(main);
console.log(console.log);*/
