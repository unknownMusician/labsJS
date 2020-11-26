function getElements() {
    return {
        card: document.querySelector(".pizza-card"),
        container: document.querySelector(".pizza-container"),
        // todo: set correct parrent
        title: document.querySelector(".title"),
        pizza: document.querySelector(".pizza"),
        purchase: document.querySelector(".purchase button"),
        ingredients: document.querySelector(".pizza-ingredients h3"),
        sizes: document.querySelector(".sizes")
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
        elements.purchase.style.transform = `translateZ(0px)`;
    });
}

function setAnimationIn(elements) {
    elements.container.addEventListener('mouseenter', (e) => {
        elements.card.style.transition = 'none';

        elements.pizza.style.transform = `translateZ(150px)`;
        elements.title.style.transform = `translateZ(125px)`;
        elements.ingredients.style.transform = `translateZ(100px)`;
        elements.sizes.style.transform = `translateZ(75px)`;
        elements.purchase.style.transform = `translateZ(30px)`;
    });
}

function setAnimationMouse(elements) {
    elements.container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        elements.card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    });
}

(function start() {
    const elements = getElements();

    setAnimationMouse(elements);
    setAnimationIn(elements);
    setAnimationOut(elements);

    let sizeButtons = document.querySelectorAll(".sizes button");

    sizeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log("click");
            sizeButtons.forEach(button => {
                button.classList.remove("active");
            });
            button.classList.add("active");
        });
    });;
})();