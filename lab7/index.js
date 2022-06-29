//----method1-----//

let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};

//----method2-----//

let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            (function () {
                console.log(this.title + ": " + student);
            }).call(group2)
        });
    }
};
group2.showList();