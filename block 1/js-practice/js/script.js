//  Восстановить порядок в меню, добавить пятый пункт
let navBtns = document.querySelectorAll(".menu-item");
navBtns[1].innerHTML = "Второй пункт";
navBtns[2].innerHTML = "Третий пункт";

let navList = document.getElementsByTagName("ul")[0];
let newNavBtns = document.createElement("li");
newNavBtns.classList.add("menu-item");
newNavBtns.textContent = "Пятый пункт";
navList.appendChild(newNavBtns);

//  Заменить картинку заднего фона на другую из папки img
document.body.style.background = "url(./img/apple_true.jpg)";

//  Поменять заголовок, добавить слово "подлинную"
let title = document.querySelector('#title');
title.innerText = "Мы продаем только подлинную технику Apple";

//  Удалить рекламу со страницы
let adv = document.getElementsByClassName("adv")[0];
adv.remove();

//  Спросить у пользователя отношение к технике apple и записать ответ в
// поле "prompt"
let promptField = document.getElementById("prompt");
let a = prompt("Укажите ваше отношение к технике apple", "");
promptField.textContent = a;
