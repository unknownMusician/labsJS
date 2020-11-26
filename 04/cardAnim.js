function getElements(containerId) {
    return {
        card: document.querySelector(`#${containerId} .pizza-card`),
        container: document.getElementById(containerId),
        // todo: set correct parrent
        title: document.querySelector(`#${containerId} .title`),
        pizza: document.querySelector(`#${containerId} .pizza`),
        purchase: document.querySelector(`#${containerId} .purchase button`),
        ingredients: document.querySelector(`#${containerId} .pizza-info h3`),
        sizes: document.querySelector(`#${containerId} .sizes`)
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
        console.log("1");
        elements.pizza.style.transform = `translateZ(100px)`;
        elements.title.style.transform = `translateZ(80px)`;
        elements.ingredients.style.transform = `translateZ(60px)`;
        elements.sizes.style.transform = `translateZ(40px)`;
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

function start(containerId) {
    const elements = getElements(containerId);

    setAnimationMouse(elements);
    setAnimationIn(elements);
    setAnimationOut(elements);

    let sizeButtons = document.querySelectorAll(`#${containerId} .sizes button`);

    sizeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log("click");
            sizeButtons.forEach(button => {
                button.classList.remove("active");
            });
            button.classList.add("active");
        });
    });;
}

export function createCard(id, imgSrc, title, ingredients, discount = 0) {
    let container = document.getElementById(id);
    container.classList.add("pizza-container");
    container.innerHTML =
        `<div class="pizza-card">` +
        (discount == 0 ? `` : `<div class="discount-container"><div class="discount">- ${discount}%</div></div>`) +
        `<div class="pizza">
        <div class="circle"></div>
        <img src="${imgSrc}" alt="pizza">
    </div>
<div class="pizza-info">
    <h2 class="title">${title}</h2>
        <h3>${ingredients}</h3>
        <div class="sizes">
            <button>25 cm</button>
            <button>30 cm</button>
            <button class="active">35 cm</button>
            <button>40 cm</button>
        </div>
        <div class="purchase">
            <button>Purchase</button>
        </div>
    </div>
</div>`;

    start(id);

}