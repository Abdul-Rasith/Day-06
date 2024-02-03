// write a "Person" class to hold all the Details
class Person{
    constructor(name,age,gender,empolyee,passoutYear){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.empolyee = empolyee;
        this.passoutYear = passoutYear;
    }
}
var p1 = new Person("Abdul",25,"Male","Yes",2021);
console.log(p1);