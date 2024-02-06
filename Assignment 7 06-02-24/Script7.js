let check = "Yes";
while(check == "Yes"){
    let value = prompt("Enter anything from empty (string, 0, null, undefined, NaN, false, a non-empty string, any number other than zero)", );

    if(value){
        alert(`${value} is truthy value`);
    }
    else{
        alert(`${value} is a falsy value`)
    }
    // alert("Wanna check more...? ");
    check = prompt("Wanna check more ..?", );

}
   
