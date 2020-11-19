'use strict';

// const extraMenu = document.querySelector(".extra");
//
// function bright () {
//     extraMenu.classList.toggle("active");
// }
//
// setInterval(() => bright(), 1000);

const menuIconBorder = document.querySelector(".menu-iconBorder");
const surfacing = document.querySelector(".surfacing");
//const canvas = document.querySelector(".canvas");

function activator () {
     surfacing.classList.toggle("active");
     //canvas.classList.toggle("active");
 }

menuIconBorder.onclick = activator;