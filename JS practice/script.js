let student = {
    rollNo: 6,
    name: 'Azmeer Hassan',
    department:'CSE'
};

// console.log(student);
// console.log(student.rollNo);
// console.log(student.name);
// console.log(student.department);
// console.log(student['rollNo']);
// console.log(student['name']);
// console.log(student['department']);

// console.log(typeof student)
// console.log(typeof student.name)

student.year = 'second';
// console.log(student);
delete student.name;
console.log(student);