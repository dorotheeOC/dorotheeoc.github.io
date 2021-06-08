let a = document.querySelectorAll('a.a-link');
const floatNav = document.querySelector('nav.float-nav');

let i = 1; 
a.forEach(element => element.setAttribute('href', 'achievement.html?id=' + i++));

let y = 0;
window.addEventListener('scroll', () => {
  y = window.scrollY;
  if (y > 500) {
    floatNav.style.display = 'inline-block';
    goToTop();    
  } else {
    floatNav.style.display = 'none'
  }
});

const goToTop = () => {
  const topBtn = document.getElementById('top-button');
  topBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const scroll = setInterval(() => {
      while (y > 0) {
        y--;
        window.scroll(0, y);
        break;
      }
    }, 10)
    setTimeout(() => {
      clearInterval(scroll)
    }, 1000)
  })
}