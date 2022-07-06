
let words= ["This", "is", "Javascript", "Coding"];

let sentence= '';

function createSentence(array){

    for(let i=0; i<array.length; i++){
        sentence+=words[i] + '';
        return sentence; 

        }  
}

console.log(createSentence());
