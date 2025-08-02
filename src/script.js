

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
  const icon = item.querySelector('.faq-icon');

  questionBtn.addEventListener('click', () => {
    const isOpen = answer.style.height !== '0px' && answer.style.height !== '';

    // Close all answers
    faqItems.forEach(i => {
      const otherAnswer = i.querySelector('.faq-answer');
      const otherIcon = i.querySelector('.faq-icon');
      otherAnswer.style.height = '0px';
      otherIcon.style.transform = 'rotate(0deg)';
    });

    if (!isOpen) {
      answer.style.height = answer.scrollHeight + 'px';  // Auto height based on content
      icon.style.transform = 'rotate(45deg)';
    } else {
      answer.style.height = '0px';
      icon.style.transform = 'rotate(0deg)';
    }
  });
});
