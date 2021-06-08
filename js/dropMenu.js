const toggle = document.querySelector('a.icon-toggle');
const close = document.querySelector('a.icon-close');
const socialNav = document.querySelector('header > ul.social')
toggle.addEventListener('click', (event) => {
  event.preventDefault();
  let navList = document.querySelector('ul.flex-nav');
  if(navList.className === 'flex-nav flex') {
    navList.classList.add('responsive-nav');
    socialNav.style.display = 'block'
  } else navList.className = 'flex-nav flex';
})
close.addEventListener('click', (event) => {
  event.preventDefault();
  let navList = document.querySelector('ul.flex-nav');
  navList.classList.remove('responsive-nav');
  socialNav.style.display ='none'
})