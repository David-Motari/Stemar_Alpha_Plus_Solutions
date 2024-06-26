//Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    autoplay: {
      delay: 2500, // Delay between slides in milliseconds (5 seconds in this case)
  },
  effect: 'coverflow', // Use the "coverflow" effect
  coverflowEffect: {
      rotate: 20, // Set the rotation angle during the coverflow effect
      slideShadows: false, // Disable slide shadows
  },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Nav open close

const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navOpenBtn = body.querySelector('.navOpen-btn'),
      navCloseBtn = navMenu.querySelector('.navClose-btn');

if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
        navMenu.classList.add("open");
        body.style.overflowY = "hidden";
    })
}
if(navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove('open');
        body.style.overflowY = 'scroll';
    })
}

//change header bg color
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if(scrollY > 5){
        document.querySelector("header").classList.add("header-active");
    } else {
        document.querySelector("header").classList.remove("header-active")
    }

    //scroll up button
    const scrollUpBtn = ducument.querySelector('.scrollUp-btn');

    if(scrollY > 250) {
        scrollUpBtn.classList.add('scrollUpBtn-active')
    } else {
        scrollUpBtn.classList.remove('scrollUpBtn-active')
    }
    // Nav link indicator
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 100;

        let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
        if(scrollY > sectionTop && scrollY <= (sectionTop + sectionHeight)) {
            navId.classList.add("active-navlink")
        } else {
            navId.classList.remove("active-navlink")
        }

        navId.addEventListener("click", () => {
            navMenu.classList.remove("open");
            body.style.overflowY = "scroll";
        });
    });
});

//scroll reveal animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .services, 
.logo-content, .contact_box, .team-container, .footer-content, .footer-links, .social-icons, .footer-title`, {interval:100,})

sr.reveal(`.about-imageContent, .menu-items`, {origin: 'left'})
sr.reveal(`.about-details, .time-table`, {origin: 'right'})


/**Forms */

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Reset error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
  
    // Get form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
  
    // Validate form fields
    if (name === '') {
      document.getElementById('name-error').textContent = 'Please enter your name';
      return;
    }
  
    if (email === '') {
      document.getElementById('email-error').textContent = 'Please enter your email';
      return;
    }
  
    if (!isValidEmail(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email';
      return;
    }
  
    if (message === '') {
      document.getElementById('message-error').textContent = 'Please enter a message';
      return;
    }
  
    // Form is valid, do something with the data (e.g., submit to server)
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Reset the form
    document.getElementById('contact-form').reset();
  });
  
  function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  
