import { createCard } from "./cardAnim.js";

function parallax() {
    document.getElementById("actions-background").style.transform = `translateY(${-250 + window.scrollY/4}px) rotateZ(7deg)`;
}

(function start() {
    parallax();
    window.addEventListener('scroll', e => parallax())

    createCard("pizza1", "img/pizza/vegeterian.png", "Vegeterian", "Meat, Cheese, Peperoni, Pepper, Tomatoes", 15);
    createCard("pizza2", "img/pizza/olive.png", "Olive", "Camembert, Chevre, Mozzarella, Onions, Parsley", 25);
    createCard("pizza3", "img/pizza/mexican.png", "Mexican", "Chicken, Pineapple, Parsley, Onions, Cheese", 10);

    createCard("pizza4", "img/pizza/vegeterian.png", "Vegeterian", "Meat, Cheese, Peperoni, Pepper, Tomatoes");
    createCard("pizza5", "img/pizza/olive.png", "Olive", "Camembert, Chevre, Mozzarella, Onions, Parsley");
    createCard("pizza6", "img/pizza/mexican.png", "Mexican", "Chicken, Pineapple, Parsley, Onions, Cheese");
})();