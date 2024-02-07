let num1 = prompt("Enter Number 1 : ", );
let num2 = prompt("Enter Number 2 : ", );

num1 = parseInt(num1);
num2 = parseInt(num2);

let choice = prompt("Enter the operation you want to perform : \n Choose an operator : \n 1. Addition(+) \n 2. Substraction(-) \n 3. Multiplication(*) \n 4. Division(/)", );

const Addition = () => {
    return num1 + num2;
}
const Substraction = () => {
    return num1 - num2;
}
const Division = () => {
    return num1 / num2;
}
const Multiplication = () => {
    return num1 * num2;
}
let ans = 0;
switch(choice){
    case "+":
        ans = Addition();
        break;
    case "-":
        ans = Substraction();
        break;
    case "*":
        ans = Multiplication();
        break;
    case "/":
        ans = Division();
        break;
    default:
        alert("Invalid Answer..!!");
        break;
}

alert(`Ans : ${ans}`)