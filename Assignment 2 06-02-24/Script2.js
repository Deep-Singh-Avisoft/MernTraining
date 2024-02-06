let score = prompt("Enter Score : ", )

score = parseInt(score);

if(score >= 90){
    alert("Grade is A+");
}
else if(score >= 80){
    alert("Grade is A");
}
else if(score >= 70){
    alert("Grade is B+");
}
else if(score >= 60){
    alert("Grade is B");
}
else if(score >= 50){
    alert("Grade is C+");
}
else if(score >= 40){
    alert("Grade is C");
}
else{
    alert("Grade is D");
}
