//As of ES6 it is possible to make classes with syntax similar to C# and Java
//Student Class Library
class Student{
    //fields
    enrolled = false;
    grades = [];
    //constructor
    constructor(firstName, lastName, studentId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentId = studentId;
    }
    //Methods
    enrollStudent(){
        this.enrolled = true;
    }
    //Method that adds grades to the array
    addGrade(grade){
        if(isNaN(grade)){
            return new TypeError("Must be a number");
        }
        this.grades.push(grade);
    }
    //static methods - static method is a method that can be called without creating an instance
    //of the object
    //You dont have to access the fields
    static getCreditCost(){
        return 100.00;
    }
}
class ITStudent extends Student{
    //only have to add the fields that are new
    constructor(firstName, lastName, studentId, department){
        super(firstName, lastName, studentId);
        this.department = department;
    }
    static getCreditCost(){
        return 125.00;
    }
}