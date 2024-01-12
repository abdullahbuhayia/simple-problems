function animalCount(depth) {
    animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    } else if (depth <= 20) {
        let firstDepth = 10 * 50;
        let remaning = depth - 10;
        let secondDepth = remaning * 70;
        animal = firstDepth + secondDepth;
    } else {
        let firstDepth = 10 * 50;
        let secondDepthtDepth = 10 * 50;
        let remaning = depth - 20;
        let thirdDepth = depth * 120;
        animal = firstDepth + secondDepthtDepth + thirdDepth;
    }
    return animal;
}
let result = animalCount(2000)
console.log(result)