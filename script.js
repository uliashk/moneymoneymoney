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
    "special": true,
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
    
    "name": "Олександр Мітяєв",
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
    
    "name": "Рада Михайленко",
    "grade": 8,
    "classes": ["individual"]
    },
];



students.forEach(function (student) {
    const studentsDiv = document.getElementById('students');

    let label = document.createElement('LABEL');

    let newCheckbox = document.createElement('INPUT');
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("id", student.name);

    // Set the label text and associate it with the checkbox
    label.setAttribute("for", student.name);
    label.textContent = student.name;

    // Append the checkbox and label to the div
    label.insertBefore(newCheckbox, label.firstChild);
    studentsDiv.appendChild(label);

    // Add a line break for spacing
    studentsDiv.appendChild(document.createElement('BR'));
});



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

const studentsCard = document.getElementById('students');

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

    filterStudentsFromList(filteredStudents);
});

function filterStudentsFromList(students){
    
    //nameDropdown.innerHTML = '<option value="">Select students name</option>';
    
    students.forEach(function (student) {
        let label = document.createElement('LABEL');
        var opt = document.createElement('ladel');
        label.value = studentName;
        label.innerHTML = (`${student.name}`);
        studentsCard.appendChild(opt);
        //console.log(`${student.name}`);
    });

}



//const groupCheckbox = document.getElementById('group');


// const checkboxes = document.querySelectorAll('input[type=checkbox]');

// function filterStudentsByClasses() {

//     const selectedClasses = [];

//     checkboxes.forEach(function(checkbox){
//         if (checkbox.checked) {
//             selectedClasses.push(checkbox.value);
          
//         }
//     }
    



// const studentsInGroup = students.filter(student => student.classes.includes("group"));
// console.log(studentsInGroup)

// const studentsInIndividual = students.filter(student => student.classes.includes("individual"));
// console.log(studentsInIndividual)





/*checkboxes.forEach(function(checkbox){
    //console.log(checkbox);

    checkbox.addEventListener("change", function(event){
        //console.log(event.target.checked);

        // is checkbox checked-- loop throgh array -- IFONLY is it therenin the classes -- loop again to see which one
        
       // console.log(event.target.id)

        

    });
});
*/

// groupCheckbox.addEventListener("change", function(event){
//     console.log(event.target.checked);
//     //console.log('hihi')

// });



// const handleChange = (event) => {
//     groupCheckbox(event.target.chacked)
// }


//onchange on the checkbox -- value -- filter by that
