let array = [9, 8, 7, 2, 5, 9, 7, 5, 3, 1, 4, 7, 8, 9, 2, 5, 1];
let uniqArray = [];
for (i = 0; i < array.length; i++) {
    let arrayElement = array[i];
    let index = uniqArray.indexOf(arrayElement);
    if (index == -1) {
        uniqArray.push(arrayElement);
    }
}
console.log(uniqArray);