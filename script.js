const students = [

//grade 7
    {
     
    "name": "Аліна Будь",
    "grade": 7,
    "classes": ["group"]
    },
    {
    
    "name": "Олексій Колесніков",
    "grade": 7,
    "classes": ["group"]
    },
    {
      
    "name": "Нікіта Чепурной",
    "grade": 7,
    "classes": ["group", "individual"]
    },
    {
    
    "name": "Микита Заіка",
    "grade": 7,
    "classes": ["group"]
    },
    {
    
    "name": "Марина Зімарина",
    "grade": 7,
    "classes": ["group"]
    },
    {
    
    "name": "Вікторія Летун",
    "grade": 7,
    "classes": ["individual"]
    }, 
    {
    
    "name": "Аліса Благоразумна",
    "grade": 7,
    "classes": ["individual"]
    },    

//grade 6
    {
    
    "name": "Кирил Колесніков",
    "grade": 6,
    "classes": ["group"]
    }, 
    {
    
    "name": "Кіра Кабанчук",
    "grade": 6,
    "classes": ["group", "individual"]
    }, 
    {
    
    "name": "Саша ",
    "grade": 6,
    "classes": ["group"]
    }, 

//grade 2
    {
    
    "name": "Варвара Врагалева",
    "grade": 2,
    "classes": ["group"]
    }, 
    {
    
    "name": "Нікіта Турко",
    "grade": 2,
    "classes": ["group"]
    },
    {
    
    "name": "Тея Рохол",
    "grade": 2,
    "classes": ["individual"]
    },

//grade 8
    {
    
    "name": "Рада Твердюк",
    "grade": 8,
    "classes": ["individual"]
    },
];

//put grade in the dropdown

var gradesUsed = [];
var studentName = [];

for(var i=0;i<students.length;i++){

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
    const selectedValue = parseInt(gradeSelector.value);
    
    switch (selectedValue) {
        case 6:
        case 7:
        case 8:
        case 2:
            filteredStudents = students.filter(student => student.grade === selectedValue)

            break;
        default:
            filteredStudents = [];

    };

    filterStudentsFromDropDown(filteredStudents);
});

function filterStudentsFromDropDown(students){
    
    nameDropdown.innerHTML = '<option value="">Select students name</option>';
    
    students.forEach(function (student) {
        var opt = document.createElement('option');
        opt.value = studentName;
        opt.innerHTML = (`${student.name}`);
        nameDropdown.appendChild(opt);
        //console.log(`${student.name}`);
    });

}



// const groupCheckbox = document.getElementById('group');

const checkboxes = document.querySelectorAll('input[type=checkbox]');

checkboxes.forEach(function(checkbox){
    //console.log(checkbox);

    checkbox.addEventListener("change", function(event){
        //console.log(event.target.checked);

        // is checkbox checked-- loop throgh array -- IFONLY is it therenin the classes -- loop again to see which one
        
       // console.log(event.target.id)

        
        students.forEach(function(student){
            student.classes.forEach(function(classes){
                //console.log(classes);
                //console.log(event.target.id)
                if(classes === event.target.id){
                    console.log(`${student.name} student is in this group`)
                }
            });
        });


    });
});

console.log(checkboxes);

// groupCheckbox.addEventListener("change", function(event){
//     console.log(event.target.checked);
//     //console.log('hihi')

// });



// const handleChange = (event) => {
//     groupCheckbox(event.target.chacked)
// }


//onchange on the checkbox -- value -- filter by that

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
