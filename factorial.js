// function factorial(number) {
//     let variable = 1;
//     for (i = 1; i <= number; i++) {
//         variable = variable * i;
//     }
//     return variable;
// }
// let result = factorial(7);
// console.log(result);

function recarsive(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * recarsive(num - 1)
    }
}
let result = recarsive(8)
console.log(result)