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