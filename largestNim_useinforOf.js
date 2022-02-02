/*function largest(num)
{
    let max=num[0];
    for(let i=0;i<num.length;i++){
        let element=num[i];
         if(element > max){
            max=element;

         }
    }
    return max;
}
let input=[1,2,3,4,5,6];
const total=largest(input);
console.log(total);*/
// for of use in chack max number
function largest(num){
    let max=num[0];
    for(let element of num){
        if(element >max){
            max=element;
        }
    }
    return max;
}
let serial =[1,5,5,5,8,163,987,31,92];
   serial.push(8000);
   serial.pop();
   serial[6]=10;

const result=largest(serial);
console.log(result);
