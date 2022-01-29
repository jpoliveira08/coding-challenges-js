
//Dolphins
//Koalas

// Had compete against each other 3 times

// The winner with high score wins a trophy

/*
 * 1. Calculate the average score for each team, using the teste data.
 */
const scoreDolphins1 = 96;
const scoreDolphins2 = 108;
const scoreDolphins3 = 89;

const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;

function averageScore(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}
const averageDolphins = averageScore(scoreDolphins1, scoreDolphins2, scoreDolphins3);
const averageKoalas = averageScore(scoreKoalas1, scoreKoalas2, scoreKoalas3);

/*
 * 2. Compare the team's average scores to determine the winner of the competition
 */

if (averageDolphins > averageKoalas) {
    console.log("The winner is Dolphins");
} else if (averageKoalas > averageDolphins) {
    console.log("The winner is Koalas");
} else {
    console.log("We have a draw!");
}

/*
 * 3. Requirement for a minimum score of 100 for both teams,
 * team only wins if his score is higher than 100 points
 * 4. Minimum score also applies to a draw
 */
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("The winner is Dolphins");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log("The winner is Koalas");
} else if (averageKoalas >= 100 && averageKoalas === averageDolphins && averageDolphins >= 100) {
    console.log("We have a draw!");
} else {
    console.log("No team wins the thophy!!!");
}

