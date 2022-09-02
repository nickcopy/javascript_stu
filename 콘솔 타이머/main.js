setTimeout(() => {
  console.log(`1초 후에 실행 됩니다.`);
}, 1 * 1000);

// let count = 0;
// const timerid = setInterval(() => {
//   console.log(`1초 마다 실행 됩니다(${count}번째)`);
//   count++;
// }, 1 * 1000);

let h = 16;
let m = 00;
let s = 00;

const timerid = setInterval(() => {
  console.log(
    `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`
  );
  if (s % 3 === 1) {
    if (confirm("멈추시겠습니까?")) {
      clearInterval(timerid);
    } else {
      q = 0;
    }
  }

  s++;
  if (60 <= s) {
    s = 0;
    m++;
    if (60 <= m) {
      m = 0;
      h++;
    }
  }
}, 1000);
