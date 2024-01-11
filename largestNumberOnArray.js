let num = [9, 8, 3, 7, 6, 1, 5, 2, 4];
let maxNum = num[0];
for (i = 0; i < num.length; i++) {
    let largestNum = num[i]
    if (maxNum > largestNum) {
        largestNum = maxNum;
    }
}
console.log(maxNum);