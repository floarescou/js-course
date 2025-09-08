// // LESSON 1
let first = 12;

//infinity
console.log(4/0);
//NaN
console.log('string' * 9);

//null - в коде чего-то не существует
// console.log(n1);
//undefined - объект существует, но значения не имеет
let und;
console.log(und);

//объекты
obj = {
    name: "John", age: 25, isMarried: false
};
console.log(obj.name);
console.log(obj["age"]);

//массивы
let arr = [
    'plum', 'orange', 'apple'
];
console.log(arr[0]);
console.log(arr[2]);

//команды
// alert("Hello");
// confirm("Are you here?");
let a = +prompt("Are you 18?", "");
console.log(typeof(a));
console.log(typeof(arr));
console.log(typeof(null));

//операторы
console.log("arr" + " - object");
console.log(4 + " - object");