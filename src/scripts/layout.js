export default function loadLayout() {
    
    const content = document.querySelector('#content');
    
    // nav bar
    const navbar = document.createElement('div');
    navbar.classList.add('navbar-container');
    navbar.innerHTML = `
        <ul>
            <li class='home-nav'>home</li>
            <li class='menu-nav'>menu</li>
            <li class='about-nav'>about</li>
        </ul>
    `;
    content.appendChild(navbar);

    // main content
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content')
    content.appendChild(mainContent);
}

console.log('I get called from layout.js')