// const 내쇼핑물 = {
//   제품들: products,
// };
// console.printf = function (str) {
//   console.log(str);
// };
// console.printf("내가 만든 함수");

// String.prototype.toPrint = function () {
//   console.log("[2022-09-06]" + this.valueOf());
// };
// "dd".toPrint();
// console.log("abcd".toString());
// console.log(["a", "b", "c", "d"].toString());
// console.log((100).toString());
// const arr = [10, 20, 50, 40, 80];
// const max = Math.max(...arr);

// console.log(max);
// const re = Math.random() * 10;
// console.log(Math.ceil(re));
// console.log(re.toFixed(2));
const products = [
  {
    제품명: "탐사수",
    가격: 500,
    무게: 50,
  },
  {
    제품명: "모니터",
    가격: 500000,
    무게: 200,
  },
  {
    제품명: " 마우스",
    가격: 2000,
    무게: 40,
  },
  {
    제품명: "화장지",
    가격: 80,
    무게: 10,
  },
];

const compare = (a, b) => {
  console.log(`a의값 ${JSON.stringify(a)}`);
  console.log(`b의값 ${JSON.stringify(b)}`);

  if (a.가격 < b.가격) {
    return 1;
  }
  if (a.가격 > b.가격) {
    return -1;
  }
  return 0;
};

const sortResult2 = products.sort(compare);
console.log(sortResult2);

// console.log(products.sort(compare));

// const sortResult = months.sort(compare);
// console.log(sortResult);

// console.log(array1);
