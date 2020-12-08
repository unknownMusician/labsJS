import { redirect } from "./main.js";
import { addToCart } from "./cart.js";
import { globalObj } from "./main.js";

function getElements(containerId) {
    return {
        card: document.querySelector(`#${containerId} .pizza-card`),
        container: document.getElementById(containerId),
        // todo: set correct parrent
        title: document.querySelector(`#${containerId} .title`),
        pizza: document.querySelector(`#${containerId} .pizza`),
        purchase: document.querySelector(`#${containerId} .purchase button`),
        ingredients: document.querySelector(`#${containerId} .pizza-info h3`),
        sizes: document.querySelector(`#${containerId} .sizes`),
        sizeButtons: document.querySelectorAll(`#${containerId} .sizes button`)
    }
}

function setAnimationOut(elements) {
    elements.container.addEventListener('mouseleave', (e) => {
        elements.card.style.transition = 'all 0.5s ease';
        elements.card.style.transform = `rotateY(0) rotateX(0)`

        elements.pizza.style.transform = `translateZ(0px)`;
        elements.title.style.transform = `translateZ(0px)`;
        elements.ingredients.style.transform = `translateZ(0px)`;
        elements.sizes.style.transform = `translateZ(0px)`;
        for(let i = 0; i < elements.sizeButtons.length; i++) {
            elements.sizeButtons[i].style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
        }
        elements.purchase.style.transform = `translateZ(0px)`;
    });
}

function setAnimationIn(elements) {
    elements.container.addEventListener('mouseenter', (e) => {
        elements.card.style.transition = 'none';
        elements.pizza.style.transform = `translateZ(100px)`;
        elements.title.style.transform = `translateZ(80px)`;
        elements.ingredients.style.transform = `translateZ(60px)`;
        elements.sizes.style.transform = `translateZ(40px)`;
        for(let i = 0; i < elements.sizeButtons.length; i++) {
            elements.sizeButtons[i].style.boxShadow = "0 0px 20px rgba(0, 0, 0, 0.2)";
        }
        elements.purchase.style.transform = `translateZ(30px)`;
    });
}

function setAnimationMouse(elements) {
    elements.container.addEventListener('mousemove', (e) => {
        let elemTop = elements.container.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        let elemBottom = elements.container.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;
        let elemLeft = elements.container.getBoundingClientRect().left - document.body.getBoundingClientRect().left;
        let elemRight = elements.container.getBoundingClientRect().right - document.body.getBoundingClientRect().left;

        let xAxis = (e.pageX - (elemRight + elemLeft) / 2) / 30;
        let yAxis = (e.pageY - (elemTop + elemBottom) / 2) / 50;
        elements.card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
    });
}

function getActiveSizeId(elements) {
    let btns = Array.from(elements.sizeButtons);
    return btns.indexOf(btns.find((element, index, array) => element.className == "active"));
}

function setButtonsClickListeners(productId, elements) {
    for (let i = 0; i < elements.sizeButtons.length; i++) {
        let button = elements.sizeButtons[i];
        button.addEventListener('click', (e) => {
            elements.purchase.innerHTML = `₴ ${globalObj.db.products[productId].prices[i]} - Purchase`;

            elements.sizeButtons.forEach(button => { button.classList.remove("active"); });
            button.classList.add("active");
        });
    }

    elements.purchase.addEventListener('click', e => {
        let keyframes = [
            {width: '100%', backgroundColor: 'yellow', boxShadow: '0 0 10px 10px rgba(250, 250, 10, 0.5)'},
            {width: '80%'},
            {width: '100%'}
        ]
        let params = {
            duration: 200,
            easing: 'ease'
        }
        elements.purchase.animate(keyframes, params)
        addToCart(productId, getActiveSizeId(elements));
    });

    elements.pizza.addEventListener('click', e => {
        redirect(`product/${globalObj.db.products[productId].url}`);
    });
}

function start(containerId, productId) {
    const elements = getElements(containerId);

    setAnimationMouse(elements);
    setAnimationIn(elements);
    setAnimationOut(elements);
    setButtonsClickListeners(productId, elements);
}

export function createCard(htmlId, productId) {
    let db = globalObj.db;
    let dbProduct = db.products[productId];
    let container = document.getElementById(htmlId);
    if (container == null) { return; }
    container.classList.add("pizza-container");
    container.innerHTML =
        `<div class="pizza-card">` +
        (dbProduct.discount == 0 ? `` : `<div class="discount-container"><div class="discount">- ${dbProduct.discount}%</div></div>`) +
        `<div class="pizza">
        <div class="circle"></div>
        <img src="${dbProduct.image}" alt="pizza">
    </div>
<div class="pizza-info">
    <h2 class="title">${dbProduct.productName}</h2>
        <h3>${dbProduct.productIngredients}</h3>
        <div class="sizes">
            <button>${db.sizes[0]} cm</button>
            <button>${db.sizes[1]} cm</button>
            <button class="active">${db.sizes[2]} cm</button>
            <button>${db.sizes[3]} cm</button>
        </div>
        <div class="purchase">
            <button>₴ ${dbProduct.prices[2]} - Purchase</button>
        </div>
    </div>
</div>`;

    start(htmlId, productId);

}