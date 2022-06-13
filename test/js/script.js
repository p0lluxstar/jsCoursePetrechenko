'use strict';

const aaa = {
    a: false,
    b: function(){
        if (a){
            a = true; 
        } else {
            a = false;
        }
    }

};

console.log(aaa.a);