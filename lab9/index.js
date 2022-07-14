class LinkedList {
    constructor(arr) {
        if (arr) {
            arr.forEach(elem => this.add(elem));
        }
    }
    add(element) {
        if (this.value === undefined) {
            this.value = element;
            this.next = null;
        } else {
            let current = this;
            while (current.next) {
                current = current.next;
            }
            current.next = { value: element, next: null };
        }
    }
    remove(element) {
        var current = this;
        var prev = null;
        while (current) {
            if (current.value === element) {
                if (prev == null) {
                    this.value = current.next.value;
                    this.next = current.next.next;
                } else {
                    prev.next = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
    printHelper(list, result) {
        if (list.next == null) {
            result += list.value;
            return result;
        }
        result += list.value + ',';
        return this.printHelper(list.next, result);
    }
    print() {
        let result = 'LinkedList{';
        result = this.printHelper(this, result);
        result += '}';
        console.log(result);
    }
}
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(3);
linkedlist.print();


class Question {
    constructor(questionId, answer) {
        this.questionId = questionId;
        this.answer = answer;
    }
    checkAnswer(correctAnswer) {
        return this.answer === correctAnswer;
    }
}
class Student {
    constructor(studentId, answers = []) {
        this.studentId = studentId;
        this.answers = answers;
    }
    addAnswer(question) {
        this.answers.push(question);
    }
}
class Quiz {
    constructor(questionsArray = [], students = []) {
        this.questionsMap = new Map();
        questionsArray.forEach(que => this.questionsMap.set(que.questionId, que.answer));
        this.students = students;
    }
    scoreStudent(studentId) {
        let student = this.students.find(student => student.studentId === studentId);
        return student.answers.reduce((total, currentQuestion) => {
            let questionId = currentQuestion.questionId; 
            let ca = this.questionsMap.get(questionId); 
            let result = currentQuestion.checkAnswer(ca); 
            if (result) {
                total = total + 1;
            }

            return total;
        }, 0);
    }
    getAverageScore() {
        return this.students.reduce((average, currentStudent, index, array) => average + this.scoreStudent(currentStudent.studentId) / array.length, 0);
    }
}
const quesArrayAndAnswers = [new Question(1, 'a'), new Question(2, 'b'), new Question(3, 'd')];

let stu1 = new Student(1, [new Question(1, 'a'), new Question(2, 'b'), new
    Question(3, 'b')]);

let stu2 = new Student(2);
stu2.addAnswer(new Question(1, 'a'));
stu2.addAnswer(new Question(2, 'b'));
stu2.addAnswer(new Question(3, 'd'));
const students = [stu1, stu2];
let quizObj = new Quiz(quesArrayAndAnswers, students);
console.log(quizObj.scoreStudent(1));
console.log(quizObj.scoreStudent(2));
console.log(quizObj.getAverageScore());