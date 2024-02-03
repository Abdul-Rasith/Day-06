//  write a class to calulate the Uber price.
class UberPrice{
    constructor(kilometer, rate){
        this.kilometer = kilometer;
        this.rate = rate;
    }
    print_calculate(){
        let price = this.kilometer*18
        return `This is total travel amount ${price}`
    }
}
var u1 = new UberPrice(10,180);
console.log(u1);
console.log(u1.print_calculate())