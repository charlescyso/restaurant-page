// import styles
import './styles/reset.css';
import './styles/style.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

// import scripts
import loadLayout from './scripts/layout.js';
import loadHome from './scripts/home.js';
import loadMenu from './scripts/menu.js';
import loadContact from './scripts/contact.js';

// import images
import coverImage from './images/home-cover.jpeg';
import menuItemOne from './images/menu-item1.jpeg';
import menuItemTwo from './images/menu-item2.jpeg';
import menuItemThree from './images/menu-item3.jpeg';
import menuItemFour from './images/menu-item4.jpeg';

// load nav bar and home page
loadLayout();
loadHome(coverImage);


// events
document.querySelector('.home-nav').addEventListener('click', () => {
    loadHome(coverImage);
    changeActivePage(homeNav);
});

document.querySelector('.menu-nav').addEventListener('click', () => {
    loadMenu(menuItemOne, menuItemTwo, menuItemThree, menuItemFour);
    changeActivePage(menuNav);
    
});

document.querySelector('.contact-nav').addEventListener('click', () => {
    loadContact();
    changeActivePage(contactNav);
});

// global variables
const homeNav = document.querySelector('.home-nav');
const menuNav = document.querySelector('.menu-nav');
const contactNav = document.querySelector('.contact-nav');

// change active page function
const changeActivePage = (e) => {
    homeNav.classList.remove('active-page');
    menuNav.classList.remove('active-page');
    contactNav.classList.remove('active-page');

    e.classList.add('active-page');
}