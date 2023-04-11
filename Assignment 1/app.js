// Question No: 1

let firstNum = +prompt("Enter First Number: ");
let secondNum = +prompt("Enter Second Number: ");
if (firstNum > secondNum) {
  console.log("Larger Number Is : " + firstNum);
} else {
  console.log("Larger Number Is : " + secondNum);
}

// Question No: 1 end

// Question No: 2

let userInput = +prompt("Enter a number, should be positive of negative: ");
if (userInput < 0) {
  alert("The sign is -");
} else {
  alert("The sign is +");
}

// Question No: 2 end

// Question No: 3
let firstNum = +prompt("Enter First Number: ");
let secondNum = +prompt("Enter Second Number: ");
let thirdNum = +prompt("Enter Third Number: ");
let fourthNum = +prompt("Enter Fourth Number: ");
let fifthNum = +prompt("Enter Fifth Number: ");

let arrNum = [firstNum, secondNum, thirdNum, fourthNum, fifthNum];

let maxNum = Math.max(...arrNum);

console.log("Larger Number is : " + maxNum);

// Question No: 3 end

// Question No: 4

for (i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// Question No: 4 end

// Question No: 5

let avgMarks = +prompt("Enter Your Avarage Marks: ");
if (avgMarks < 60) {
  console.log("Your Grade is : F");
} else if (avgMarks < 70) {
  console.log("Your Grade is : D");
} else if (avgMarks < 80) {
  console.log("Your Grade is : C");
} else if (avgMarks < 90) {
  console.log("Your Grade is : B");
} else if (avgMarks < 100) {
  console.log("Your Grade is : A");
} else {
  console.log("Please Enter Valid Average Marks");
}

// Question No: 5 end

// Question No: 6

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i + " " + i);
  }
}

// Question No: 6 end

// Question No: 7
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}
// Question No: 7 end
