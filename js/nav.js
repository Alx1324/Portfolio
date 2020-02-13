var url = window.location.href;
var page = url.substr(url.lastIndexOf('/'));// + 1 para quitar '/' del url
//var div = document.querySelector('a').getAttribute('href'); //si funciona pero solo toma el primero del documento...
var menu = document.querySelectorAll('a');//Tomamos todos los tag 'a'

//Condiciones si page = menu
if (page == menu[0].getAttribute('href')) {
  menu[0].classList.add('active');
} else if (page == menu[1].getAttribute('href')) {
  menu[1].classList.add('active');
} else if (page == menu[2].getAttribute('href')) {
  menu[2].classList.add('active');
} else if (page == menu[3].getAttribute('href')) {
  menu[3].classList.add('active');
} else if (page == menu[4].getAttribute('href')) {
  menu[4].classList.add('active');
} else if (page == menu[5].getAttribute('href')) {
  menu[5].classList.add('active');
} 


window.onscroll = function() {
  scrollFunction();
};
var menuTop = document.getElementById('barMenu');
var logoA = document.getElementById('logo-a');
var logoB = document.getElementsByClassName('logo-b');
var logoC = document.getElementById('alxLogo').getElementsByClassName('logo-c');

function scrollFunction() {
  if (document.body.scrollTop > 577 || document.documentElement.scrollTop > 578) {
    menuTop.style.minHeight = '75px';
    menuTop.style.backgroundColor = '#1d4a60';
    menuTop.style.overflow = 'auto';
    logoA.style.fill = "white";
    logoB[0].style.fill = "white";
    logoB[1].style.fill = "white";
    logoC[0].style.fill = "white";
  } else {
    menuTop.removeAttribute('style');
    logoA.removeAttribute('style');
    logoB[0].removeAttribute('style');
    logoB[1].removeAttribute('style');
    logoC[0].removeAttribute('style');
  }
}