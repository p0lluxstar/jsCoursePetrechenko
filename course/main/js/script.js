"use strict";

const celciusToKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        //value: Number(prompt('Укажите температруру'))
        value: 35
    };
    //debugger; // установка breakpoint debug

    console.log(measurement);
    console.table(measurement);
    console.log(measurement.value);
    // console.warm(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(celciusToKelvin());

// debugging
const humidities = [25, 23, 19, 18, 21, 'error', 24, 25];
const humidities2 = [13, 15, 16, 12, 13];

const allHumidities = humidities.concat(humidities2); // concat объединяет несколько массивов в один

console.log(allHumidities);

const  calculateHumiditiesAmplitude = function(humidities){
    let max = humidities[0];
    let min = humidities[0];

    for (let i = 1; i < humidities.length; i++){

        const currentHumidities = humidities[i];

        if (typeof currentHumidities !== 'number')
        continue;

        if (currentHumidities > max) {
            max = currentHumidities; // получаем самое большое значение в массиве
        } 
         if (currentHumidities < min){ 
            min = currentHumidities; // получаем самое маленькое значение в массиве
        }
    }
    console.log(max, min);
    return max - min;
};


const amplitude = calculateHumiditiesAmplitude(allHumidities);
console.log(amplitude);