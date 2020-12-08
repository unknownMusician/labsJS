import { loadCorrectHTML } from "./router.js";
import { checkCartIcon } from "./cart.js";
import { generateStatus } from "./pages.js";

// todo:
// - add pizzas to db
// - overlook all the site

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

    document.getElementById("redirect-main").addEventListener('click', (e) => {
        redirect("");
        document.querySelector("#sidebar").className = "";
    });
    document.getElementById("redirect-catalog").addEventListener('click', (e) => {
        redirect("catalog");
        document.querySelector("#sidebar").className = "";
    });
    document.getElementById("redirect-action").addEventListener('click', (e) => {
        redirect("action");
        document.querySelector("#sidebar").className = "";
    });
}

function sales() {
    let sales = document.querySelector(".sales");
    if (sales == null) { return; }
    let html = ``;
    for (let i = 0; i < globalObj.db.actions.length; i++) {
        let action = globalObj.db.actions[i];
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

    for (let i = 0; i < globalObj.db.actions.length; i++) {
        sales.children[i].addEventListener('click', e => redirect(`action/${globalObj.db.actions[i].url}`));
    }

    var index = 1;

    globalObj.scrollId = setInterval(() => {
        sales.scroll(0, 560 * index);
        if (index < sales.children.length - 1) {
            index++;
        } else {
            index = 0;
        }
    }, 4000);
}

function mainButton() {
    document.querySelector("header div h1").addEventListener('click', e => redirect(""));
}

function cartConnect() {
    document.getElementById("cart-button").addEventListener('click', (e) => {
        redirect("cart");
    });
}

export function redirect(hash) {
    window.location.hash = hash;
    onHashChange();
}

export function saveToLocalStorage() {
    let jsonInfo = JSON.stringify(globalObj.localStorageInfo);
    localStorage.setItem("medievalPizzaInfo", jsonInfo);
}

export function loadFromLocalStorage() {
    let jsonInfo = localStorage.getItem("medievalPizzaInfo");
    if (jsonInfo == null) {
        globalObj.localStorageInfo = [];
        return;
    }
    globalObj.localStorageInfo = JSON.parse(jsonInfo);
}

function clearLocalStorage() {
    localStorage.removeItem("medievalPizzaInfo");
}

export async function sendToServer(order) {

    let response = await fetch(`https://my-json-server.typicode.com/unknownMusician/labsJS/productsCategories`, {
        method: 'POST',
        body: JSON.stringify(order)
    })
    generateStatus(response.ok);
    if (response.ok) {
        clearLocalStorage();
        let id = Object.values(await response.json())[0];
        console.log()
        document.querySelector(".status h1").innerHTML = `Sucess #${id}`
    }
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
    enableLoader();
    let response = await fetch("https://my-json-server.typicode.com/unknownMusician/labsJS/db");

    let json = await response.json();
    globalObj.db = json;

    disableLoader();
    afterJsonLoad();
}

function onHashChange() {
    loadJSON();
}

function afterJsonLoad() {
    loadFromLocalStorage();
    window.scrollTo(0, 0);
    clearInterval(globalObj.scrollId);
    loadCorrectHTML(globalObj);
    checkCartIcon(globalObj);
    sales();
    parallax();
}

export var globalObj = {
    db: {},
    localStorageInfo: [],
    scrollId: null
};

(function start() {
    onHashChange();
    sidebar();
    cartConnect();
    mainButton();
})()