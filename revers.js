// let greetting ="hi shaharia this is the best practice way to learnig javascript";

// function reverse(text){
//     let reb='';
//     for(let i=0;i<text.length;i++){
        
//         let letter=text[i];
//         reb= letter + reb;
//     }
//     return reb;
// }
// const total=reverse(greetting);
// console.log(total)


const greetings="hello ! how are you";
function reverse(text){
    let reb='';
    for(let letter of text){
        // console.log(letter);
       reb=letter+reb;
    }
    return letter;
}
const outPut=reverse(greetings);


