// const arr = [2, 4, 6, 8, 10];

// const reducefn = (acc, cur, idx, src) => {
//   console.log(`acc:${acc} / cur:${cur} / idx:${idx} / src${src}`);
//   return acc + cur;
// };
// const result = arr.reduce(reducefn, 0);
// console.log(result);

// const sum = (arr) => {
//   let result;
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// };
// console.log(`${sum(arr)}`);

// let arr = [
//   "강석원",
//   "박종훈",
//   "윤승준",
//   "이슬비",
//   "이정훈",
//   "이진우",
//   "장효택",
//   "장도현",
//   "최도원",
//   "최승준",
// ];
// let arr2 = ["qwqwe", "qweqwe"];
// arr = arr.concat(arr2);
// console.log(arr);
// arr.push("홍길동");
// arr.push(arr2);
// const popAc = arr.pop();
// console.log(popAc);
// console.log(arr);
// const filterfn = (value, index, arr) => {
//   if (value.indexOf("이") === 0) {
//     return true;
//   } else {
//     return false;
//   }

//   // return value[0] === "이" ? true : false;
// };
// const filterResult = arr.filter(filterfn);
// console.log(filterResult);

// [].concat
// const filterfn = (value, index, arr) => {
//   console.log(`[${index}] ${value}`);
//   return value[0] === "이" ? true : false;
// };
// const filterResult = arr.filter(filterfn);
// console.log(filterResult);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filterfn = (value, index, arr) => {
//   console.log(`[${index}] ${value}`);
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const filterResult = arr.filter(filterfn);
// console.log(filterResult);

// const Sunmoonfn = (value, index, arr) => {
//   console.log(`[${index}} ${value * value}`);
//   return value * value;

// };

// const MapResult = arr.map(Sunmoonfn);
// console.log(MapResult);

// const sunmoonfn = (value, index) => {
//   console.log(`[${index}} ${value}`);
// };
// const forEachresult = arr.forEach(sunmoonfn);
// console.log(forEachresult);

// const call3Timers = (callback) => {
//   for (let i = 0; i < 3; ++i) {

//     if(i===2){
//         callback(i);
//     }
//   }
// };
// const myPrint = (idx) => console.log(`${idx}번째 함수 호출`);
// call3Timers(function (idx) {
//   console.log(`${idx}번째 함수 호출`);
// });
