


var mainMenu = document.querySelector("header #nav");

var menuButton = document.querySelector("header .burger");

var buttonOverlay = document.querySelector("header .overlay");

var body = document.querySelector("body");




function toggleMenu() {

menuButton.classList.toggle("clicked");
buttonOverlay.classList.toggle("show");
mainMenu.classList.toggle("show");
body.classList.toggle("overflow");

}

menuButton.addEventListener("click", toggleMenu);
buttonOverlay.addEventListener("click", toggleMenu);




// import rolly from 'rolly.js'; 
// import { parse } from 'node-html-parser';
// parse = require('node-html-parser');

// const r = rolly({
//     view: document.querySelector('.app'),
//     native: true,
//   });
//   r.init();



// const config = {
//     view: document.querySelector('.app'),
//     native: true,
//   };
  
//   const r = window.rolly(config);
//   r.init();



// import rolly from 'rolly.js';

// const r = rolly({
//   view: document.querySelector('.app'),
//   native: true,
//   // other options
// });
// r.init();


// function myFunction() {
//     var element = document.getElementById("myDIV");
//     element.classList.toggle("mystyle");
//   }

// $('.burger, .overlay').clicked(function() {
//     $('.burger').toggleClass('clicked');
//     $('.overlay').toggleClass('show');
//     $('#nav').toggleClass('show');
//     $('body').toggleClass('overflow');
// })


console.log("TEST")


// import 'atropos/css'

// import Atropos from 'https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.mjs';

// import Atropos from 'atropos';

// Initialize
// const myAtropos = Atropos({
//   el: '.my-atropos',
//   // rest of parameters
// });

const myAtropos = Atropos({
    el: '.my-atropos',
    activeOffset: 40,
    shadowScale: 1.05,
    onEnter() {
      console.log('Enter');
    },
    onLeave() {
      console.log('Leave');
    },
    onRotate(x, y) {
      console.log('Rotate', x, y);
    }
  });

  setTimeout(() => {
    // destroy it when needed
    myAtropos.destroy();
  }, 10000)




// const myAtropos = Atropos({
//   el: '.my-atropos',
//   // rest of parameters
// });















// import scrollama from "scrollama";

// instantiate the scrollama
// const scroller = scrollama();

// // setup the instance, pass callback functions
// scroller
//   .setup({
//     step: ".step",
//   })
//   .onStepEnter((response) => {
//     // { element, index, direction }
//   })
//   .onStepExit((response) => {
//     // { element, index, direction }
//   });











// let moon = document.getElementById("maan");
// let stars = document.getElementById("sterren");
// let voorBerg = document.getElementById("bergen_front");
// let achterBerg = document.getElementById("bergen_back");
// let text = document.getElementById("text");



// window.addEventListener("scroll", function(){
//     let value = window.scrollY;
//     stars.style.left = value * 0.25 + "px"; 
//     moon.style.top = value * 1.05 + "px";
//     voorBerg.style.top = value * 0 + "px";
//     achterBerg.style.top = value * 0.5 + "px";
//     text.style.marginRight = value * 4 + "px";
//     text.style.marginTop = value * 1.5 + "px";
// })