// const products=[
//     {name:'laptop',price:4300},
//     {name:'shirt',price:4300},
//     {name:'watch',price:5100},
//     {name:'phone',price:412300},
// ]
// let total=0;
// for(let element of products){
//      total=total+element.price;}
//     //  console.log(total);
const cards=[
    {name:'laptop',price:4300,quantiti:1},
    {name:'shirt',price:4300,quantiti:8},
    {name:'watch',price:5100,quantiti:3},
    {name:'phone',price:412300,quantiti:2},
]
let cardtotal=0;
for(const element of cards){
    const total=element.price*element.quantiti;
    cardtotal=cardtotal+total;
}
console.log(cardtotal);