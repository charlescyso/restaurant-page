// import scripts
import loadLayout from './scripts/layout.js'
import loadHome from './scripts/home.js'
import loadMenu from './scripts/menu.js'
import loadContact from './scripts/contact.js'

// import images
import coverImage from './images/home-cover.jpeg'
import menuItemOne from './images/menu-item1.jpeg'
import menuItemTwo from './images/menu-item2.jpeg'
import menuItemThree from './images/menu-item3.jpeg'
import menuItemFour from './images/menu-item4.jpeg'

// load nav bar and home page
loadLayout()
loadHome(coverImage)

document.querySelector('.home-nav').addEventListener('click', () => {
    loadHome(coverImage)
})

// document.querySelector('.menu-nav').addEventListener('click', () => {
//     loadMenu(menuItemOne, menuItemTwo, menuItemThree, menuItemFour)
// })

// document.querySelector('.contact-nav').addEventListener('click', () => {
//     loadContact()
// })