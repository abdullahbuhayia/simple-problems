function revarseString(str) {
    let reverse = "";
    for (i = 0; i < str.length; i++) {
        let string = str[i];
        reverse = string + reverse;
    }
    return reverse;
}
let word = "Hello World";
let result = revarseString(word);
console.log(result);