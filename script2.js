// Class circle
class Circle{
    constructor(radius, color){
        this.radius;
        this.color;
    }
    
    getArea(){
        var i = ((Math.PI)*this.radius*this.radius);
        return i
    }

    getCircum(){
        var y = (2*(Math.PI)*this.radius);
        return y
    }

    getRadius(){
        return this.radius
    }

    getColor(){
        return this.color
    }
    setColor(){
        this.color = this.color
    }
}

let c1 = new Circle(1.0, "Red");
console.log(c1);

