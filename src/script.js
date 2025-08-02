

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

// cards

// gsap.registerPlugin(ScrollTrigger);

// const cards = document.querySelectorAll(".project-card");

// cards.forEach((card, index) => {
//   if (index === 0) return; // Skip first card – already in place

//   gsap.fromTo(card,
//     { yPercent: 100 },
//     {
//       yPercent: 0,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".projects-wrapper",
//         start: () => `top+=${window.innerHeight * (index - 1)} top`,
//         end: () => `top+=${window.innerHeight * index} top`,
//         scrub: true
//       }
//     }
//   );
// });





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

       gsap.registerPlugin(ScrollTrigger)

        const splitTypes = document.querySelectorAll('.reveal-type')

        splitTypes.forEach((char,i) => {

            const text = new SplitType(char, { types: 'chars'})

            console.log.apply(text);
                    })
            