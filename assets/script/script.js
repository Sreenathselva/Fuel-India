// navbar
const navEl=document.querySelector('#navbar')
window.addEventListener('scroll' ,( ) =>{
if(window.scrollY >= 56){
  navEl.classList.add('navbar-scrolled');
}
else if(window.scrollY <=56){
  navEl.classList.remove('navbar-scrolled');
}
});

function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
    setActiveClass(event.target.parentElement);
  }
  
  function setActiveClass(element) {
    const navItems = document.querySelectorAll('.navUl li');
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
  }
  
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
    sections.forEach(section => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight / 2 &&
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight / 2
        ) {
            const id = section.getAttribute('id');
            const navItem = document.querySelector(`a[href="#${id}"]`).parentElement;
            setActiveClass(navItem);
        }
    });
  });


     // JavaScript to handle the slideshow
     
     document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.home-slide');
      let currentSlide = 0;

      const changeSlide = () => {
          slides.forEach(slide => slide.classList.remove('active'));
          slides[currentSlide].classList.add('active');
          currentSlide = (currentSlide + 1) % slides.length; 
      };

      setInterval(changeSlide, 5000);
  });



  document.addEventListener("DOMContentLoaded", function () {
    const typingText = "OUR CLIENTS";
    const typingElement = document.getElementById("typingEffect");
    let index = 0;

    function typeLetter() {
        if (index < typingText.length) {
            typingElement.textContent += typingText.charAt(index);
            index++;
            setTimeout(typeLetter, 150); // Adjust typing speed here
        } else {
            typingElement.classList.remove("typing"); // Remove blinking cursor after typing
        }
    }

    // Add typing effect when the user scrolls to the section
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    typingElement.textContent = ""; // Clear text
                    typingElement.classList.add("typing"); // Add cursor
                    typeLetter();
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    observer.observe(document.getElementById("our-clients"));
});



// OUR CLIENTS CAROUSEL //

$('.our-top').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay: true,
    nav: false,
    dots: false,
    slideBy:1,
    smartSpeed:800,
    autoplayTimeout: 3000,
    rtl:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:2,
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
      }
  }
  })

  $('.our-bot').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay: true,
    nav: false,
    dots: false,
    slideBy:1,
    smartSpeed:800,
    autoplayTimeout: 3000,
    rtl:false,
    responsiveClass:true,
    responsive:{
      0:{
          items:2,
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
      }
  }
  })