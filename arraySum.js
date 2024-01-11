// let num = [9, 8, 3, 6, 4, 1, 5, 7, 2, 10];
// let arraySum = num[0];
// for (i = 0; i < num.length; i++) {
//     let arrayElement = num[i];
//     arraySum = arrayElement + arraySum;
// }
// console.log(arraySum);

function getArray(num) {
    let arraySum = num[0];
    for (i = 0; i < num.length; i++) {
        let arrayElement = num[i];
        arraySum = arrayElement + arraySum;
    }
    return arraySum;

}
let num = [9, 8, 3, 6, 4, 1, 5, 7, 2, 10];
let result = getArray(num)
console.log(result);