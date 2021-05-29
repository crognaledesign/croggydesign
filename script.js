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
    targets: '.stagger',
    translateX: [-10, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(100),
    easing: 'easeOutExpo'
})




 /*  anime({
  targets: '.arrow',
  keyframes: [
    {translateX: 10},
    {translateX: 0},
  ],
  duration: 2000,
  easing: 'easeInOutQuad',
  loop: true
}) */


var buttonEl = document.querySelector('.arrow');

function animateButton(duration) {
  anime.remove('.arrow');
  anime({
    targets: '.arrow',
    keyframes: [
      {translateX:10},
      {translateX:0},
    ],
    duration: 2000,
    easing:'easeInOutQuad',
    loop: true
  });
}

function enterButton() { anime({
    targets: '.arrow',
    keyframes: [
      {translateX:10},
      {translateX:0},
    ],
    duration: 2000,
    easing:'easeInOutQuad',
    loop: false
  });};

  function leaveButton() { anime({
    targets: '.arrow',
    keyframes: [
      {translateX:0},
    ],
    duration: 2000,
    easing:'easeInOutQuad',
    loop:false
  });};


buttonEl.addEventListener('mouseenter', enterButton, false);
buttonEl.addEventListener('mouseleave', leaveButton, false);