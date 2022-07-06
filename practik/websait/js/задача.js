'use strict';

const arrOne = [49, 51, 63];
const arrTwo = [13, 11, 23, 22, 12, 14];


// const fun = function(arr){
    
//     for (let key in arr){
//         const arrNew = [(`...${arr[key]}% влажности в ${arr.indexOf(arr[key]) + 1} день`)];
//         console.log(arrNew);
//     }
// };

// fun(arrOne);

const fun2 = function(arr){

let set = '';

for (let i = 0; i < arr.length; i++){
    set = set + [(`...${arr[i]}% в день ${arr.indexOf(arr[i]) + 1} `)];
}
return set;
};

const aa = fun2(arrOne);
console.log(aa);

// // let arr = [1, 2, 3];
// // let str = arr.join(' ');
// // console.log(str);
