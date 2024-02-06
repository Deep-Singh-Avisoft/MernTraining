let num1 = prompt("Enter Number 1 : ", );
let num2 = prompt("Enter Number 2 : ", );

num1 = parseInt(num1);
num2 = parseInt(num2);

alert("Choose From : \n 1. Addition \n 2. Substraction \n 3. Multiplication \n 4. Division");

let choice = prompt("Enter your choice : ", );
choice = parseInt(choice);

switch(choice){
    case 1:
        alert(`Addition of both numbers is ${num1+num2}`);
        break;
    case 2:
        alert(`Substraction of both numbers is ${num1-num2}`);
        break;
    case 3:
        alert(`Multiplication of both numbers is ${num1*num2}`);
        break;
    case 4:
        alert(`Division of both numbers is ${num1/num2}`);
        break;
    default:
        alert("Invalid Choice");
}