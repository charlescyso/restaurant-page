export default function loadContact() {
    const mainContent = document.querySelector('.main-content');

    mainContent.innerHTML = `
        <div class='heading-container'>
            <h1>Soul Food!</h1>
            <h2>Contact</h2>
        </div>
        <div class='form-container'>
            <form>
            <div class='form-group'>
                <label for='email'>Email address:</label>
                <input type='text' id='email'></input>
            </div>
            <div class='form-group'>
                <label for='message'>Message:</label>
                <input type='textarea' id='message'></input>
            </div>
                <input type='submit'>
            </form>
        </div>
    `;
};

console.log('I get called from contact.js');