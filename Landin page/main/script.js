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
const carrosseis = document.getElementById("carrosseis");
const carrossel = document.querySelectorAll(".carrossel-body")

/* FUNÇÃO PARA PASSAR OS CARDS DO CARROSSEL */
let idx = 0;

function startCarrossel(){
  idx++;
  if(idx > carrossel.length - 1){
    idx = 0;
  }
  carrosseis.style.transform = `translateX(${-idx * 854}px)`;
  console.log(carrossel.length)
}
setInterval(startCarrossel,3800);