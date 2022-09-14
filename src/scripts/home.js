export default function loadHome(coverImage) {
    const mainContent = document.querySelector('.main-content');
    
    mainContent.innerHTML = `
        <div class='heading-container'>
            <h1>Soul Food!</h1>
            <h2>The best soul food found around!</h2>
        </div>
        <div class='cover-container'>
            <img src='${coverImage}'>
        </div>
        <div class='info-container'>
            <div class='hours-container'>
                <h3>Hours</h3>
                <p>Weekdays: 9:00 a.m. - 9:00 p.m.</p>
                <p>Weekends: 10:00 a.m. - 8:00 p.m.</p>
            </div>
            <div class='location-container'>
                <h3>Location</h3>
                <p>2415 Yannis St - Unit 504</p>
                <p>Wallabee, BC V3T2W1</p>
            </div>
        </div>
        <div class='footer-container'>Made by Charles So</div>
    `;
};

console.log('I get called from home.js');