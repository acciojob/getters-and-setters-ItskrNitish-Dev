//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	getName(){
		return this.name;
	}
	getAge(){
		return this.age;
	}

	setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

const person = new Person("John", 25);
console.log(person.name);
person.age = 30;
console.log(person.age);

const st = new Student("Alice", 20);
st.study();

const tcher = new Teacher("Bob", 40);
tcher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
