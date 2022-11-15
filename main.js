document.querySelector("h1").textContent = "babi";

// let array = new Array(1, 2, 3);

// for (i = 0; i < array.length; i++) {
//   console.log(array[i]);
//   console.log([i]);
//   console.log(array.length);
// }

// for (const element of array) {
//   console.log(element);
// }

//fibo
// const fibonacci = (n) =>
//   Array.from({ length: n }).reduce(
//     (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
//     []
//   );

// console.log(fibonacci(19));

// 0 : 0
// 1 : 1
// 2 : 1
// 3 : 2
// 4 : 3
// 5 : 5
// 6 : 8 = 23
// 7 : 13
// 8 : 21 = 3 x 7
// 9 : 34 = 2 x 17
// 10 : 55 = 5 x 11

//            1
// main.js:41 2
// main.js:41 3
// main.js:41 5
// main.js:41 8
// main.js:41 13
// main.js:41 21
// main.js:41 34
// main.js:41 55
let x;
const nilai = [0, 1];
let i = 0;
let j = 1;
let k = 0;
let c = 1;

function fibo(nilai3) {
  for (nilai, i, j, k; k <= nilai3; i = j, j = x, k++) {
    x = i + j;
    nilai.push(x);
  }
  for (const nilai2 of nilai) {
    console.log(`hasil yg ${c++}: ${nilai2}`);
  }
}

// fibo(100);

// for (c = 0; c <= nilai.length; c++) {

// }

//pyramid
// function segitiga3(panjang) {
//   let hasil = "";
//   for (let i = 0; i < panjang; i++) {
//     for (let j = 1; j >= panjang; j--) {
//       if (j <= i) {
//         hasil += `* `;
//       } else {
//         hasil += " ";
//       }
//     }
//     hasil += "\n";
//   }
//   return hasil;
// }
// console.log(segitiga3(10));

function segitiga4(nilai) {
  let hasil = "";
  for (let i = nilai; i > 0; i--) {
    for (let j = 1; j <= nilai; j++) {
      if (j >= i) {
        hasil += `${i} `;
      } else {
        hasil += " ";
      }
    }
    hasil += "\n";
  }
  return hasil;
}

// console.log(segitiga4(9));

//prime

function isPrime(nilai) {
  if (nilai < 2) {
    return false;
  }
  for (let i = 2; i < nilai; i++) {
    if (nilai % i == 0) {
      return false;
    }
  }
  return true;
}

function isPrime2(nilai) {
  for (let i = 0; i < nilai; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// isPrime2(100);
