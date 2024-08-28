let maths = +prompt("enter the marks of math:");
let urdu = +prompt("enter the marks of urdu:");
let english = +prompt("enter the marks of english:");
let science = +prompt("enter the marks of science:");
let pak = +prompt("enter the marks of pak-studies:");
let s_st = +prompt("enter the marks of s_st:");
let geography = +prompt("enter the narks of geography");

let total_marks = 700;
let obtain_marks = (maths + urdu + english + science +pak + s_st + geography);
let percentage = (obtain_marks/total_marks)*100;

console.log ("Total Marks =" + obtain_marks);
console.log("Your percentage = " + percentage + " %");

if(percentage >= 90){
console.log("you got A+ grade and able to the scholarship")
}else if (percentage >=80 ){
    console.log("you got A+ grade");
}else if (percentage >= 70){
    console.log("you got A grade");
}else if (percentage >= 60){
    console.log("you got B");
}else if (percentage >= 50){
console.log("you got C grade ");
}else{
    console.log("you are fail");
}

/*let maths = +prompt("enter the marks of math:");
let urdu = +prompt("enter the marks of urdu:");
let english = +prompt("enter the marks of english:");
let science = +prompt("enter the marks of science:");
let pak = +prompt("enter the marks of pak-studies:");
let s_st = +prompt("enter the marks of s_st:");
let geography = +prompt("enter the marks of geography");

let total_marks = 700;
let obtain_marks = maths + urdu + english + science + pak + s_st + geography;
let percentage = (obtain_marks / total_marks) * 100;
console.log("Obtained Marks: " + obtain_marks);
console.log("Percentage: " + percentage + "%");

if (percentage >= 90) {
    console.log("you got A+ grade and are eligible for the scholarship");
} else if (percentage >= 80) {
    console.log("you got A+ grade");
} else if (percentage >= 70) {
    console.log("you got A grade");
} else if (percentage >= 60) {
    console.log("you got B grade");
} else if (percentage >= 50) {
    console.log("you got C grade");
} else {
    console.log("you are fail");
}
*/