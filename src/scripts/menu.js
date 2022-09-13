export default function loadMenu(menuItemOne, menuItemTwo, menuItemThree, menuItemFour) {
    const mainContent = document.querySelector('.main-content');

    mainContent.innerHTML = `
        <div class='heading-container'>
            <h1>Soul Food!</h1>
            <h2>Menu</h2>
        </div>
        <div class='menu-container'>
            <h3>Fried chicken with macaroni and cheese and collard greens</h3>
            <h3>$8.99</h3>
            <img src='${menuItemOne}'>
        </div>
        <div class='menu-container'>
            <h3>Fatback</h3>
            <h3>$3.99</h3>
            <img src='${menuItemTwo}'>
        </div>
        <div class='menu-container'>
            <h3>Sweet potato pie</h3>
            <h3>$3.99</h3>
            <img src='${menuItemThree}'>
        </div>
        <div class='menu-container'>
            <h3>Red velvet cake</h3>
            <h3>$3.99</h3>
            <img src='${menuItemFour}'>
        </div>
    `;
};

console.log('I get called from menu.js');