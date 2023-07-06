


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

// window.onload = function() {
//   new Elevator({
//       element: document.querySelector('.elevator-button'),
//       mainAudio: 'music/elevator.mp3',
//       endAudio: 'music/ding.mp3',
//       duration: 5000,
//       startCallback: function() {
//         // is called, when the elevator starts moving
//       },
//       endCallback: function() {
//         // is called, when the elevator reached target level
//       }
//   });
// }


// var elevator = document.querySelector('.elevator');
var elementButton = document.querySelector('.elevator');
var elevator = new Elevator({
    element: elementButton,
    mainAudio: 'music/elevator.mp3', // Music from http://www.bensound.com/
    endAudio:  'music/ding.mp3',
    duration: 5000,
    startCallback: function() {
      // is called, when the elevator starts moving
    },
    endCallback: function() {
      // is called, when the elevator reached target level
    }
});



// window.onload = function() {
//   var elevator = new Elevator({
//     mainAudio: '/music/elavator.mp3',
//     endAudio: '/music/ding.mp3'
//   });
// }

// // You can run the elevator, by calling.
// elevator.elevate();

// var elevator = document.querySelector(".elevator");

// window.addEventListener("scroll", () => )

// window.onload = function() {
//   new Elevator({
//       element: document.querySelector('.elevator-button'),
//       mainAudio: './music/elavator.mp3',
//       endAudio: './music/ding.mp3',
//       duration: 5000,
//       startCallback: function() {
//         // is called, when the elevator starts moving
//       },
//       endCallback: function() {
//         // is called, when the elevator reached target level
//       }
//   });
// }

// var elementButton = document.querySelector('.elevator');
// var elevator = new Elevator({
//     element: elementButton,
//     mainAudio: './music/elevator.mp3', // Music from http://www.bensound.com/
//     endAudio:  './music/ding.mp3'
// });




// // commonjs import
// const Motus = require('motus');
// // es6 import
// import Motus from 'motus';


// const parallaxAnimation = new Motus.Animation({
//   $el: document.getElementById('parallax-element'),
//   keyframes: [
//       {backgroundPositionY: 50},
//       {backgroundPositionY: 0}
//   ],
// });
// Motus.addAnimation(parallaxAnimation);






// $('.my-paroller').paroller();
// $("#my-element").paroller({ factor: 0.5, factorXs: 0.2, type: 'foreground', direction: 'horizontal' });




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

// const myAtropos = Atropos({
//     el: '.my-atropos',
//     activeOffset: 40,
//     shadowScale: 1.05,
//     onEnter() {
//       console.log('Enter');
//     },
//     onLeave() {
//       console.log('Leave');
//     },
//     onRotate(x, y) {
//       console.log('Rotate', x, y);
//     }
//   });

//   setTimeout(() => {
//     // destroy it when needed
//     myAtropos.destroy();
//   }, 10000)




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