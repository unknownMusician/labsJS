import { createCard } from "./cards.js";
import * as pages from "./pages.js";

function parallax() {
    document.querySelector(".actions .background").style.transform = `translateY(${-250 + window.scrollY/4}px) rotateZ(7deg)`;
    window.addEventListener('scroll', e => {
        document.querySelector(".actions .background").style.transform = `translateY(${-250 + window.scrollY/4}px) rotateZ(7deg)`;
    });
}

function sidebar() {
    document.querySelectorAll(".menu-button").forEach(element => {
        element.addEventListener('click', (e) => {
            let sidebar = document.querySelector("#sidebar");
            sidebar.className = sidebar.className == "active" ? "" : "active";
        });
    });

    document.getElementById("redirect-main").addEventListener('click', (e) => { redirect("") });
    document.getElementById("redirect-catalog").addEventListener('click', (e) => { redirect("catalog") });
    document.getElementById("redirect-cart").addEventListener('click', (e) => { redirect("cart") });
}

function createPizzas() {
    createCard("pizza1", "img/pizza/vegeterian.png", "Vegeterian", "Meat, Cheese, Peperoni, Pepper, Tomatoes", 15);
    createCard("pizza2", "img/pizza/olive.png", "Olive", "Camembert, Chevre, Mozzarella, Onions, Parsley", 25);
    createCard("pizza3", "img/pizza/mexican.png", "Mexican", "Chicken, Pineapple, Parsley, Onions, Cheese", 10);

    createCard("pizza4", "img/pizza/vegeterian.png", "Vegeterian", "Meat, Cheese, Peperoni, Pepper, Tomatoes");
    createCard("pizza5", "img/pizza/olive.png", "Olive", "Camembert, Chevre, Mozzarella, Onions, Parsley");
    createCard("pizza6", "img/pizza/mexican.png", "Mexican", "Chicken, Pineapple, Parsley, Onions, Cheese");

    createCard("pizza7", "img/pizza/vegeterian.png", "Vegeterian", "Meat, Cheese, Peperoni, Pepper, Tomatoes");
    createCard("pizza8", "img/pizza/olive.png", "Olive", "Camembert, Chevre, Mozzarella, Onions, Parsley");
    createCard("pizza9", "img/pizza/mexican.png", "Mexican", "Chicken, Pineapple, Parsley, Onions, Cheese");
}

function redirect(hash) {
    window.location.hash = hash;
    onHashChange();
}

function loadCorrectHTML() {
    let hash = window.location.hash;
    switch (hash) {
        case "":
            document.querySelector("main").innerHTML = pages.mainHTML;
            return;
        case "#catalog":
            document.querySelector("main").innerHTML = pages.catalogHTML;
            return;
        default:
            window.location.hash = ""
            document.querySelector("main").innerHTML = pages.mainHTML;
            return;
    }
}

function onHashChange() {
    // loadCorrectHTML(); // todo
    parallax();
    createPizzas();
}

(function start() {
    window.onhashchange = onHashChange; // todo
    onHashChange();
    sidebar();
})()