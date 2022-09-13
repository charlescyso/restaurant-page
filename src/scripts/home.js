export default function loadHome(coverImage) {
    const mainContent = document.querySelector('.main-content');
    
    mainContent.innerHTML = `
        <div class='heading-container'>
            <h1>Soul Food!</h1>
            <h2>The best soul found around!</h2>
        </div>
        <div class='cover-container'>
            <img src='${coverImage}'>
        </div>
        <div class='hours-container'>
            <h3>Hours</h3>
            <p>Weekdays: 9:00 a.m. - 9:00 p.m.</p>
            <p>Weekends: 10:00 a.m. - 8:00 p.m.</p>
        </div>
        <div class='location-container'>
            <h3>Location</h3>
            <p>504-2415 Yannis St</p>
        </div>
    `;
};

console.log('I get called from home.js');