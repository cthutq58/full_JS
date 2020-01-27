'use strict'

let menu = document.querySelector('.menu'),
    // menu = document.getElementsByClassName('menu')[0],
    menuItems = document.querySelectorAll('.menu-item'),
    ask = document.getElementById('prompt');

console.log(menu);
{/* <ul class="menu">
    <li class="menu-item">Первый пункт</li>
    <li class="menu-item">Второй пункт</li><li class="menu-item">Третий пункт</li>
    
    <li class="menu-item">Четвертый пункт</li>
</ul> */}
console.log(menu[3]);           // undefined

console.log(menu.children);     // HTMLCollection(4)
console.log(menu.children[3]);  // <li class="menu-item">Четвертый пункт</li>
console.log(menu.childNodes);   // NodeList(9) 

console.log(menuItems);        // NodeList(4) 
console.log(menuItems[3]);     // <li class="menu-item">Четвертый пункт</li>

let arrElem = [], arrTxt = [];
menuItems.forEach((item, i) => {
    arrTxt[i] = item.textContent;
    arrElem[i] = item;
});
console.log(arrTxt);  // ["Первый пункт", "Третий пункт", "Второй пункт", "Четвертый пункт"]
console.log(arrElem); // [li.menu-item, li.menu-item, li.menu-item, li.menu-item]

// menuItems[2].insertAdjacentElement("afterend", menuItems[1]);
menu.insertBefore(menuItems[2], menuItems[1]);

let punkt5 = document.createElement("li");
punkt5.classList.add("menu-item");          // Добавляем новый li с классом

// let punkt5 = menuItems[3].cloneNode(1);  // Клонируем li с классом

punkt5.textContent = "Пятый пункт";

// menu.insertAdjacentElement("beforeend", punkt5);
menu.appendChild(punkt5);

console.log(menu);
console.log(menu.children[4]);  // <li class="menu-item">Пятый пункт</li>
console.log(menuItems[4]);      // undefined

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

document.getElementById('title').textContent = 'Только подлинный Apple';

document.querySelector('.adv').remove();

// ask.textContent = prompt("Какое Ваше мнение о технике Apple?", "Да");
