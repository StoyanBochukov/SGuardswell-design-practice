  

  var splide = new Splide( '#slider1', {
    direction: 'ltr',
    direction: 'rtl',
    type :'loop',
    speed: 1500,
    classes: {
      pagination: 'splide__pagination pagination-disabled',
      page      : 'splide__pagination__page',
    }, 
  } );
splide.mount();



  var splide = new Splide( '#slider2', {
    direction: 'ltr',
    direction: 'rtl',
    perPage: 5,
    speed: 1200,
    classes: {
      pagination: 'splide__pagination pagination-disabled',
      page      : 'splide__pagination__page',
    }, 
    breakpoints: {
      1313:{
        perPage: 4,
      },
      1059:{
        perPage: 3
      },
      850:{
        perPage: 2,
      },
      550:{
        perPage: 1
      }
    }
  } );
  
  splide.mount();

 const navToggle = document.querySelector('.nav-toggle');
 const navLinks = document.querySelectorAll('.nav-link');
 const logo = document.querySelector('.logo-mobile');
 const navbar = document.querySelector('header')

navToggle.addEventListener('click', () => {
    const visible = navbar.getAttribute('data-visible');
    if(visible === "false"){
      navbar.setAttribute('data-visible', true);
      document.body.classList.toggle('nav-open');
      logo.classList.add('logo-mobile-hide');
      logo.classList.remove('logo-mobile-show');
    }
    else{
      navbar.setAttribute('data-visible', false);
      logo.classList.remove('logo-mobile-hide');
      logo.classList.add('logo-mobile-show');
      document.body.classList.remove('nav-open');
    }
    
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.setAttribute('data-visible', false);
        document.body.classList.remove('nav-open');
        logo.classList.remove('logo-mobile-hide');
        logo.classList.add('logo-mobile-show');
    })
})
