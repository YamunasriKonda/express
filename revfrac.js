function reverseFactorial(num) {
    let value =1,
     n=1;
    while(value <= num){
        if(value === num) return `${n}!`;
        value *= ++n;
    }

    return 'none';
}


console.log(reverseFactorial(120));
module.exports=reverseFactorial;