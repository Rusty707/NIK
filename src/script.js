

  // NavBar



function toggleMenu() {
    const menu = document.getElementById("nav-dialog");
    const btn = document.getElementById("burger-btn");
    const lines = btn.querySelectorAll(".line");

    const isOpen = menu.classList.contains("translate-y-0");

    // Toggle mobile menu animation
    menu.classList.toggle("translate-y-0");
    menu.classList.toggle("opacity-100");
    menu.classList.toggle("-translate-y-full");
    menu.classList.toggle("opacity-0");

    // Animate burger to cross
    if (!isOpen) {
      lines[0].classList.add("rotate-45", "translate-y-[6px]", "bg-primary");
      lines[1].classList.add("-rotate-45", "-translate-y-[6px]", "bg-primary");
    } else {
      lines[0].classList.remove("rotate-45", "translate-y-[6px]", "bg-primary");
      lines[1].classList.remove("-rotate-45", "-translate-y-[6px]", "bg-primary");
    }
  }


  // Nav bar Hide and Show

   let lastScrollY = window.scrollY;
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling Down — Hide Navbar
      nav.classList.add('nav-hidden');
    } else {
      // Scrolling Up — Show Navbar
      nav.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
  });









// image hover reveal

document.addEventListener('DOMContentLoaded', () => {

            // Select all the necessary elements from the DOM
            const items = document.querySelectorAll('.hover-reveal-item');
            const imageContainer = document.querySelector('.hover-image-container');
            const image = document.querySelector('.hover-image');

            // This function updates the image container's position to follow the mouse
            const moveContainer = (e) => {
                const containerX = e.clientX;
                const containerY = e.clientY;
                gsap.to(imageContainer, { 
                    x: containerX, 
                    y: containerY, 
                    duration: 0.8, 
                    ease: "power3.out" 
                });
            };

            // This function creates a subtle parallax effect on the image itself
            const moveImage = (e) => {
                const imageX = gsap.utils.mapRange(0, window.innerWidth, -50, 50, e.clientX);
                const imageY = gsap.utils.mapRange(0, window.innerHeight, -50, 50, e.clientY);
                gsap.to(image, { 
                    x: imageX, 
                    y: imageY, 
                    duration: 1.2, 
                    ease: "power3.out" 
                });
            };

            // This function shows the image
            const showImage = (e) => {
                // Get the image URL from the hovered item's data-attribute
                const imageUrl = e.target.dataset.image;
                // Set the background image
                image.style.backgroundImage = `url(${imageUrl})`;
                // Animate the container and image to appear
                gsap.to(imageContainer, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
                gsap.to(image, { scale: 1, duration: 0.6, ease: 'power3.out' });
            }

            // This function hides the image
            const hideImage = () => {
                // Animate the container and image to disappear
                gsap.to(imageContainer, { opacity: 0, scale: 0.8, duration: 0.4, ease: 'power3.out' });
                gsap.to(image, { scale: 1.2, duration: 0.6, ease: 'power3.out' });
            };

            // Add all the event listeners
            items.forEach(item => {
                item.addEventListener('mouseenter', showImage);
                item.addEventListener('mouseleave', hideImage);
            });
            
            window.addEventListener('mousemove', (e) => {
                moveContainer(e);
                moveImage(e);
            });
        });



// Gsap heading animation

// custom cursor

const cursor = document.getElementById('cursor');
    const hoverables = document.querySelectorAll('.hoverable');

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const speed = 0.2;

    function animate() {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX - 60;  // Center the 60px circle
      mouseY = e.clientY - 60;
    });

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 2, duration: 0.3, ease: "power2.out" });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    animate();

    // FAQ

   const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon img') || item.querySelector('img'); // fallback if no faq-icon class

  questionBtn.addEventListener('click', () => {
    const isOpen = answer.style.height !== '0px' && answer.style.height !== '';

    // Close all FAQs first (optional)
    faqItems.forEach(i => {
      i.querySelector('.faq-answer').style.height = '0';
      i.querySelector('img').style.transform = 'rotate(0deg)';
    });

    if (!isOpen) {
      // Open the clicked FAQ
      const answerHeight = answer.scrollHeight;
      answer.style.height = `${answerHeight}px`;
      icon.style.transform = 'rotate(45deg)';
    }
  });
});


// Gsap scroll

 gsap.registerPlugin(ScrollTrigger);

  function initHorizontalScroll() {
    const track = document.querySelector(".steps-track");
    const section = document.querySelector(".scroll-horizontal-section");
    if (!track || !section) return;

    const trackWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = trackWidth - viewportWidth;

    // Only animate if content is wider than screen
    if (scrollDistance <= 0) return;

    ScrollTrigger.getAll().forEach(t => t.kill());

    gsap.to(track, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "bottom bottom",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });
  }

  window.addEventListener("load", initHorizontalScroll);
  window.addEventListener("resize", initHorizontalScroll);


  // Split text gsap

gsap.registerPlugin(SplitText, ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM Loaded');
  
  const triggerEl = document.querySelector('.split-trigger');
  const splitEl = document.querySelector('.split-type');

  console.log('Trigger Element:', triggerEl);
  console.log('Split Element:', splitEl);

ScrollTrigger.create({
  trigger: ".split-trigger",
  start: "top bottom",  // <--- Triggers when section touches bottom of viewport
  once: true,
  markers: true,
  onEnter: () => {
    console.log('ScrollTrigger Fired');
    const split = new SplitText(".split-type", { type: "chars, words" });

    gsap.from(split.words, {
      delay: 0.5,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.out"
    });
  }
});

