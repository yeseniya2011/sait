const Bukket = {};

function Eseniya(name, price, link, image, articul){
    this.name = name;
    this.price = price;
    this.link = link;
    this.image = image;
    this.articul = articul;
};

function create (name, price, link, image, articul){
    Bukket[articul] = new Eseniya(
        name,
        price,
        link,
        image,
        articul
    );
}

create(
    "Палетка теней для век, 24 цвета",
    1278,
    "paletka.html",
    "./img/krasota/paletka/paletka.PNG",
    "64-jsUBtdjv"
);

create(
    "Милая мультяшная косметичка Kuromi Kt Cat Cinnamoroll",
    888,
    "kosmetichka.html",
    "./img/krasota/kosmrtichka/nabor.PNG",
    "xbe76-364"
);

create(
    "Пудра-хайлайтер, палитра с блестками, Алмазный высокоглянцевый бронзатор",
    375,
    "vinksis.html",
    "./img/krasota/blestashki/blestashkki.PNG",
    "46sgv-e745"
);

create(
    "Пластина для румян MAFFICK Little Odin",
    300,
    "sheese.html",
    "./img/krasota/sirnik/cheese.PNG",
    "sb-365"
);

create(
    "Свежий Фруктовый роликовый бальзам для губ",
    274,
    "osveshitel.html",
    "./img/krasota/osveshitel/osveshitel.PNG",
    "365-byr"
);

create(
    "12 видов цветов Подводка для глаз жидкая Водонепроницаемая",
    253,
    "podvodka.html",
    "./img/krasota/podvodka/podvodka.PNG",
    "xbd-74754"
);

create(
    "Миниатюрный Жидкий блеск для губ",
    365,
    "muhtar.html",
    "./img/krasota/pomada/yaUstaalaaaaaa.PNG",
    "g647m"
);

create(
    "Kawaii Sanriod аниме периферическая Mymelody Kuromi Kitty Cinnamoroll",
    461,
    "palochki.html",
    "./img/krasota/palochki/palochki.PNG",
    "366-Tvxy"
);

create(
    "Kawaii Подлинная Корица собака с большим ухом Baby Bottle",
    226,
    "malo.html",
    "./img/krasota/malo/raznaa.PNG",
    "47fbf-gsuv"
);

create(
    "спонж для макияжа, сухой и влажный спонж",
    153,
    "sponshik.html",
    "./img/krasota/sponsh/sponsh.PNG",
    "4fr6red"
);

create(
    "1 шт. кисти для макияжа Кошачий коготь Shap",
    184,
    "kist.html",
    "./img/krasota/kist/lapka.PNG",
    "7d-dhede"
);

create(
    "Sendo Крем для тела Лимонный пирог, 200 мл",
    285,
    "krem.html",
    "./img/krasota/sendo/sendo.PNG",
    "47bdyceef"
);

create(
    "Увлажнитель-Ароматизатор воздуха",
    1670,
    "uvlashnitel.html",
    "./img/deti/zaika/zaika.PNG",
    "375-ncscfVDw"
);

create(
    "Настольный органайзер W & G Kawaii",
    2598,
    "ohanaicer.html",
    "./img/deti/organaizer/organaizer.PNG",
    "xsbyceYce-47756"
);

create(
    "Коробка для салфеток под телевизор",
    375,
    "televisorik.html",
    "./img/deti/televisorika/televisor.PNG",
    "375sbve"
);

create(
    "Настольный органайзер W & G",
    3000,
    
)