let number = prompt("Enter any number : ", );

number = parseInt(number);

if(number > 0){
    alert(`${number} is a positive number`)
}
else if(number < 0){
    alert(`${number} is a negative number`)
}
else if(number === 0){
    alert(`${number} is equal to zero`)
}
else{
    alert("invalid input")
}