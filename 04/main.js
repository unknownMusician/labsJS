import { loadCorrectHTML } from "./router.js";
import { checkCartIcon } from "./cart.js";
import { db } from "./db.js";
import { cart } from "./pages.js";

// todo:
// - hide sidebar
// - add pizzas to db
// - localStorage
// - overlook all the site
// - cart page
//      - regex inputs
// - error/success page

function parallax() {
    if (document.querySelector(".section1 .background") == null) { return; }
    document.querySelector(".section1 .background").style.transform = `translateY(${-250 + window.scrollY / 4}px) rotateZ(7deg)`;
    window.addEventListener('scroll', e => {
        if (document.querySelector(".section1 .background") == null) { return; }
        document.querySelector(".section1 .background").style.transform = `translateY(${-250 + window.scrollY / 4}px) rotateZ(7deg)`;
    });
}

function sidebar() {
    document.getElementById("header-menu-button").addEventListener('click', (e) => {
        let sidebar = document.querySelector("#sidebar");
        sidebar.className = sidebar.className == "active" ? "" : "active";
    });

    document.getElementById("redirect-main").addEventListener('click', (e) => { redirect("") });
    document.getElementById("redirect-catalog").addEventListener('click', (e) => { redirect("catalog") });
    document.getElementById("redirect-action").addEventListener('click', (e) => { redirect("action") });
}

function sales() {
    let sales = document.querySelector(".sales");
    if (sales == null) { return; }
    let html = ``;
    for (let i = 0; i < db.actions.length; i++) {
        let action = db.actions[i];
        html += `
    <div class="sale" style="background-color: ${action.color};">
        <div class="image" style="background: url(${action.image}) 100% 100% no-repeat; background-size: cover;"></div>
        <div class="text-container">
            <h2>${action.name}</h2>
            <h3>${action.description}</h3>
        </div>
    </div>`;
    }
    sales.innerHTML = html;

    for (let i = 0; i < db.actions.length; i++) {
        sales.children[i].addEventListener('click', e => redirect(`action/${db.actions[i].url}`));
    }
}

function cartConnect() {
    document.getElementById("cart-button").addEventListener('click', (e) => {
        redirect("cart");
    });
}

export function redirect(hash) {
    window.location.hash = hash;
    onHashChange();
    console.log("redirect");
}

function enableLoader() {
    document.getElementsByTagName("main")[0].innerHTML = `
    <div class="loader-container">
    <img src="img/icons/loader.gif" alt="" />
    </div>
    `;
}

function disableLoader() {
    document.getElementsByTagName("main")[0].innerHTML = ``;
}

async function loadJSON() {
    enableLoader(); // todo: recreate with real db
    let response = await fetch("https://my-json-server.typicode.com/unknownMusician/labsJS/db");

    let json = await response.json();
    console.log(json);
    globalObj.db = json;

    disableLoader();
    afterJsonLoad();
}

function onHashChange() {
    loadJSON();
}

function afterJsonLoad() {
    window.scrollTo(0, 0);
    loadCorrectHTML(globalObj); // todo
    checkCartIcon(globalObj);
    sales();
    parallax();
}

export var globalObj = {
    db: {},
    localStorageInfo: []
};

(function start() {
    onHashChange();
    sidebar();
    cartConnect();
})()