// Activity 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2
const grades = ["A", "B", "A"];
function gradeToGPA(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const GPAPoints = grades.map(gradeToGPA);

// Activity 3
const pointsTotal = GPAPoints.reduce((total, item) => total + item);
const GPA = pointsTotal / GPAPoints.length;

// Activity 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
    return word.length < 6;
});
// OR: const shortWords = words.filter((word) => word.length < 6);

// Activity 5
const array = [12, 34, 21, 54];
const luckynumber = 21;
let luckyIndex = array.indexOf(luckynumber);