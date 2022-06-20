"use strict";

// Лучше внутри функции не создавать переменные, а создавать их отдельно и передавать аргументом

const usdCurs = 28;
const eurCurs = 32;

function convert(amoutn, curs){
    console.log(amoutn * curs);
}

convert(500, usdCurs);
convert(500, eurCurs);