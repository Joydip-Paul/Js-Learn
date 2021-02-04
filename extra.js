//Inheritance

class Parent{
    constructor(fatherName){
        this.fatherName = "Kudus";
    }
}
class Child extends Parent{
    constructor(babyName){
        super();
        this.babyName = babyName;
    }
}
let baby = new Child("Hudus");
let baby2 = new Child("Pudus");
console.log(baby);
console.log(baby2);

//Another Example
class schollName{
    constructor(schollName){
        this.schollName = "D.C.P. High School";
    }
}
class studentName extends schollName{
    constructor(student,id){
        super();
        this.student = student;
        this.id = id;
    }
}
let s1 = new studentName("Joydip Paul",101);
let s2 = new studentName("Ebadur Rahman",102);
console.log(s1);
console.log(s2);