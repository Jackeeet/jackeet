function switchLanguage() {
    const text = langButton.innerText;
    let page = window.location.href.substring(window.location.href.lastIndexOf('/'));

    if (text === 'EN') {
        langButton.innerText = 'RU';
        home.href = 'en/index.html';
        projects.href = 'en/projects.html';
        window.location.href = 'en' + page;

    } 
    else {
        langButton.innerText = 'RU';
        home.href = '../index.html';
        projects.href = '../projects.html';
        window.location.href = '..' + page;
    }
}

const home = document.getElementById('home');
const projects = document.getElementById('projects');
const langButton = document.getElementById('lang');
langButton.onclick = switchLanguage;
