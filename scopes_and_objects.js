// TODO: Create a global variable called globalCount
globalCount = 0
// TODO: Create a function that demonstrates local scope
function localScopeDemo(){let localScope = "This is a local scope"; return localScope}
console.log(localScopeDemo())
console.log("-".repeat(60))
// TODO: Create a function that tries to modify both variables
function modifyScopes(){let localCount = 0; globalCount += 5; localCount += 3; return {globalCount, localCount}}
console.log(modifyScopes())
console.log("-".repeat(60))
// TODO: Create a Student constructor function
function Students(name, age, class_num){
    this.name = name
    this.age = age
    this.class_num = class_num
}

// TODO: Create several student instances
let student_1 = new Students("Joshua", 22, 2)
let student_2 = new Students("Deon", 20, 2)
let student_3 = new Students("Antonio", 24, 2)
let student_4 = new Students("Amo", 20, 1)

console.log(student_1)
console.log(student_2)
console.log(student_3)
console.log(student_4)
console.log("-".repeat(60))
// TODO: Create an object literal with nested properties
const class_ = {"Lecturer": "Tyhiesha",
    students : student_1, student_2, student_3
}
console.log(`Lecturer of class 1 is ${class_["Lecturer"]} and 3 of the students are ${student_1.name}, ${student_2.name}, ${student_3.name}.`)