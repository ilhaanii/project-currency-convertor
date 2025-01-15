//assigmnts
// nestdif
function nestdif() {
    for (let i = 0; i < 6; i++) {
        console.log(`The current value of i is: ${i}.`);
        for (let j = 0; j < 6; j++) {
            console.log(`j: ${j}`);
        }
    }
}

// ifElse
function ifElse() {
    let age = 18;
    let resultText;
    if (age >= 18) {
        resultText = "You are eligible to vote.";
    } else {
        resultText = "You are not eligible to vote.";
    }
    console.log(resultText);
}

// simpleIf
function simpleIf() {
    let score = 85;
    let resultText;
    if (score >= 50) {
        resultText = "You passed the exam!";
    }
    console.log(resultText);
}

// switchCase
function switchCase() {
    let day = 7;
    let resultText;
    switch (day) {
        case 1:
            resultText = "Saturday";
            break;
        case 2:
            resultText = "Sunday";
            break;
        case 3:
            resultText = "Monday";
            break;
        case 4:
            resultText = "Tuesday";
            break;
        case 5:
            resultText = "Wednesday";
            break;
        case 6:
            resultText = "Thursday";
            break;
        case 7:
            resultText = "Friday";
            break;
        default:
            resultText = "Invalid day";
    }
    console.log(resultText);
}

// ternary
function ternary() {
    let number = 7;
    let resultText = (number % 2 === 0) ? "The number is even." : "The number is odd.";
    console.log(resultText);
}

// whileLoop
function whileLoop() {
    let sum = 0;
    let i = 1;
    while (i <= 5) {
        sum += i;
        i++;
    }
    let resultText = "The sum is: " + sum;
    console.log(resultText);
}

// forLoop
function forLoop() {
    let factorial = 1;
    let num = 5;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    let resultText = "The factorial of " + num + " is: " + factorial;
    console.log(resultText);
}

// doWhileLoop
function doWhileLoop() {
    let number;
    do {
        number = prompt("Please enter a number greater than 10:");
        number = parseInt(number);
    } while (number <= 10 || isNaN(number));
    let resultText = "Thank you! You entered: " + number;
    console.log(resultText);
}

// breakLoop
function breakLoop() {
    let num = 0;
    let resultText;
    do {
        num++;
        if (num === 4) {
            resultText = "Loop stopped at: " + num;
            break;
        }
    } while (num < 10);
    console.log(resultText);
}

// continueLoop
function continueLoop() {
    for (let i = 1; i < 12; i++) {
        if (i == 5) {
            continue;
        }
        console.log(i);
    }
}

// arithmetics
function arithmetics() {
    let f1 = 40, f2 = 50;
    let faiza = 43 - 3;
    let fzo = 10 * 8;
    let fizoo = 200 / 2;
    let resultText = `Addition: ${f1 + f2}\nSubtraction: ${faiza}\nMultiplication: ${fzo}\nDivision: ${fizoo}`;
    console.log(resultText);
}

// logicalOperators
function logicalOperators() {
    let k = 9, s = 6;
    let resultText = k || s;
    console.log(resultText);
}

// assignment
function assignment() {
    let l = 10, h = 5;
    let sam = l + h;
    let v = 20;
    v += 7;
    v -= 9;
    v /= 5;
    v %= 6;
    let resultText = "Final value of v: " + v;
    console.log(resultText);
}

//filter 
function twaw(){
    const numbers = [10, 20, 15, 25, 30];
const filtered = numbers.filter(num => num > 20);
console.log(filtered);
}

//reduce
function ouou(){
    const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
}

//every
function tyr(){
    const ages = [18, 21, 25, 30];
const allAdults = ages.every(age => age >= 18);
console.log(allAdults);
}

//some
function hudo(){
    const items = [3, 7, 10, 15];
const hasEven = items.some(num => num % 2 === 0);
console.log(hasEven);
}

//chapter1
function chapter1(){
    console.log("hello world");
}

//chapter2
//example1
function exmple1(){
    let result = 5 + 3;  
    console.log(result);
}

//example2
function example2(){
    let isEqual = 2 === 3; 
    console.log(isEqual);
}

//example3
function example3() {
    let count = 10;
    count += 5;  
    console.log(count);
}

//example4
function example4(){
    let num = 10;
    let strNum = "5";
    console.log(num > Number(strNum)); 
}

//chapter 3
//example1
function waw(){
    let a=5;
    let b=8;
    let temp= a;
    a=b;
    b=temp;
    console.log("after swaping:a="+a+",b="+b);
}

//example2
function zuu(){
    let age=18;
    if (age>=18) {
        console.log('you are an adult');
    }
}

//example3
function wuu(){
    let age=20;
    if (age>=18) {
        console.log('you are an adult');
    }
    else{
        console.log('you are not adult');
    }
}

//example4
function saa(){
    let grade=90;
    if (grade>=90){
        console.log('A+');
    }
    else if(grade>=80){
        console.log('B+')
    }
    else if(grade>=70){
        console.log('B-')
    }
    else if(grade>=65){
        console.log('C+')
    }
    else{
        console.log('c')
    }
}

//example5
function qaa(){
    let day = 'saturday';
    switch (day){
        case "saturday":
            console.log('its first day of week');
            break ;
        case "wensday":
            console.log('its fourth day of week');
            break;
        default:
            console.log('its another day');
    }
}

//example6
function dxx(){
    for (let i=1; i<=5; i++){
        console.log(i);
    }
}

//example7
function dff(){
    let i=1;
    while (i<=10){
        console.log(i);
        i++
        if(i===6) {
            break;
        }
    }
}

//example8
function dee(){
    let i=1;
    do{
        console.log(i);
        i++
    }
    while (i<=10); 
}

//example9
function dqq(){
    let i=1;
    while (i<=10){
        console.log(i);
        i++
        if(i===6) {
            break;
        }
    }
}

//example10
function sqq(){
    let i=1;
    while (i<=10){
        i++
        if(i===6) {
            continue;
        }
        console.log(i);
    }
}

//example11
function dww(){
    for(let i=0; i<5; i++ ){
        for(let j=0; j<5; j++ ){
            console.log(`(${i},${j})`);
        }
    }
}

//chapter 4
//example1
function kii(){
    function functionName(){
        console.log("hello word")
    }
}

//example2
function kll(){
    function greet(name){
        console.log(`hello,${name}!`)
    }
    greet("FAIZA");
}

//example3
function lpp(){
    function fuctionName(par){
        return value;
    }
}

//example4
function loo(){
    function add(a,b){
        return a+b;
    }
    const result=add(3,4);
    console.log(result);
}

//example5
function yuu(){
    if (true){
        let blockVariable = "I'm in block scope";
        console.log(blockVariable);
    }
}

//example6
function mmm(){
    const doubleNumber = (number) =>{
        return number * 2;
    }
    console.log(doubleNumber(3));
}

//example7
function fff(){
    const add = (a, b) => a + b;
    console.log(add(3, 5));
}

//example8
function hhh(){
    function doSomething(callback){
        console.log("doing something...");
        callback();
    }
    function onComplete(){
        console.log("operation complete!");
    }
    doSomething(onComplete);
}

//example9
function sss(){
    setTimeout(() => {
        console.log("this is an arrow function callback executed after 2 seconds");
    }, 2000);
}

//example10
function fai(){
    function fuctionName(parameters){
        return value;
    }
}

// Chapter 5 and Object Examples

// Array literal
function fzo() {
    const names = ['ahmed', " " + 'mohammed', " " + 'ali'];
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
}

// Array constructor
function zzz() {
    const names = new Array("ahmed", "mohammed", "ali"); 
    console.log(names);
}

// Empty array
function ccc() {
    const myArray = [];
    myArray[0] = "first";
    myArray[1] = "second";
    console.log(myArray);
}

// Array.from()
function sss() {
    const arrayFromStr = Array.from("hello"); 
    console.log(arrayFromStr);
}

// Array initializer
function www() {
    const newArray = new Array(3);
    console.log(newArray);
}

// Spread operator
function aaa() {
    const sourceArray = [1, 2, 3];
    const newArray = [...sourceArray];
    console.log(sourceArray);
    console.log(newArray);
}

// Arrayo .of()
function ttt() {
    const myArray = Array.of(1, 2, 3); 
    console.log(myArray);
}

// Adding element
function ppp() {
    const fruits = ["banana", "mango"];
    fruits.unshift("apple");
    console.log(fruits);
}

// Removing element
function rrr() {
    const qudaar = ["banana", "mango", "cherry"];
    qudaar.pop();
    console.log(qudaar);
}

// Updating elements
function hhh() {
    const fawaakih = ["banana", "mango", "cherry"];
    fawaakih[1] = "orange"; 
    console.log(fawaakih);
}

// For loop
function uuu() {
    const rwww = ["banana", "mango", "cherry"];
    for (let i = 0; i < rwww.length; i++) { 
        console.log(rwww[i]);
    }
}

// ForEach method
function eee() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach(function (fruit) {
        console.log(fruit);
    });
}

// For...of loop
function ytt() {
    const fruits = ["banana", "mango", "cherry"];
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

// Map method
function qaa() {
    const numbers = [1, 2, 3];
    const squaredNumbers = numbers.map((num) => num * num); 
    console.log(squaredNumbers);
}

// Accessing index with forEach
function juu() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach((fruit, index) => {
        console.log(`fruit at index ${index} is ${fruit}`);
    });
}

// Object Examples

// Example 1
function qrr(){
    const qof = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30
    };
    console.log(qof);
}

// Example 2
function ilhan(){
    function Baniaadam(firstName, lastName, age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    const baniaadam = new Baniaadam("mohamed", "ali", 30);
    console.log(baniaadam);
}
// Example 3
function haan(){
    class Dad {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }
    const dad = new Dad("mohamed", "ali", 30);
    console.log(dad);
}

// Example 4
function naw(){
    const dad = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30,
        email: "mohamed.ali@email.com"
    };
    console.log(dad.firstName);
    console.log(dad["lastName"]);
    dad.age = 31;
    console.log(dad);
}

// Example 5
function waal(){
    const fai = {
        firstName: "mohamed",
        lastName: "ali",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        },
    };
    console.log(fai.getFullName());
}

// Example 6
function sawd(){
    const sus = {
        name: 'faiza',
        education_level: 'bachelor',
        gra_status: 'active'
    };
    for (let index in sus) {
        console.log(`${index}: ${sus[index]}`);
    }
}

//json
// Example 1
function poop(){
    const test = {
        "name": "Jonson",
        "city": "New York",
        "age": 30
    };
    console.log(test);
}

// Example 2
function jiij(){
    const wew = {
        "name": "mohamed",
        "age": 30,
        "hobbies": ["reciting quran", "praying", "reading", "swimming"]
    };
    console.log(wew);
}

// Example 3
function huuuh(){
    const jsonString2 = '{"name": "mohammed ali", "age": 30}'; 
    const jsonObject2 = JSON.parse(jsonString2);
    console.log(jsonObject2.name); 
}

// Example 4
function uuui(){
    const person = {name: "mohammed ali", age: 30};
    const jsonString3 = JSON.stringify(person);
    console.log(jsonString3);
}
//lab
//example1
function jjj(){
    console.log("faiza\nibrahiim\nabdullaahi");
}

//example2
function ggg(){
    let time = new Date().getHours();

    switch (time) {
      case 5:
        console.log("5:00 AM");
        break;
      case 6:
        console.log("6:00 AM");
        break;
      case 7:
        console.log("7:00 AM");
        break;
      case 8:
        console.log("8:00 AM");
        break;
      case 9:
        console.log("9:00 AM");
        break;
      case 10:
        console.log("10:00 AM");
        break;
      case 11:
        console.log("11:00 AM");
        break;
      case 12:
        console.log("12:00 PM");
        break;
      case 13:
        console.log("1:00 PM");
        break;
      case 14:
        console.log("2:00 PM");
        break;
      case 15:
        console.log("3:00 PM");
        break;
      case 16:
        console.log("4:00 PM");
        break;
      case 17:
        console.log("5:00 PM");
        break;
      default:
        console.log("Time is outside of the range 5:00 AM to 5:00 PM.");
        break;
    }
}

//example 3
function uuu(){
    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));
    let operator = prompt("Enter operator (+, -, *, /): ");

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Cannot divide by zero!";
        }
        break;
      default:
        result = "Invalid operator!";
        break;
    }

    console.log("Result: " + result);
}
// filter and analyz
function displayData() {
    const id = document.getElementById("inputID").value.trim();
    const name = document.getElementById("inputName").value.trim();
    const filterOption = document.getElementById("filterOption");
  
    if (!filterOption || !filterOption.value) {
      document.getElementById("filterOutput").innerHTML = "Please select a valid option.";
      return;
    }
  
    const selectedOption = filterOption.value.toLowerCase();
    const data = { id, name };
  
    const result = Object.keys(data)
      .filter(key => selectedOption.includes(key) && data[key])
      .map(key => `${key}: ${data[key]}`);
  
    document.getElementById("filterOutput").innerHTML = result.length
      ? result.join("<br>")
      : "No data found for the selected option.";
  }
  
  function analyzeName() {
    const name = document.getElementById("analyzeInput").value.toLowerCase();
    const vowelsList = ["a", "e", "i", "o", "u"];
  
    const vowels = name.split("").filter(char => vowelsList.includes(char));
    const consonants = name.split("").filter(char => !vowelsList.includes(char) && char.match(/[a-z]/));
  
    const output = `
      Name: ${name}<br>
      Vowels: ${vowels.join(", ")} (Total: ${vowels.length})<br>
      Consonants: ${consonants.join(", ")} (Total: ${consonants.length})
    `;
  
    document.getElementById("analyzeOutput").innerHTML = output;
  }
  const rates = {
    USD: 1,
    EUR: 0.97865,
    GBP: 0.81,
    KES:129.50500,
    SOS: 26000.0,
    ETB: 126.27300,
    CAD: 1.43,
    JPY: 156.33,
    CNY: 7.33,
    SEK: 11.11,
    NGN: 1554.20,
    ZAR: 18.75,
    EGP: 50.43,
    GHS:14.82,
    TZS:2515.00 ,
    UGX: 3693.24,
    DZD: 135.80100,
    MAD: 10.06 ,
    XOF:636.69 ,
    XAF: 636.68 ,
    SDG: 	600.86000,
    AOA:921.70600,
    BWP:14.06470 ,
    MUR: 46.80 ,
    ZMW: 27.76990,
    SCR: 14.42,
    CDF: 	2850.00000,
    MWK: 1733.42,
    LSL:19.06970,
    SZL: 18.93480,
    NAD: 18.86830,
    LYD: 4.952,
    RWF:1399.67,
    BIF: 2926.55000,
    ERN: 15.00000,
    GMD:72.07130,
    BHD: 0.38 ,
    AUD: 1.60,
    INR: 86.37,
    CHF: 0.91,
    AED: 3.67,
    SAR:3.73 ,
    TRY: 35.50080,
    RUB: 102.84 ,
    BRL: 6.02 ,
    MXN: 20.54 ,
    AFN:73.70,
    AMD:395.91 ,
    AZN: 1.70035,
    BDT: 121.71,
    BTN: 86.54280,
    BND:1.36835,
    KHR: 4042.30018,
    GEL: 2.84 ,
    IDR: 16374.81,
    IRR: 42000.00000,
    IQD:  1310,
    ILS: 3.61,
    JPY: 156.36,
    JOD : 0.70960 ,
    KZT:529.810,
    KWD: 	0.307,
    KGS: 87.45,
    LAK: 21814.30000
  };

document.getElementById("convert").addEventListener("click", function () {
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const amountField = document.getElementById("amount");
    const errorMessage = document.getElementById("error-message");
    const resultField = document.getElementById("result");
    const amount = parseFloat(amountField.value);

    amountField.classList.remove("error");
    amountField.placeholder = "Enter amount";
    errorMessage.style.display = 'none';

    if (!amount || amount <= 0) {
        errorMessage.style.display = 'block';
        amountField.classList.add("error");
        amountField.value = '';
        amountField.placeholder = "Please enter amount !!!";
        amountField.focus();
        return;
    }

    const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
    resultField.textContent = `Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
function navigateToChapters() {
    window.location.href = 'chapters.html';
}
function goBack() {
    window.location.href = "index.html";
}
