/*const students = [

{ name: "Alice", marks: 85 },

{ name: "Bob", marks: 72 },

{ name: "Charlie", marks: 90 }

];

Write a function that returns the name of the student with the highest marks.*/


const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 90 }
];

function topRank(students) {
    let highMarks = 0; 
    let topName = "";      

    for (let student of students) {
        if (student.marks > highMarks) {
            highMarks = student.marks;
            topName = student.name;
        }
    }
    return topName;
}
console.log(topRank(students)); //o/p:Charlie
