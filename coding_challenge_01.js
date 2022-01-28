/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / (height ** 2) = mass / (height * height) (mass in kg and height in meter).

*/

//1. Store Mark's and John's mass and height in variables
let marksWeight1 = 78;
let marksHeight1 = 1.69;
let johnsWeight1 = 92;
let johnsHeight1 = 1.95;

let marksWeight2 = 95;
let marksHeight2 = 1.88;
let johnsWeight2 = 85;
let johnsHeight2 = 1.76;

//2. Calculate both their BMIs using the formula
function calculateBMI(weight, height) {
    return weight / (height ** 2);
}
let marksBMI1 = calculateBMI(marksWeight1, marksHeight1);
let johnsBMI1 = calculateBMI(johnsWeight1, johnsHeight1);
let marksBMI2 = calculateBMI(marksWeight2, marksHeight2);
let johnsBMI2 = calculateBMI(johnsWeight2, johnsHeight2);

//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI1 = marksBMI1 > johnsBMI1;
let markHigherBMI2 = marksBMI2 > johnsBMI2;

console.log(markHigherBMI1);
console.log(markHigherBMI2);

console.log(compareBMI(marksBMI1, johnsBMI1));


