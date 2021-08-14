//Select The Id (A Links)
const btnHamburger = document.querySelector('#btnHamburger');
//Scroll Smoothly
const body = document.querySelector('body');
//Select The Header Class 
const header = document.querySelector('.header');
//Select The Overlay (Fade In And Fade Out)
const overlay = document.querySelector('.overlay');
//Fade Element
const fadeElems = document.querySelectorAll('.has-fade');

//Functions
btnHamburger.addEventListener('click', function(){

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }  
});
