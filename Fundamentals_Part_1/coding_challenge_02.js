/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

*/
let marksWeight1 = 78;
let marksHeight1 = 1.69;
let johnsWeight1 = 92;
let johnsHeight1 = 1.95;
let marksBMI1 = calculateBMI(marksWeight1, marksHeight1);
let johnsBMI1 = calculateBMI(johnsWeight1, johnsHeight1);

function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

console.log(compareBMI(marksBMI1, johnsBMI1));

function compareBMI(marksBMI, johnsBMI) {
    if(marksBMI > johnsBMI) {
        return "Mark's BMI is higher than John's!";
    }
    return "John's BMI is higher than Mark's!";
}