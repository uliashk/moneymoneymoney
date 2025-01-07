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

for(var i=0;i<students.length;i++){
    
    var singleStudent = students[i];
    var grade = singleStudent.grade;
    if(gradesUsed.indexOf(grade) == -1){
        gradesUsed.push(grade);
    }

};


//input grades into dropdown
for(var i=0; i<gradesUsed.length; i++){
    var opt = document.createElement('option');
    opt.value = gradesUsed[i];
    opt.innerHTML = `Grade ${gradesUsed[i]}`;
    document.getElementById('grade-selector').appendChild(opt);
    };

    
function filterStudents(conditionFn) {
    return students.filter(conditionFn);
};

document.getElementById('grade-selector').addEventListener('change', function() {
    const gradeSelector = document.getElementById('grade-selector');
    const selectedValue = parseInt(gradeSelector.value);
    let filteredStudents;
    if (isNaN(selectedValue)) {
        filteredStudents = students; 
    } else {
        filteredStudents = filterStudents(student => student.grade === selectedValue);
    }

    renderStudentCheckboxes(filteredStudents);
});


document.getElementById("group").addEventListener('change', function() {

    const groupCheckbox = document.getElementById("group");

    let filteredStudents;
    if (groupCheckbox.checked) {
        filteredStudents = filterStudents(student => student.classes.includes("group"));
    } else {
        filteredStudents = students
    }

    renderStudentCheckboxes(filteredStudents);
});

document.getElementById("individual").addEventListener('change', function() {

    const individualCheckbox = document.getElementById("individual");

    let filteredStudents;
    if (individualCheckbox.checked) {
        filteredStudents = filterStudents(student => student.classes.includes("individual"));
    } else {
        filteredStudents = students
    }

    renderStudentCheckboxes(filteredStudents);
});

function renderStudentCheckboxes(filteredStudents) {
    const studentsDiv = document.getElementById('students');
    studentsDiv.innerHTML = ''; 

    filteredStudents.forEach(student => {
        let label = document.createElement('LABEL');
        let newCheckbox = document.createElement('INPUT');
        newCheckbox.setAttribute("type", "checkbox");
        newCheckbox.setAttribute("id", student.name);

        label.setAttribute("for", student.name);
        label.textContent = student.name;

        label.insertBefore(newCheckbox, label.firstChild);
        studentsDiv.appendChild(label);
        studentsDiv.appendChild(document.createElement('BR'));
    });
}


