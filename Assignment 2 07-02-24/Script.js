const arr = [12, 5, 7, 8, "the", "deep", 9, 0, false];
let sum = 0;
const sumOfArrayElements = () => {
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            sum += arr[i];
        }
    }
    return sum;
}
sumOfArrayElements();
alert(`Sum of the array elements that are numeric is : ${sum}`)