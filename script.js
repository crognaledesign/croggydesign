 /* function runAnimtion() {
anime({
    targets: '.project1',
    translateX: [-100, 0], // from 100 to 250
    delay: 0,
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    loop: false
  });
}

 const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.3) {
          runAnimtion();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.3
    }
  );
  
  observer.observe(document.querySelector('.project1'));
*/


  anime({
    targets: '.Headercontent',
    translateX: [-10, 0], // from 100 to 250
    delay: 0,
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    loop: false
  });

  anime({
    targets: '.typevideo',
    translateX: [-10, 0], // from 100 to 250
    delay: 0,
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    loop: false
  });

anime({
    targets: '.stagger',
    translateX: [-10, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(100),
    easing: 'easeOutExpo'
})

anime({
  targets: '.logo',
  scale: [0,1],
  opacity: [0,1],
  duration: 1000,
  easing: 'easeOutExpo',
});






  /*anime({
  targets: '.arrow',
  keyframes: [
    {translateX: 10},
    {translateX: 0},
  ],
  duration: 2000,
  easing: 'easeInOutQuad',
  loop: true
}) */


/* var buttonEl = document.querySelector('.arrow');

function animateButton(translateX, duration, elasticity) {
  anime.remove(buttonEl);
  anime({
    targets: buttonEl,
    translateX: translateX,
    duration: duration,
    elasticity: elasticity
  });
}

function enterButton() { animateButton(10.0, 800, 1000) };
function leaveButton() { animateButton(1.0, 600, 0) };

buttonEl.addEventListener('mouseenter', enterButton, false);
buttonEl.addEventListener('mouseleave', leaveButton, false); */


/* let services = document.querySelectorAll('.selector');
services.forEach((service) => {
  service.addEventListener('mouseenter', (event) => {
    anime.remove(service.querySelector('.arrow'));
    anime({
      targets: service.querySelector('.arrow'),
      easing: 'easeOutExpo',
      translateX: 15,
      duration: 500,
    })
  })

  service.addEventListener('mouseleave', (event) => {
    anime.remove(service.querySelector('.arrow'));
    anime({
      targets: service.querySelector('.arrow'),
      easing: 'easeOutExpo',
      translateX: 0,
      duration: 500,
    })
  })
})
*/


