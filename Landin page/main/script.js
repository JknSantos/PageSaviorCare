//ADICIONANDO O ESTILO NAS ANCORAS //
$('a').on('click', function(){
    $('a').removeClass('selected');
    $(this).addClass('selected');

});

/* MOIBILE MENU */

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
  const doctorDivisor = this.document.querySelector('#doctor').offsetTop;
  const testimonialsDivisor = document.querySelector('#testimonials').offsetTop;
  const aboutDivisor = document.querySelector('#about').offsetTop;

  if (window.scrollY >= 0 && window.scrollY < servicesDivisor) {
    homeScroll.classList.add('selected');
  }
  else{
      homeScroll.classList.remove('selected');
      
  }
  if (window.scrollY >= servicesDivisor && window.scrollY < providersDivisor) {
      servicesScroll.classList.add('selected');
  }
  else{
      servicesScroll.classList.remove('selected');
        
  }
  if (window.scrollY >= providersDivisor && window.scrollY < appsDivisor) {
      providersScroll.classList.add('selected');
    }
  else{
      providersScroll.classList.remove('selected');
        
  }
  if (window.scrollY >= appsDivisor && window.scrollY < doctorDivisor) {
    appsScroll.classList.add('selected');
    }
  else{
    appsScroll.classList.remove('selected');
        
  }
  if (window.scrollY >= doctorDivisor && window.scrollY < testimonialsDivisor) {
    doctorScroll.classList.add('selected');
    }
  else{
    doctorScroll.classList.remove('selected');
        
  }
  if (window.scrollY >= testimonialsDivisor && window.scrollY < aboutDivisor) {
    testimonialsScroll.classList.add('selected');
    }
  else{
    testimonialsScroll.classList.remove('selected');
        
  }
  if (window.scrollY >= aboutDivisor - 365) {
    aboutScroll.classList.add('selected');
    }
  else{
    aboutScroll.classList.remove('selected');
        
  }
  console.log(aboutDivisor)
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
