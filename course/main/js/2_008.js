"use strict";

/*
Map это структура данных, которые очень похожи на объект, только у них вместо свойств может быть использовать объект, массив и функции. 
Различие map и обектов. У map ключи могут быть числами, объектрами, функциями у объектра только строка. При создании пустой карты в ней ничего не будет содержаться. Карты легко переберать. Порядок свойств в map такой же как мы и добовляли, у объектов нет четкого порядка. Лего получиь размер карты.
*/

const shops = [
    {rice: 50},
    {oil: 200},
    {bread: 50}
];

const map = new Map();

map.set(shops[0], 5000);

console.log(map); // Map(1) { { rice: 50 } => 5000 }

console.log(map.get(shops[0])); // 5000 
console.log(map.has(shops[0])); // true
// map.delete(key);
// map.clear();
// map.size;

// перебор map

for (let shop of map.keys()) {
    console.log(shop);
};

map.forEach((value, key, map) => {
    console.log(key, value);
})



