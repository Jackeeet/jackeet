const clearElement = (el) => {
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
};

const prepareText = (text) => {};

const createSection = (sectionData, imageFirst) => { 
    const section = document.createElement("section");
    section.classList.add("info-section");

    const text = document.createElement("div");

    const header = document.createElement("header");
    const h2 = document.createElement("h2");
    h2.innerText = sectionData.title;
    header.appendChild(h2);
    text.appendChild(header);

    const p = document.createElement("p");
    p.innerText = sectionData.text;
    text.appendChild(p);

    let image;
    // let content;
    if (sectionData.image) {
        image = document.createElement("div");
        image.classList.add("info-section__image-wrapper");

        content = document.createElement("img");
        content.classList.add("info-section__image");
        content.src = sectionData.image;
        content.alt = sectionData.alt;
        image.appendChild(content);

        if (imageFirst) {
            image.classList.add("block-left");
            // content.classList.add("block-left");
            section.classList.add("info-mobile-override");
            section.appendChild(image);
            // section.appendChild(content);
        }
    }

    section.appendChild(text);

    // if (sectionData.image && !imageFirst) {
    //     text.classList.add("block-left");
    //     section.appendChild(content);
    // }
    if (sectionData.image && !imageFirst) {
        text.classList.add("block-left");
        section.appendChild(image);
    }

    return section;
};

const setupMenu = (page, langSelector) => {
    let menuOpen = false;
    const lang = langSelector.selected;
    const menuCover = document.getElementById("menu-cover");
    const menu = document.getElementById("menu");
    const menuButton = document.getElementById("menu-button");

    const linkContainer = document.getElementById("menu-links");
    clearElement(linkContainer);

    for (let pageKey of Object.keys(links)) {
        link = links[pageKey];
        a = document.createElement("a");
        a.href = link.url;
        a.classList.add("menu__link");
        if (pageKey === page) {
            a.classList.add("selected");
        } 
        a.innerText = link.title[lang];
        linkContainer.appendChild(a);
    }

    const updatedDateContainer = document.getElementById("last-updated");
    updatedDateContainer.innerText = 
        lastUpdated.info[lang] + " " + lastUpdated.date 

    menuButton.onclick = () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            menu.style.visibility = "visible";
            menuCover.style.visibility = "visible";

            menu.classList.add("menu-showing");
            menuButton.classList.add("menu-showing");
            langSelector.selectorContainer.classList.add("menu-showing");
        } else {
            menu.style.visibility = "hidden";
            menuCover.style.visibility = "hidden";

            menu.classList.remove("menu-showing");
            menuButton.classList.remove("menu-showing");
            langSelector.selectorContainer.classList.remove("menu-showing");
            if (langSelector.open) {
                langSelector.selector.click();
            }
        }
    }
};

const langSelector = {
    selector: document.getElementById("lang-selector"),
    selectorContainer: document.getElementById("lang-selector-wrapper"),
    optionsContainer: document.getElementById("lang-options"),
    options: document.querySelectorAll(".lang-selector__option"),
    triangle: document.getElementById("lang-triangle"),
    selectedText: document.getElementById("lang-selected"),
    selected: localStorage.getItem("lang") ?? "ru",
    open: false
};

const setupLang = (page, selector) => {
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
        const lang = opt.innerText.trim().toLowerCase();
        localStorage.setItem("lang", lang);
        selector.selected = lang;
        selector.selectedText.innerText = lang.toUpperCase();
        selector.selector.click();
        setupMenu(page, selector);
        loadPageData(page, selector);
    });
};

const loadPageData = (page, langSelector) => {
    const data = links[page].data;
    let lang = langSelector.selected;

    document.getElementById("page-title").innerText = data.title[lang];

    if (data.header) {
        document.getElementById("page-header").innerText = 
            data.header[lang];
    }

    if (!data.sections) {
        return;
    }

    const sections = data.sections[lang];
    const sectionsContainer = document.getElementById("info-sections");
    clearElement(sectionsContainer);
    for (let i = 0; i < sections.length; i++) {
        const imageFirst = i % 2 !== 0;
        const section = createSection(sections[i], imageFirst);
        sectionsContainer.appendChild(section);
    }
};

setupLang(page, langSelector);
setupMenu(page, langSelector);
loadPageData(page, langSelector);

