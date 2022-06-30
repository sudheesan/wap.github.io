//---Question1---//

console.log("//---Question1---//")

const studentArray = [];
const student = {
    firstName: 'Sudheesan',
    lastName: 'Surendran',
    grades: [],
    inputNewGrade: function (grade) {
        this.grades.push(grade);
    },
    compusteAverageGrade: function () {
        return this.grades.reduce((prev, curr) => prev + (curr / this.grades.length), 0)
    },
}

for (let i = 0; i < 5; i++) {
    const newStudent = Object.create(student);
    newStudent.firstName = `Sudheesan ${i + 1}`;
    newStudent.grades = [];
    newStudent.inputNewGrade(i + 1 * 10);
    newStudent.inputNewGrade(i + 1 * 20)
    studentArray.push(newStudent)
}

console.log(studentArray);

console.log("The Average : ", studentArray.reduce((prev, curr) => prev + (curr.compusteAverageGrade() / studentArray.length), 0));

console.log("//---Question1---//", '\n', '\n', '\n')
//---Question1---//



//---Question2---//

console.log("//---Question2---//")


const studentArray2 = [];

const Student = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradesArray = [];
}

Student.prototype.inputNewGrade = function (grade) {
    this.gradesArray.push(grade);
}

Student.prototype.compusteAverageGrade = function () {
    return this.gradesArray.reduce((prev, curr) => prev + (curr / this.gradesArray.length), 0)
}


for (let i = 0; i < 5; i++) {
    const newStudent = new Student(`Sudheesan ${i + 1}`, `Surendran ${i + 1}`);
    newStudent.inputNewGrade(i + 1 * 10);
    newStudent.inputNewGrade(i + 1 * 20)
    studentArray2.push(newStudent)
}

console.log(studentArray2);

console.log("The Average : ", studentArray2.reduce((prev, curr) => prev + (curr.compusteAverageGrade() / studentArray2.length), 0));

console.log("//---Question2---//", '\n', '\n', '\n')

//---Question2---//



//---Question4---//

console.log("//---Question4---//")

const LinkedList = function () {
    this.list = [];
}

LinkedList.prototype.add = function (value) {
    this.list.push(value);
}

LinkedList.prototype.remove = function (value) {
    const array = this.list;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            array.splice(i, 1);
        }
    }
    this.list = array;
}

LinkedList.prototype.print = function () {
    console.log("LinkedList", `{${this.list.toString()}}`);
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};

let linkedlist2 = new LinkedList();
linkedlist2.add(4);
linkedlist2.add(5);
linkedlist2.add(6);
linkedlist2.print(); //Expected Result: LinkedList{1,2,3};
linkedlist2.remove(5);
linkedlist2.print(); //Expected Result: LinkedList{1,3};

console.log("//---Question4---//")

//---Question4---//