function foo(num){
    for(let i=1;i<=50 ;i++){
        if( i%5 ==0 && i%3==0){
            console.log("foobar");
        }
        else if(i%5==0){
            console.log("bar")
        }
    
         else if(i%3==0){
            console.log("fo")
            
        }
        else
        {   console.log(i);}
     
        }   
}
const input=foo();