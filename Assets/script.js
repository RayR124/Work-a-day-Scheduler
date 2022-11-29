const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");
const btn11 = document.querySelector(".btn11");
const btn12 = document.querySelector(".btn12");
let text = document.querySelector(".text");
let prompt1 = document.querySelector(".prompt");

btn1.addEventListener("click", saveHour1);
btn2.addEventListener("click", saveHour2);
btn3.addEventListener("click", saveHour3);
btn4.addEventListener("click", saveHour4);
btn5.addEventListener("click", saveHour5);
btn6.addEventListener("click", saveHour6);
btn7.addEventListener("click", saveHour7);
btn8.addEventListener("click", saveHour8);
btn9.addEventListener("click", saveHour9);
btn10.addEventListener("click", saveHour10);
btn11.addEventListener("click", saveHour11);
btn12.addEventListener("click", saveHour12);

function saveHour1() {
    let textbox1 = document.querySelector(".textbox1");
    window.localStorage.setItem("9:00AM", textbox1.value);
    prompt1.classList.remove("hidden");
    setTimeout(function() {
        prompt1.classList.add("hidden");
    }, 3000);
};

function saveHour2() {
    let textbox2 = document.querySelector(".textbox2");
    window.localStorage.setItem("10:00AM", textbox2.value);
};

function saveHour3() {
    let textbox3 = document.querySelector(".textbox3");
    window.localStorage.setItem("11:00AM", textbox3.value);
};

function saveHour4() {
    let textbox4 = document.querySelector(".textbox4");
    window.localStorage.setItem("12:00PM", textbox4.value);
};

function saveHour5() {
    let textbox5 = document.querySelector(".textbox5");
    window.localStorage.setItem("1:00PM", textbox5.value);
};

function saveHour6() {
    let textbox6 = document.querySelector(".textbox6");
    window.localStorage.setItem("2:00PM", textbox6.value);
};

function saveHour7() {
    let textbox7 = document.querySelector(".textbox7");
    window.localStorage.setItem("3:00PM", textbox7.value);
};

function saveHour8() {
    let textbox8 = document.querySelector(".textbox8");
    window.localStorage.setItem("4:00PM", textbox8.value);
};

function saveHour9() {
    let textbox9 = document.querySelector(".textbox9");
    window.localStorage.setItem("5:00PM", textbox9.value);
};

function saveHour10() {
    let textbox10 = document.querySelector(".textbox10");
    window.localStorage.setItem("6:00PM", textbox10.value);
};

function saveHour11() {
    let textbox11 = document.querySelector(".textbox11");
    window.localStorage.setItem("7:00PM", textbox11.value);
};

function saveHour12() {
    let textbox12 = document.querySelector(".textbox12");
    window.localStorage.setItem("8:00PM", textbox12.value);
};