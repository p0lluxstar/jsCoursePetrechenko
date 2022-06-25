"use strict";

// функция возведнеие в степень просто с помощью цикла

function pow(x, n){
    let res = 1;
    for (let i = 0; i < n; i++){
        res *= x;
    } 
    return res;
}


// функция возведнеие в степень просто с помощью рекурсии

function pow2(x, n){
    if (n === 1){
        return x;
    } else {
        const b = x * pow2(x, n - 1);
        console.log(b);
        return b;
    }
}

pow(2, 1); // 2
pow(2, 2); // 4
pow2(2, 3); // 8



let students = {
    js: [{
        name: 'Jonh',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18    
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

// function getTotalProgressBuIteration(data){
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)){ // возвращает значения объекта
//         if (Array.isArray(course) {
//             students += course.length;
        
//         })
//     }

//     return total / students;
// }

// getTotalProgressBuIteration(students);