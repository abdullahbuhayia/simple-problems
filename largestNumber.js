let a = 5000;
let b = 700;
let c = 1000;

// if (a > b) {
//     if (a > c) {
//         console.log("largest Number is:", a)
//     } else {
//         console.log("largest Number is:", c)
//     }
// } else {
//     if (b > c) {
//         console.log("largest Number is:", b)
//     } else {
//         console.log("largest Number is:", c)
//     }
// }
let largestValue = Math.max(a, b, c)
console.log(largestValue);