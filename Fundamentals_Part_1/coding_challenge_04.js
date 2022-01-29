//Tip calculator for each food eated in restaurant

// 15% if bill value is between 50~300
// 20% if bill value is diffetent than the value above

/*
 * 1. Calculate the tip, depending on the bill value. (275, 40 and 430)
 */
const firstBill = 275;
const secondBill = 40;
const thirdBill = 430;

function calculteTip(billValue) {
    return firstBill >= 50 && firstBill <= 300 ? billValue * 0.15 : billValue * 0.2;
}
const firstBillTip = calculteTip(firstBill);
const secondBillTip = calculteTip(secondBill);
const thirdBillTip = calculteTip(thirdBill);
/*
 * 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
 */
console.log(`The bill was ${firstBill}, the tip was ${firstBillTip}, and the total value ${firstBill + firstBillTip}`);
console.log(`The bill was ${secondBill}, the tip was ${secondBillTip}, and the total value ${secondBill + secondBillTip}`);
console.log(`The bill was ${thirdBill}, the tip was ${thirdBillTip}, and the total value ${thirdBill + thirdBillTip}`);
