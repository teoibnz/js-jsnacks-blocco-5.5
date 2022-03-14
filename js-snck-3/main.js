const number =[1,2,3];
const letter= ['a','b','c']

const fusionArray = [];

function sumTwoArray (firstArray, secondArray){
    for ( let i = 0; i < number; i++){
        fusionArray.push(firstArray[i] , secondArray[i])
    } return fusionArray;
}

console.log(fusionArray)