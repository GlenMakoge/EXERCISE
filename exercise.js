

//Working with variables
//total supply
//  const currentAge = 25;
//     const maxAge = 100;
//     const estimatedAmount = 5;
//     const oneYear = 365*5;
//     const realAge = maxAge - currentAge;
//     const Supply = oneYear*5;
//     const totalSupply = Supply*realAge;
//     console.log(totalSupply);

//Working with functions
//calculating age of dog
// let humanAge;
// let realHumanAge;
// let puppyAge;
// function calculateDogAge(puppyAge){
//     humanAge = prompt("enter your age");
//     realHumanAge = parseInt(humanAge);
//     const dogAge = realHumanAge*7;
//     const outPut = `Your dog is ${dogAge} years old in Dog Years`
//     console.log(outPut)
// }

// calculateDogAge(puppyAge);

//isNumber

// function isNumber(value){
//     let is_number;
//     is_number = isNaN(value);

//     if(is_number){
//         console,log('Variable is not a number');
//     }else{
//         console,log('Variable is a number');
//     }
// }
// isNumber(1)

//check if a number is odd or even in javaScript
// let num;
// let statusNumber;
// function isEvenOrOdd(number){
//     statusNumber = prompt("Enter number to determine if its odd or even");
//     num = parseInt(statusNumber);
//     if(num%2 == 0){
//         console.log(`${num}  is even`)
//     }else{
//          console.log(`${num} is odd`)
//     }
// }
// isEvenOrOdd();

//Finding largest of two numbers
// let numberOne;
// let numberTwo;
// let storeNumber1;
// let storeNumber2;
// storeNumber1 = prompt('Enter first number for comparison');
// numberOne= parseInt(storeNumber1);
// storeNumber2 = prompt('Enter second number to display which is greatest');
// numberTwo = parseInt(storeNumber2);
// function findLargest(numberOne, numberTwo){
//     if(numberOne > numberTwo){
//         console.log(`${numberOne} is greater than ${numberTwo}`);
//     }else if(numberOne < numberTwo){
//         console.log(`${numberTwo} is greater than ${numberOne}`);
//     }else if(numberOne == numberTwo) {
//         console.log(`${numberOne} is equal to ${numberTwo}`);
//     }
// }
// findLargest(numberOne, numberTwo);

//----------------------------------------------------------------------------------
//Finding largest of three numbers
// let numberOne;
// let numberTwo;
// let numberThree;
// let storeNumber1;
// let storeNumber2;
// let storeNumber3;

// storeNumber1 = prompt('Enter first number for comparison');
// numberOne= parseInt(storeNumber1);
// storeNumber2 = prompt('Enter second number for comparison');
// numberTwo = parseInt(storeNumber2);
// storeNumber3 = prompt('Enter third number to display which is greatest');
// numberThree = parseInt(storeNumber3);

// function findLargest(numberOne, numberTwo, numberThree){
//     if(numberOne > numberTwo && numberOne > numberThree){
//         console.log(`${numberOne} is greater than ${numberTwo} and ${numberThree}`);
//     }else if(numberTwo < numberThree && numberTwo > numberThree){
//         console.log(`${numberTwo} is greater than ${numberThree} and ${numberOne}`);
//     }else {
//         console.log(`${numberThree} is greater than ${numberTwo} and ${numberOne}`);
//     }
// }
// findLargest(numberOne, numberTwo, numberThree)

//-------------------------------------------------------------------------------------

//Checking if a triangle is equilateral, scalene, or isosceles
// let sideOne;
// let sideTwo;
// let sideThree;
// let storeSideOne;
// let storeSideTwo;
// let storeSideThree;

// storeSideOne = prompt('Enter first side of triangle');
// sideOne= parseInt(storeSideOne);
// storeSideTwo = prompt('Enter second side of triangle');
// sideTwo = parseInt(storeSideTwo);
// storeSideThree = prompt('Enter third side to display type of triangle');
// sideThree = parseInt(storeSideThree);

// function findTriangleType(sideOne, sideTwo, sideThree){
//     if(sideOne == sideTwo && sideTwo == sideThree){
//          console.log('Triangle is Equilateral');
//     }else if(sideOne == sideTwo || sideTwo == sideThree){
//          console.log('Triangle is Isosceles');
//     }else {
//         console.log('Triangle is Scalene');
//     }
// }
// findTriangleType(sideOne, sideTwo, sideThree)
//-----------------------------------------------------------------------------------------

//Finding if number is present in given range
// let startRange;
// let endRange;
// let storeStart;
// let storeEnd;
// let testNumber;
// let storeTestNumber;
// storeStart = prompt('Enter start range');
// startRange = parseInt(storeStart);
// storeEnd = prompt('Enter end range');
// endRange = parseInt(storeEnd)
// storeTestNumber = prompt('Enter a number to check in range');
// testNumber = parseInt(storeTestNumber);


// function checkInRange(testNumber){
//     if(testNumber >= startRange && testNumber <= endRange){
//         console.log(`${testNumber} is Between the Range`);
//     }else {
//         console.log(`${testNumber} is Outside the Range`);
//     }
// }
// checkInRange(testNumber);
//--------------------------------------------------------------------------------

//Perform arithmetic operations on two numbera
// let numberOne;
// let numberTwo;
// let operator;
// let storeNumber1;
// let storeNumber2;
// let storeOperator;
// let result;

// storeNumber1 = prompt('Enter first number ');
// numberOne = parseInt(storeNumber1);
// storeOperator = prompt('Enter operator i.e + or - or * or /');
// operator = storeOperator;
// storeNumber2 = prompt('Enter second number')
// numberTwo = parseInt(storeNumber2);
// console.log('passed')

// function evalNumbers(numberOne, operator, numberTwo){
//     if(operator == '+'){
//         result = numberOne + numberTwo;
//         console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
//     }else if(operator == '-'){
//         result = numberOne - numberTwo;
//         console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
//     }else if(operator == '*'){
//         result = numberOne * numberTwo;
//         console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
//     }else if(operator == '/'){
//         result = numberOne / numberTwo;
//         console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
//     }else {
//         console.log(`${operator} is an Invalid operation entered`);
//     }
// }
// evalNumbers(numberOne, operator, numberTwo);
//------------------------------------------------------------------------------------

//Checking if a year is leap year or not.
// let year;
// let storeYear;
// storeYear = prompt('Enter year to check if it is a leap year or not');
// year = parseInt(storeYear);

// function checkLeapYear(year){
//     if(year%4 == 0 && year%2 === 0 || year%400 == 0){
//         console.log(`${year} is a leap year`);
//     }else {
//         console.log(`${year} is not a leap year`);
//     }
// }
// checkLeapYear(year);
//-------------------------------------------------------------------------------------

//Finding grades for input marks
// let mark;
// let storeMarks;
// storeMarks = prompt('Enter your marks');
// mark = parseInt(storeMarks);

// function findGrade(mark){
//     if(mark <= 100 && mark >= 90){
//         console.log('S grade');
//     }else if(mark <= 89 && mark >= 80){
//         console.log('A grade');
//     }else if(mark <= 79 && mark >= 70){
//         console.log('B grade');
//     }else if(mark <= 69 && mark >= 60){
//         console.log('C grade');
//     }else if(mark <= 59 && mark >= 50){
//         console.log('D grade');
//     }else if(mark <= 49 && mark >= 40){
//         console.log('E grade');
//     }else if(mark <= 39 && mark >= 0){
//         console.log('Student has failed');
//     }else {
//         console.log('Invalid marks');
//     }
// }
// findGrade(mark);
//----------------------------------------------------------------------------------------

//finding number of days in given month
let monthOne =1;
let monthTwo = 2;
let monthThree = 3;
let monthFour = 4;
let monthFive = 5;
let monthSix = 6;
let monthSeven = 7;
let monthEight = 8;
let monthNine = 9; 
let monthTen = 10;
let monthEleven = 11;
let monthTwelve = 12
let month;
let storeMonth;
let year;
let storeYear;

storeMonth = prompt('Enter month to find number of days in a given year i.e enter the month number');
month = storeMonth;
storeYear = prompt('Enter year');
year = parseInt(storeYear);

function findDaysInMonth(month, year){
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        console.log('31 days')
    }else if(month == 2){
                if(year%4 == 0){
                    console.log('29 days');
                }else {
                    console.log('28 days');
                }
    }else if(month == 4 || month == 6 || month == 9 || month == 11 ){
        console.log('30 days');
    }
}
findDaysInMonth(month, year);