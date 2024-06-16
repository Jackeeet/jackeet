const _main = {
    "title": {
        "en": "Hello.",
        "ru": "Здравствуйте."
    }, 
    "header": {
        "en": "My name is Polina Grabar. I am a programmer.\n\nI write programs of varying levels of complexity and usefulness. I'm also willing to discuss birds (anytime).",
        "ru": "Меня зовут Полина Грабар. Я программист.\n\nПишу программы разной степени сложности и полезности и параллельно смотрю на птиц."
    },
    "sections": {
        "en" : [
            {
                "kind": "text",
                "title": "Writing programs",
                "text": "Right now I mainly use Python with NumPy, pandas, Keras and all that kind of stuff. I'm quite familiar with web development (JavaScript/Typescript/React), the .NET platform and more exotic things like Haskell.\n\nI'm a big fan of programming languages and anything related to them: parsers, translators, compilers, etc. For my bachelor thesis, I've created a video content analysis system that allows users to create their own specific event detection rules using a custom DSL.\n\nI also have some professional experience working with PHP/Laravel/PostgreSQL/JavaScript. The majority of the tasks I was responsible for had to do either with the backend or with data visualisation.",
                "image": "img/va.png",
                "alt": ""
            },
            {
                "kind": "text",
                "title": "Introverted, but willing to discuss birds",
                "text": "I've been doing birdwatching since 2017, and so far I've seen 164 species of birds. That's 1.51% of total bird species from around the world (!!!)\n\nI can identify birds on pictures (either photos or drawings) or based on a description. As I'm not a professional ornithologist, I can't guarantee absolute accuracy, but I'm quite familiar with lots of birds. For identification help and interesting bird facts, contact me on Telegram.\n\n Sometimes I take pictures of birds through binoculars. Most of the photos end up being extremely blurry, but I think that's the appeal of taking photos this way.",
                "image": "img/sparrows.jpg",
                "alt": "Two tree sparrows on a pipe"
            }
        ],
        "ru": [
            {
                "kind": "text",
                "title": "Пишу программы",
                "text": "Сейчас в основном программирую на Python и пользуюсь NumPy, pandas, Keras и вот этим всем. Ориентируюсь в веб-разработке (JavaScript/Typescript/React), платформе .NET и эзотерике вроде Haskell. \n\n В целом очень люблю разные языки программирования и связанные с ними вещи: парсеры, трансляторы, компиляторы и т. п. В качестве дипломной работы бакалавра я написала систему видеоаналитики, настраиваемую под разные задачи и предметные области с помощью встроенного языка задания правил детекции событий. \n\n Также у меня есть профессиональный опыт работы на стеке PHP/Laravel/PostgreSQL/JavaScript. Мои задачи были связаны по большей части с бэкендом и визуализацией данных.",
                "image": "img/va.png",
                "alt": ""
            },
            {
                "kind": "text",
                "title": "Смотрю на птиц",
                "text": "С 2017 года занимаюсь бёрдингом (любительской орнитологией). Сейчас в моем списке 164 вида птиц. Это 1,51% от общего количества видов птиц на планете (!!!)\n\n Определяю птиц по фотографии, рисунку или описанию. Не гарантирую абсолютную точность, т. к. я все-таки не профессиональный орнитолог, но многих птиц знаю довольно хорошо. За помощью в определении птиц и интересными фактами обращайтесь в Telegram.\n\n Иногда я фотографирую птиц через бинокль. Фотографии по большей части получаются крайне размытыми, но в этом вся суть.",
                "image": "img/sparrows.jpg",
                "alt": "Два полевых воробья на трубе"
            }
        ]
    }
};


const _contacts = {
    "title": {
        "en": "Contacts",
        "ru": "Контакты"
    },
    "header": {
        "en": "You can reach me on Telegram: t.me/Jackeet\nI do my best to respond as soon as possible, especially during workdays.\n\nAlternatively, leave a message using the form below and I'll get back to you through email.",
        "ru": "Со мной можно связаться через Telegram: t.me/Jackeet\nЯ стараюсь отвечать на сообщения как можно быстрее, особенно в будние дни."
    },
    "sections": {
        "en" : [
            {
                "kind": "form",
            },
            {
                "kind": "text",
                "title": "Other contacts and links",
                "text": "GitHub: https://github.com/Jackeeet\n\neBird: Jackeet\n\nSteam: thejackeet",
            },
        ],
        "ru": [
            {
                "kind": "form",
            },
            {
                "kind": "text",
                "title": "Другие контакты/ссылки",
                "text": "GitHub: https://github.com/Jackeeet\n\neBird: Jackeet\n\nSteam: thejackeet",
            },
        ]
    }
}

const _about = {
    "title": {
        "en": "About this site",
        "ru": "О сайте"
    },
    "header": {
        "en": "This website is built using pure HTML, CSS and JavaScript, and it's hosted with GitHub Pages.\n\nYou can find the project repo at https://github.com/Jackeeet/jackeet",
        "ru": "Этот сайт написан на чистых HTML, CSS и JavaScript и хостится с помощью GitHub Pages.\n\nРепозиторий проекта можно найти здесь: https://github.com/Jackeeet/jackeet"
    },
    "sections": {
        "en" : [
            {
                "kind": "text",
                "title": "Why can't I click on any of the links in the text?",
                "text": "The site works like an extremely basic framework: it takes all the text from a single file and fills out page templates with it. Handling things like hyperlinks requires a little bit of extra work, and I just haven't gotten to it yet. ",
            },
            {
                "kind": "text",
                "title": "Why build your own \"framework\" when there are premade ones?",
                "text": "Simply because it's fun and I had some free time. Also, this site really isn't complex enough to warrant using a proper framework.",
            },
            {
                "kind": "text",
                "title": "How do you calculate bird species percentage on the home page?",
                "text": "I take the total amount of bird species from eBird (https://ebird.org/region/world?yr=all) and manually recalculate the percentage whenever I encounter a new bird or whenever eBird updates the species total.",
            },
        ],
        "ru": [
            {
                "kind": "text",
                "title": "Почему ссылки в тексте не работают?",
                "text": "Этот сайт устроен, как крайне примитивный фреймворк: весь текст считывается из файла и распределяется по шаблонам страниц. Обработка ссылок пока что просто не реализована.",
            },
            {
                "kind": "text",
                "title": "Зачем переизобретать очередной \"фреймворк\", когда есть готовые решения?",
                "text": "Во-первых, это просто прикольно. Во-вторых, этот сайт не настолько сложный, чтобы был смысл использовать настоящий фреймворк.",
            },
            {
                "kind": "text",
                "title": "Как рассчитывается процент от общего количества видов птиц на главной странице?",
                "text": "В качестве общего количества видов птиц я беру данные с eBird (https://ebird.org/region/world?yr=all), а процентное соотношение пересчитываю руками, когда нахожу новую птицу или когда eBird обновляет данные.",
            },
        ]
    }
}

const links = {
    "main": {
        "url": "index.html",
        "title": {
            "en": "Home",
            "ru": "Главная",
        },
        "data": _main
    },
    "contacts": {
        "url": "contacts.html",
        "title": {
            "en": "Contacts",
            "ru": "Контакты",
        },
        "data": _contacts
    },
    "about": {
        "url": "about.html",
        "title": {
            "en": "About this site",
            "ru": "О сайте",
        },
        "data": _about
    },
};

const lastUpdated = {
    "date": "16.06.2024",
    "info": {
        "en": "Updated on",
        "ru": "Обновлено"
    }
}

