
// let number=[10,12,13,15,10,15,18,62,62,18];
// function doblicate(name){
//     let newarray=[];
//     for( let i=0; i<name.length;i++){
//         let element=name[i];
//         if(newarray.indexOf(element)==-1){
//             newarray.push(element);
//         }
//     }
//     return newarray;
// }
// const result=doblicate(number);
// console.log(result);
let number=[10,12,13,15,10,15,18,62,62,18];
function doblicate(number){
    let change=[];
    for(let element of number){
        // console.log(element);\
        if(change.indexOf(element) == -1){
            change.push(element);
        }
    }
    return change;
}
const total=doblicate(number);
console.log(total);
