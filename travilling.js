function animelCount(miles){
    if(miles<=10){
        const count=miles*10;
        return count;
    }
    else if(miles<=20){
        const count=miles*20;
        return count;
    }
    else {
        return "invalid";
    }
}
const calculation=animelCount(19);
console.log(calculation);