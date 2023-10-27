const createSection = (sectionData, imageFirst) => { 
    const section = document.createElement("section");
    section.classList.add("info-section");

    const text = document.createElement("div");

    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.innerText = sectionData.title;
    header.appendChild(h1);
    text.appendChild(header);

    const p = document.createElement("p");
    p.innerText = sectionData.text;
    text.appendChild(p);

    const image = document.createElement("img");
    image.src = sectionData.image;
    image.alt = sectionData.alt;

    if (imageFirst) {
        section.appendChild(text);
        section.appendChild(image);
    } else {
        text.classList.add("block-left");
        section.appendChild(image);
        section.appendChild(text);
    }

    return section;
};

const setupMenu = (langSelector) => {
    let menuOpen = false;
    const menuCover = document.getElementById("menu-cover");
    const menu = document.getElementById("menu");
    const menuButton = document.getElementById("menu-button");

    menuButton.onclick = () => {
        menuOpen = !menuOpen;
        
        if (menuOpen) {
            menu.style.visibility = "visible";
            menuCover.style.visibility = "visible";

            menu.classList.add("menu-showing");
            menuButton.classList.add("menu-showing");
        } else { 
            menu.style.visibility = "hidden";
            menuCover.style.visibility = "hidden";

            menu.classList.remove("menu-showing");
            menuButton.classList.remove("menu-showing");
            if (langSelector.open) {
                langSelector.selector.click();
            }
        }
    }
};

const langSelector = {
    selector: document.getElementById("lang-selector"),
    optionsContainer: document.getElementById("lang-options"),
    options: document.querySelectorAll(".lang-selector__option"),
    triangle: document.getElementById("lang-triangle"),
    selectedText: document.getElementById("lang-selected"),
    selected: "ru",
    open: false
};

const setLang = (selector) => {
    selector.selectedText.innerText = 
        selector.selected.toUpperCase();

    selector.selector.onclick = () => {
        selector.open = !selector.open;
        if (selector.open) {
            selector.selector.classList.add("lang-selector__open");
            selector.optionsContainer.classList.add("lang-options__open");
            selector.triangle.classList.add("triangle-up");
        } else {
            selector.selector.classList.remove("lang-selector__open");
            selector.optionsContainer.classList.remove("lang-options__open");
            selector.triangle.classList.remove("triangle-up");
        }
    };

    selector.options.forEach(opt => opt.onclick = () => {
        selector.selected = opt.innerText.trim().toLowerCase();
        selector.selectedText.innerText = 
            selector.selected.toUpperCase();
        selector.selector.click();
        loadSite(selector);
    });
};

const loadSite = (langSelector) => {
    let lang = langSelector.selected;

    document.getElementById("page-title").innerText = textMain.title[lang];
    document.getElementById("page-header").innerText = textMain.header[lang];

    const sections = textMain.sections[lang];
    const sectionsContainer = document.getElementById("info-sections");
    while (sectionsContainer.firstChild) {
        sectionsContainer.removeChild(sectionsContainer.lastChild);
    }

    for (let i = 0; i < sections.length; i++) {
        const section = createSection(sections[i]);
        sectionsContainer.appendChild(section);
    }
};

setLang(langSelector);
setupMenu(langSelector);
loadSite(langSelector);

