//ADICIONANDO O ESTILO NAS ANCORAS //
$('a').on('click', function(){
  $('a').removeClass('selected');
  $(this).addClass('selected');

});

/* MOIBILE MENU */


//MOSTRANDO O SCROLL DAS NAVS //
/* window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop);
}); */

//FUNÇÃO PARA ATIVAR ESTILO AO USAR O SCROLL

window.addEventListener('scroll', function() {
var homeScroll = document.querySelector('.nav-home > a');
var servicesScroll = document.querySelector('.nav-services > a');
var providersScroll = document.querySelector('.nav-providers > a');
var appsScroll = document.querySelector('.nav-apps > a');
var doctorScroll = document.querySelector('.nav-doctor > a');
var testimonialsScroll = document.querySelector('.nav-testimonials > a');
var aboutScroll = document.querySelector('.nav-about > a');
if (window.scrollY >= 0 && window.scrollY < 710) {
  homeScroll.classList.add('selected');
}
else{
    homeScroll.classList.remove('selected');
    
}
if (window.scrollY >= 710 && window.scrollY < 1710) {
    servicesScroll.classList.add('selected');
}
else{
    servicesScroll.classList.remove('selected');
      
}
if (window.scrollY >= 1710 && window.scrollY < 2290) {
    providersScroll.classList.add('selected');
  }
else{
    providersScroll.classList.remove('selected');
      
}
if (window.scrollY >= 2290 && window.scrollY < 2843) {
  appsScroll.classList.add('selected');
  }
else{
  appsScroll.classList.remove('selected');
      
}
if (window.scrollY >= 2843 && window.scrollY < 3406) {
  doctorScroll.classList.add('selected');
  }
else{
  doctorScroll.classList.remove('selected');
      
}
if (window.scrollY >= 3406 && window.scrollY < 3601) {
  testimonialsScroll.classList.add('selected');
  }
else{
  testimonialsScroll.classList.remove('selected');
      
}
if (window.scrollY >= 3601) {
  aboutScroll.classList.add('selected');
  }
else{
  aboutScroll.classList.remove('selected');
      
}
});

/* CHAMANDO OS CARROSSEIS */
const slides = document.querySelectorAll(".carrossel-body")
const slideButtons = document.querySelectorAll(".carrossel-btn")
const nextButton = document.querySelector('[class="carrossel-bottom-arrow-right"]')
const prevButton = document.querySelector('[class="carrossel-bottom-arrow-left"]')
//CONTADOR DOS CARROSSEIS
let currentSlideIndex = 0
/* FUNÇÃO PARA PASSAR OS CARDS DO CARROSSEL */
nextButton.addEventListener('click', () =>{
if(currentSlideIndex === slides.length - 1){
  currentSlideIndex = 0
}else{
  currentSlideIndex++
}
slides.forEach(slide => {
  slide.classList.remove('carrossel-body--visible')
})
slideButtons.forEach(button => {
  button.classList.remove('carrossel-btn--selected')
})
slides[currentSlideIndex].classList.add('carrossel-body--visible')
slideButtons[currentSlideIndex].classList.add('carrossel-btn--selected')
})
prevButton.addEventListener('click', () =>{
if(currentSlideIndex === 0){
  currentSlideIndex = slides.length - 1
}else{
  currentSlideIndex--
}
slides.forEach(slide => {
  slide.classList.remove('carrossel-body--visible')
})
slideButtons.forEach(button => {
  button.classList.remove('carrossel-btn--selected')
})
slides[currentSlideIndex].classList.add('carrossel-body--visible')
slideButtons[currentSlideIndex].classList.add('carrossel-btn--selected')
})

const buttonCarrossel1 = document.querySelector('.carrossel-bottom1')
buttonCarrossel1.addEventListener('click', function(){
const slide1 = document.querySelector('.carrossel1');
slides.forEach(slide => {
  slide.classList.remove('carrossel-body--visible')
})
slideButtons.forEach(button => {
  button.classList.remove('carrossel-btn--selected')
})
slide1.classList.add('carrossel-body--visible');
buttonCarrossel1.classList.add('carrossel-btn--selected')

})
const buttonCarrossel2 = document.querySelector('.carrossel-bottom2')
buttonCarrossel2.addEventListener('click', function(){
const slide2 = document.querySelector('.carrossel2');
slides.forEach(slide => {
  slide.classList.remove('carrossel-body--visible')
})
slideButtons.forEach(button => {
  button.classList.remove('carrossel-btn--selected')
})
slide2.classList.add('carrossel-body--visible');
buttonCarrossel2.classList.add('carrossel-btn--selected')

})
const buttonCarrossel3 = document.querySelector('.carrossel-bottom3')
buttonCarrossel3.addEventListener('click', function(){
const slide3 = document.querySelector('.carrossel3');
slides.forEach(slide => {
  slide.classList.remove('carrossel-body--visible')
})
slideButtons.forEach(button => {
  button.classList.remove('carrossel-btn--selected')
})
slide3.classList.add('carrossel-body--visible');
buttonCarrossel3.classList.add('carrossel-btn--selected')

})
const buttonCarrossel4 = document.querySelector('.carrossel-bottom4')
buttonCarrossel4.addEventListener('click', function(){
const slide4 = document.querySelector('.carrossel4');
slides.forEach(slide => {
  slide.classList.remove('carrossel-body--visible')
})
slideButtons.forEach(button => {
  button.classList.remove('carrossel-btn--selected')
})
slide4.classList.add('carrossel-body--visible');
buttonCarrossel4.classList.add('carrossel-btn--selected')

})