//ADICIONANDO O ESTILO NAS ANCORAS //
const elementosNav = document.querySelectorAll('.list');
function ativarClick(){
  elementosNav.forEach((elemento) => {
    elemento.addEventListener('click', () => {
      // Remove a classe de todos os elementos do grupo
      elementosNav.forEach((e) => {
        e.classList.remove('selected');
      });
  
      // Adiciona a classe apenas no elemento clicado
      elemento.classList.add('selected');
    });
  });
}

/* MOIBILE MENU */


//MOSTRANDO O SCROLL DAS NAVS //
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop);
}); 

//FUNÇÃO PARA ATIVAR ESTILO AO USAR O SCROLL

window.addEventListener('scroll', function() {
const homeScroll = document.querySelector('.nav-home > a');
const servicesScroll = document.querySelector('.nav-services > a');
const providersScroll = document.querySelector('.nav-providers > a');
const appsScroll = document.querySelector('.nav-apps > a');
const doctorScroll = document.querySelector('.nav-doctor > a');
const testimonialsScroll = document.querySelector('.nav-testimonials > a');
const aboutScroll = document.querySelector('.nav-about > a');

const homeDivisor = document.querySelector('#home').offsetTop;
const servicesDivisor = document.querySelector('#services').offsetTop;
const providersDivisor = document.querySelector('#providers').offsetTop;
const appsDivisor = document.querySelector('#apps').offsetTop;
const doctorDivisor = document.querySelector('#doctor').offsetTop;
const testimonialsDivisor = document.querySelector('#testimonials').offsetTop;
const aboutDivisor = document.querySelector('#about').offsetTop;


console.log(servicesDivisor)
if (window.scrollY >= 0 && window.scrollY < servicesDivisor  - 1) {
  elementosNav.forEach((e) => {
    e.classList.remove('selected');
  });
  homeScroll.classList.add('selected');
}
else{
    homeScroll.classList.remove('selected');
    
}

if (window.scrollY >= servicesDivisor && window.scrollY < providersDivisor  - 1) {
  elementosNav.forEach((e) => {
    e.classList.remove('selected');
  });  
  servicesScroll.classList.add('selected');
}
else{
    servicesScroll.classList.remove('selected');
      
}
if (window.scrollY >= providersDivisor && window.scrollY < appsDivisor  - 1) {
  elementosNav.forEach((e) => {
    e.classList.remove('selected');
  });  
  providersScroll.classList.add('selected');
  }
else{
    providersScroll.classList.remove('selected');
      
}
if (window.scrollY >= appsDivisor && window.scrollY < doctorDivisor  - 1) {
  elementosNav.forEach((e) => {
    e.classList.remove('selected');
  });
  appsScroll.classList.add('selected');
  }
else{
  appsScroll.classList.remove('selected');
      
}
if (window.scrollY >= doctorDivisor && window.scrollY < testimonialsDivisor  - 1) {
  elementosNav.forEach((e) => {
    e.classList.remove('selected');
  });
  doctorScroll.classList.add('selected');
  }
else{
  doctorScroll.classList.remove('selected');
      
}
if (window.scrollY >= testimonialsDivisor && window.scrollY < aboutDivisor  - 195) {
  elementosNav.forEach((e) => {
    e.classList.remove('selected');
  });
  testimonialsScroll.classList.add('selected');
  }
else{
  testimonialsScroll.classList.remove('selected');
      
}
if (window.scrollY >= aboutDivisor - 195) {
  elementosNav.forEach((e) => {
    e.classList.remove('selected');
  });
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