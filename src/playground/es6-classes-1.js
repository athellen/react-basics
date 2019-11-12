class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}
class Student extends Person{
constructor(name,age,major = 'english'){
    super(name,age);
    this.major = major;
}
getInformation() {
    let description = super.getDescription();
    description += `Major is ${this.major}`;
    return description;
}
}
const Student1 = new Student('Michelle', 21, 'Biology');
console.log(Student1);

class Travellor extends Person{
    constructor(name,age,city){
        super(name,age);
        this.city=city;
    }
    getData(){
        let greeting = super.getGreeting();
        greeting += `I am from ${this.city}`;
        return greeting;
    }
}
const Travellor1 = new Travellor('Mike', 29, 'Florida');
console.log(Travellor1.getData());