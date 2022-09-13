export default function loadHome(coverImage) {
    const mainContent = document.querySelector('.main-content');
    
    mainContent.innerHTML = `
        <div class=heading-container>
            <h1>Soul Food!</h1>
            <h2>The best soul found around!</h2>
        </div>
        <div class='cover-container'>
            <img src='${coverImage}'>
        </div>
        <div class='hours-container'>
            <p>Hours</p>
        </div>
        <div class='location-container'>
            <p>Location</p>
        </div>
    `;
    
    // const cover = document.createElement('img');
    //     cover.src = coverImage;
    //     mainContent.appendChild(cover);
}

console.log('I get called from home.js')