// // LESSON 5
let box = document.getElementById("box");
let btn = document.getElementsByTagName("button");
let circle = document.getElementsByClassName("circle");
let heart = document.querySelectorAll('.heart');
let oneHeart = document.querySelector('.heart');

box.style.backgroundColor = "chocolate";
btn[1].style.borderRadius = "50%";
circle[0].style.backgroundColor = "darkred";
circle[1].style.backgroundColor = "moccasin";
circle[2].style.backgroundColor = "darkkhaki";

let div = document.createElement('div');
let text = document.createTextNode('Some text');

div.classList.add('black');

// document.body.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
document.body.replaceChild(heart[0], circle[0]);

div.textContent = "Hello, JS";



// // // LESSON 4
// let soldier = {
//     health: 400,
//     armor: 100
// };
//
// let john = {
//   health: 100
// };
//
// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);

// let first = [];
// let i = prompt("", "");
// first = i.split(", ");
// console.log(first);

// let first = ['hello', 'love', 'just'];
// let i = first.join(", ");
// console.log(i);
//
// i = first.sort();
// console.log(i);

// let nums = [5, 7, 4, 15, 45];
// let i = nums.sort(sortNums);
//
// function sortNums (a, b) {
//     return a - b;
// }
// console.log(i);

// let nums = [1, 'second', 3, 'four', 5];
// console.log(nums);
//
// console.log(nums.pop());
// console.log(nums);
//
// nums.push(6);
// console.log(nums);
//
// nums.shift();
// console.log(nums);
//
// nums.unshift(18);
// console.log(nums);
//
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }
//
// nums[99] = 99;
// console.log(nums.length);
//
// nums.forEach(function (item, i, array) {
//    console.log(i + ": " + item + " (массив: " + array + ")");
// });



// let options = new Object();
// let options = {
//     name: "test", width: 1024, height: 1024
// };
// console.log(options);
//
// options.bool = false;
// console.log(options);
//
// options.colors = {
//   border:"black", background: "red"
// };
// console.log(options);
//
// delete options.bool;
// console.log(options);
//
// for (let key in options) {
//     console.log("Свойство '" + key + "' имеет значение - " + options[key]);
// }
//
// console.log(Object.keys(options).length);



// // // LESSON 3
//
// let str = "hello";
// let str2 = "12.2px";
//
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(Math.round(str2));
// console.log(parseInt(str2));
// console.log(parseFloat(str2));

// let calc = (a, b) => a + b;
//
// console.log(calc(4, 5));
// console.log(calc(4, 10));

// let num2 = 10;
// function showFirstMessage(text) {
//     alert(text);
//     let num = 20;
//     num2 = 17;
// }
// showFirstMessage("Hello, World");
// showFirstMessage("Hello, JS");
// // console.log(num);
// console.log(num2);

// // // LESSON 2
// let num = 50;
//
// //условия
// if (num < 49) {
//     console.log("Wrong!");
// } else if (num > 100) {
//     console.log("Wrong!");
// } else {
//     console.log("Right!");
// }
//
// //тернарный оператор
// (num === 50) ? console.log("Right!") :  console.log("Wrong!");
//
// //switch
// switch(num) {
//     case 49:
//         console.log("Мало!");
//         break;
//     case 100:
//         console.log("Много!");
//         break;
//     case 80:
//         console.log("Все еще много!");
//         break;
//     case 50:
//         console.log("В точку!");
//         break;
//     default:
//         console.log("Не в этот раз!");
//         break;
// }
//
// //циклы
// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }
//
// // do {
// //     console.log(num);
// //     num++;
// // } while (num < 55);
//
// for (let i = 0; i < 8; i++) {
//     console.log(i, num);
//     num++;
// }


// // // LESSON 1
// let first = 12;
//
// //infinity
// console.log(4/0);
// //NaN
// console.log('string' * 9);
//
// //null - в коде чего-то не существует
// // console.log(n1);
// //undefined - объект существует, но значения не имеет
// let und;
// console.log(und);
//
// //объекты
// obj = {
//     name: "John", age: 25, isMarried: false
// };
// console.log(obj.name);
// console.log(obj["age"]);
//
// //массивы
// let arr = [
//     'plum', 'orange', 'apple'
// ];
// console.log(arr[0]);
// console.log(arr[2]);
//
// //команды
// // alert("Hello");
// // confirm("Are you here?");
// let a = +prompt("Are you 18?", "");
// console.log(typeof(a));
// console.log(typeof(arr));
// console.log(typeof(null));
//
// //операторы
// console.log("arr" + " - object");
// console.log(4 + " - object");