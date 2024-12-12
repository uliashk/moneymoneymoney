const students = [
    {
        "studentID":'abc',
    "name": "Anna",
    "grade": 7,
    "classes": ["Group", "Individual"]
    },
    {
        "studentID":'32rdsffs',
    "name": "Alex",
    "grade": 6,
    "classes": ["Group"]
    },
    {
        "studentID":'sdfkjsdfs',
        "name": "Tjerk",
        "grade": 6,
        "classes": ["Group"]
    },
];

//put grade in the dropdown

var gradesUsed = [];
var studentName = [];

for(var i=0;i<students.length;i++){
    //i=0
    //i=1
    //i=2
    var singleStudent = students[i];
    var opt = document.createElement('option');
    opt.value = singleStudent.name;
    opt.innerHTML = singleStudent.name;
    document.getElementById('student-name').appendChild(opt);
    
    var grade = singleStudent.grade;
    if(gradesUsed.indexOf(grade) == -1){
        gradesUsed.push(grade);
    }

}

// this is for the gradesUsed Array
for(var i=0;i<gradesUsed.length;i++){
    var opt = document.createElement('option');
    opt.value = gradesUsed[i];
    opt.innerHTML = `grade ${gradesUsed[i]}`;
    document.getElementById('grade-selector').appendChild(opt);
}

const nameDropdown = document.getElementById('student-name');


document.getElementById('grade-selector').addEventListener("change", (event) => {
    const gradeSelector = document.getElementById('grade-selector');
    const selectedValue = gradeSelector.value;

    if (selectedValue === '6') {
        const studentsInGrade6 = students.filter(student => student.grade === 6)

        nameDropdown.innerHTML = '<option value="">Select students name</option>';
    
        studentsInGrade6.forEach(function (student) {

            var opt = document.createElement('option');
            opt.value = studentName;
            opt.innerHTML = (`${student.name}`);
            document.getElementById('student-name').appendChild(opt);
            //console.log(`${student.name}`);

        });
        
    } 
});


/*by now!
document.getElementById('grade-selector').addEventListener("change", (event) => {
  
    console.log(`${event}`);

    if(`${event}` === `grade 6`){
        console.log(`student: ${student.name}`);
    }
    
});




//     console.log('tjerk is cool?');
// }

// document.getElementById('grade-selector').addEventListener("change", tjerkIsCool);


// document.getElementById("grade-selector").addEventListener("change", function(e){
//     //alert('i changed');
//     //console.log('i changed iam a changed man!');

// });


// function tjerkIsCool(){

//filter out names baseed

/*
const gr = 
document.querySelector(grade-selector);

// if the dropdown for grade, changes do something


// first filter through either group or individual.


// if we select grade 6 only select people that have grade 6 and return that.

// you go through the array once

gr.forEach((student) => {
    // copyItems.push(stude);

    // this number comes from the input dropdown
    if(student.grade === 6){
        console.log(`student: ${student.name}`);
       // make a new array of selectedStudents

       // and go through this array once to add it to a selectbox

       // documentquery selector to find select box
    }
  });*/
