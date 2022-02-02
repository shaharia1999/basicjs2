let phones=[
    {name:'samsung',storeg:8,camera:12,price:45000},
    {name:'showmi',storeg:8,camera:12,price:35000},
    {name:'npkia',storeg:8,camera:12,price:5000},
    {name:'apple',storeg:8,camera:12,price:10000},
]
let chipest=phones[0];
for(let phone of phones){
    // console.log(phone);
    if(phone.price <chipest.price)
    chipest=phone;
}
console.log(chipest);