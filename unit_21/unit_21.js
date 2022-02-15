
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    let out = document.querySelector('.out-1');
    out.innerHTML += 'work ';
}
document.querySelector('.div-1').addEventListener('touchstart', t1);
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let a2 = 0;
function t2() {
    let out = document.querySelector('.out-2');
    a2++;
    out.innerHTML = a2;
}
document.querySelector('.div-2').addEventListener('touchstart', t2);
// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3() {
    let out = document.querySelector('.out-3');
    out.innerHTML = 'Block one';
}
function t3_1() {
    let out = document.querySelector('.out-3');
    out.innerHTML = 'Block two';
}
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3_1);
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let div_4 = document.querySelector('.div-4');

function t4() {
    let out = document.querySelector('.out-4');
    div_4.addEventListener('touchstart', () => {
        out.innerHTML = 'Touch';
    });
}
document.querySelector('.b-4').addEventListener('click', t4);
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    
}
document.querySelector('.b-5').addEventListener('click', t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    let out = document.querySelector('.out-6');
    div_4.addEventListener('touchend', () => {
        out.innerHTML = 'Touch end';
    });
}
document.querySelector('.b-4').addEventListener('click', t6);
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    let block = document.querySelector('.div-7');
    block.style.backgroundColor = 'red';
}
document.querySelector('.div-7').addEventListener('touchstart', t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

const a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
function t8() {
    let block = document.querySelector('.div-8');
    let random = Math.floor(Math.random(a8.length - 1) * 10);
    block.style.backgroundColor = a8[random];
}
document.querySelector('.div-8').addEventListener('touchstart', t8);

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let a9 = 0;
function t9() {
    let out = document.querySelector('.out-9');
    a9++;
    out.innerHTML = a9;
}

document.querySelector('.div-9').addEventListener('touchstart', t9);

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let a10 = 75;
function t10() {
    let block = document.querySelector('.div-10');
    block.style.width = a10 + 'px';
    a10++;
}

document.querySelector('.div-10').addEventListener('touchmove', t10);

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */


function t11() {
    let block = document.querySelector('.div-11');
    let out = document.querySelector('.out-11');
    // out.innerHTML = block.touch.radiusX;
    console.log(block.touch.radiusX + 'px');
}

document.querySelector('.div-11').addEventListener('touchstart', t11);

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку next событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelector('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;
next.ontouch = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;
prev.ontouch = prevFunction;

function nextFunction() {
    
}

function prevFunction() {
    
}


// ваше событие здесь!!!
