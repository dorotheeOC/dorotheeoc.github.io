import Ux from './ux';
import Api from './api'
import Scroll from './scroll'
import MobileMenu from './mobile-menu'

new Ux;
new Api;
new Scroll;
new MobileMenu;
// new Slider;


if(!!window) {
    const copyright = document.querySelector('.copyright > .year');
    const date = new Date(Date.now()).getUTCFullYear();

    if(!!copyright && date) {
        copyright.innerHTML = date;
    }
}
