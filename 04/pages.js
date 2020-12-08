import { createCard } from "./cards.js";
import { redirect, sendToServer } from "./main.js";

export const mainHTML = `
<section class="actions">
<div class="title-container">
    <h1>Actions</h1>
</div>
<div class="sales-container">
    <div class="sales">
        <div class="sale" style="background-color: #f54642;">
            <div class="image"></div>
            <div class="text-container">
                <h2>Action Title</h2>
                <h3>Wow, there's some interesting info about action, some interesting info about action, some interesting info about action, some interesting info about action, some interesting info about action, some interesting info about
                    action, some interesting info about action, some interesting info about action, some interesting info about action, </h3>
            </div>
        </div>
        <div class="sale" style="background-color: blueviolet;">
            <div class="image"></div>
            <div class="text-container">
                <h2>Action Title</h2>
                <h3>Wow, there's some interesting info about action, some interesting info about action, some interesting info about action, some interesting info about action, some interesting info about action, some interesting info about
                    action, some interesting info about action, some interesting info about action, some interesting info about action, </h3>
            </div>
        </div>
    </div>
</div>
</section>
<section class="top">
<div class="title-container">
    <h1>Our Best</h1>
</div>
<div class="background-container-outer">
    <div class="background-container-inner">
        <div class="background"></div>
    </div>
</div>
<div class="cards">
    <div id="pizza4"></div>
    <div id="pizza5"></div>
    <div id="pizza6"></div>
</div>
</section>`;

export const catalogHTML = `
<section class="actions">
<div class="title-container">
    <h1>Best Classic</h1>
</div>
<div class="background-container-outer">
    <div class="background-container-inner">
        <div class="background"></div>
    </div>
</div>
<div class="cards">
    <div id="pizza1"></div>
    <div id="pizza2"></div>
    <div id="pizza3"></div>
</div>
<div class="category" id="category1">
    <button>More...</button>
</div>
</section>
<section class="top">
<div class="title-container">
    <h1>Best Fest</h1>
</div>
<div class="background-container-outer">
    <div class="background-container-inner">
        <div class="background"></div>
    </div>
</div>
<div class="cards">
    <div id="pizza4"></div>
    <div id="pizza5"></div>
    <div id="pizza6"></div>
</div>
<div class="category" id="category2">
    <button>More...</button>
</div>
</section>
<section class="futuristic">
<div class="background-container-outer">
    <div class="background-container-inner">
        <div class="background"></div>
    </div>
</div>
<div class="title-container" id="futuristic-title">
    <h1>Best Futuristic</h1>
</div>
<div class="cards">
    <div id="pizza7"></div>
    <div id="pizza8"></div>
    <div id="pizza9"></div>
</div>
<div class="category" id="category2">
    <button>More...</button>
</div>
</section>`;

export const sale1HTML = `
<section class="actions">
    <div class="sales-container">
        <div class="sales">
            <div class="sale" style="background-color: #f54642;">
                <div class="image"></div>
                <div class="text-container">
                    <h2>Action Title</h2>
                    <h3>Wow, there's some interesting info about action, some interesting info about action, some interesting info about action, some interesting info about action, some interesting info about action, some interesting info about
                        action, some interesting info about action, some interesting info about action, some interesting info about action, </h3>
                </div>
            </div>
        </div>
    </div>
</section>
`;

export const category1 = `
<section class="actions">
    <div class="title-container">
        <h1>Best Classic</h1>
    </div>
    <div class="background-container-outer">
        <div class="background-container-inner">
            <div class="background"></div>
        </div>
    </div>
    <div class="cards">
        <div id="pizza1"></div>
        <div id="pizza2"></div>
        <div id="pizza3"></div>
        <div id="pizza4"></div>
        <div id="pizza5"></div>
        <div id="pizza6"></div>
        <div id="pizza7"></div>
        <div id="pizza8"></div>
    </div>
</section>
`;

export const product1 = `
<section class="actions">
<div class="background-container-outer">
    <div class="background-container-inner">
        <div class="background"></div>
    </div>
</div>
<div class="cards">
    <div id="pizza1"></div>
    <div class="pizza-description">The greatest pizza ever made by our chefs, prepared by our managers and delivered with our app to you.</div>
</div>
</section>
`;

export const cart = `
<div class="products-order">
    <div class="products">
        <div class="product">
            <div class="image">
                <img src="img/pizza/vegeterian.png" alt="">
            </div>
            <div class="info">
                <div class="title">Vegeterian</div>
                <div class="details">
                    <div class="size">35 cm</div>
                    <div class="count"> x 2</div>
                </div>
                <div class="price">₴ 167.05</div>
            </div>
        </div>
        <div class="product">
            <div class="image">
                <img src="img/pizza/vegeterian.png" alt="">
            </div>
            <div class="info">
                <div class="title">Vegeterian</div>
                <div class="details">
                    <div class="size">35 cm</div>
                    <div class="count"> x 2</div>
                </div>
                <div class="price">₴ 167.05</div>
            </div>
        </div>
        <div class="product">
            <div class="image">
                <img src="img/pizza/vegeterian.png" alt="">
            </div>
            <div class="info">
                <div class="title">Vegeterian</div>
                <div class="details">
                    <div class="size">35 cm</div>
                    <div class="count"> x 2</div>
                </div>
                <div class="price">₴ 167.05</div>
            </div>
        </div>
    </div>
    <div class="order">
        <form>
            <section>
                <div class="title">Contacts</div>
                <div class="inputs">
                    <div class="field">
                        <h2>Phone</h2>
                        <input type="tel" placeholder="+380123456789">
                    </div>
                    <div class="field">
                        <h2>E-mail</h2>
                        <input type="email" placeholder="example@example.com">
                    </div>
                </div>
            </section>
            <section>
                <div class="title">Customer</div>
                <div class="inputs">
                    <div class="field">
                        <h2>Name</h2>
                        <input type="text" placeholder="Name">
                    </div>
                    <div class="field">
                        <h2>Surname</h2>
                        <input type="text" placeholder="Surname">
                    </div>
                    <div class="field">
                        <h2>Address</h2>
                        <input type="text" placeholder="Address">
                    </div>
                </div>
            </section>
            <section>
                <div class="title">Order details</div>
                <div class="inputs">
                    <div class="field">
                        <h2>Date</h2>
                        <input type="date" placeholder="dd.mm">
                    </div>
                    <div class="field">
                        <h2>Time</h2>
                        <input type="time" placeholder="hh:mm">
                    </div>
                    <div class="field">
                        <h2>Payment</h2>
                        <input type="text" placeholder="Payment">
                    </div>
                </div>
            </section>
            <div class="submit">
                <input type="submit" id="submit" value="Make an order"></input>
                <div class="sum">₴ 378.15</div>
            </div>
        </form>
    </div>
</div>
`;

export const _ = ``;

export function generateMain(db) {
    let main = `
    <section class="section1">
    <div class="title-container">
        <h1>Actions</h1>
    </div>
    <div class="background-container-outer">
        <div class="background-container-inner">
            <div class="background"></div>
        </div>
    </div>
    <div class="sales-container">
        <div class="sales">
        `;
    db.actions.forEach(action => {
        main += `
        <div class="sale" style="background-color: ${action.color};">
            <div class="image" style="background: url(${action.image}) 100% 100% no-repeat; background-size: cover;"></div>
            <div class="text-container">
                <h2>${action.name}</h2>
                <h3>${action.description}</h3>
            </div>
        </div>`;
    });
    main += `
    </div>
</div>
</section>
<section class="section2">
<div class="title-container">
    <h1>Our Best</h1>
</div>
<div class="background-container-outer">
    <div class="background-container-inner">
        <div class="background"></div>
    </div>
</div>
<div class="cards">`;
    for (let i = 0; i < db.recommendations.length; i++) {
        main += `<div id="pizza${i}"></div>`;
    }
    main += `
    </div>
</section>
    `;
    document.getElementsByTagName("main")[0].innerHTML = main;

    for (let i = 0; i < db.recommendations.length; i++) {
        createCard(`pizza${i}`, db.recommendations[i]);
    }
}

export function generateCatalog(db) {
    let main = ``;
    let categories = [];
    for (let i = 0; i < db.productsCategories.length; i++) {
        main += `
    <section class="section${i + 1}">
        <div class="title-container">
            <h1>${db.productsCategories[i].name}</h1>
        </div>
        <div class="background-container-outer">
            <div class="background-container-inner">
                <div class="background"></div>
            </div>
        </div>
        <div class="cards">`;
        let prods = [];
        for (let j = 0; (j < db.products.length) && (prods.length < 3); j++) {
            if (db.products[j].categoryId == i) { prods.push(j); }
        }
        categories.push(prods);
        for (let j = 0; j < prods.length; j++) {
            main += `<div id="pizza${j}${i}"></div>`;
        }
        main += `</div>
        <div class="category">
            <button>More...</button>
        </div>
    </section>`;
    }
    document.getElementsByTagName("main")[0].innerHTML = main;

    for (let i = 0; i < categories.length; i++) {
        let prods = categories[i];

        for (let j = 0; j < prods.length; j++) {
            createCard(`pizza${j}${i}`, prods[j]);
        }

        document.querySelector(`.section${i + 1} .category button`).addEventListener('click', e => {
            redirect(`catalog/${db.productsCategories[i].url}`)
        });
    }
}

export function generateSale(db, id) {
    let action = db.actions[id];
    let main = `
<section class="actions">
<div class="sales-container">
    <div class="sales">
        <div class="sale" style="background-color: ${action.color}">
            <div class="image"></div>
            <div class="text-container">
                <h2>${action.name}</h2>
                <h3>${action.description}</div>
        </div>
    </div>
</div>
</section>
    `;
    document.getElementsByTagName("main")[0].innerHTML = main;
}

export function generateCategory(db, id) {
    let prods = [];
    for (let j = 0; j < db.products.length; j++) {
        if (db.products[j].categoryId == id) { prods.push(j); }
    }
    let main = `
<section class="section1">
    <div class="title-container">
        <h1>${db.productsCategories[id].name}</h1>
    </div>
    <div class="background-container-outer">
        <div class="background-container-inner">
            <div class="background"></div>
        </div>
    </div>
    <div class="cards">`;
    for (let i = 0; i < prods.length; i++) {
        main += `<div id="pizza${i}"></div>`;
    }
    main += `
    </div>
</section>
    `;
    document.getElementsByTagName("main")[0].innerHTML = main;

    for (let i = 0; i < prods.length; i++) {
        createCard(`pizza${i}`, prods[i]);
    }
}

export function generateProduct(db, id) {
    let prod = db.products[id];
    let main = `
    <section class="section1">
    <div class="background-container-outer">
        <div class="background-container-inner">
            <div class="background"></div>
        </div>
    </div>
    <div class="cards">
        <div id="pizza1"></div>
        <div class="pizza-description">${prod.productDescription}</div>
    </div>
    </section>
    `;
    document.getElementsByTagName("main")[0].innerHTML = main;
    createCard(`pizza1`, id);
}

export function generateCart(db, localStorageInfo) {
    let main = `
    <div class="products-order">
        <div class="products">`;
    let sum = 0;
    for (let i = 0; i < localStorageInfo.length; i++) {
        let prod = localStorageInfo[i];
        main += `
            <div class="product">
                <div class="image">
                    <img src="${db.products[prod.product].image}" alt="">
                </div>
                <div class="info">
                    <div class="title">Vegeterian</div>
                    <div class="details">
                        <div class="size">${db.sizes[prod.size]} cm</div>
                        <div class="count"> x ${prod.count}</div>
                    </div>
                    <div class="price">₴ ${float2price(db.products[prod.product].prices[prod.size] * prod.count)}</div>
                </div>
            </div>
        `;
        sum += db.products[prod.product].prices[prod.size] * prod.count;
    }
    main += `
        </div>
        <div class="order">
            <form>
                <section>
                    <div class="title">Contacts</div>
                    <div class="inputs">
                        <div class="field">
                            <h2>Phone *</h2>
                            <input id="phone" type="text" placeholder="+380123456789" pattern="[+][0-9]{12}" required>
                        </div>
                        <div class="field">
                            <h2>E-mail</h2>
                            <input id="email" type="text" placeholder="example@example.com" pattern="[a-z_.0-9]+[@][a-z]+[.][a-z]+">
                        </div>
                    </div>
                </section>
                <section>
                    <div class="title">Customer</div>
                    <div class="inputs">
                        <div class="field">
                            <h2>Name *</h2>
                            <input id="name" type="text" placeholder="Name" placeholder="[A-Z][a-z]+" required>
                        </div>
                        <div class="field">
                            <h2>Surname</h2>
                            <input id="surname" type="text" placeholder="Surname" placeholder="[A-Z][a-z]+">
                        </div>
                        <div class="field">
                            <h2>Address *</h2>
                            <input id="address" type="text" placeholder="Address" required>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="title">Order details</div>
                    <div class="inputs">
                        <div class="field">
                            <h2>Date *</h2>
                            <input id="date" type="date" placeholder="dd.mm" required>
                        </div>
                        <div class="field">
                            <h2>Time *</h2>
                            <input id="time" type="time" placeholder="hh:mm" required>
                        </div>
                        <div class="field">
                            <h2>Payment</h2>
                            <select id="payment" required>
                                <option>Cash</option>
                                <option>Card</option>
                            </select>
                        </div>
                    </div>
                </section>
                <div class="submit">
                    <input type="submit" id="submit" value="Make an order"></input>
                    <div class="sum">₴ ${float2price(sum)}</div>
                </div>
            </form>
        </div>
    </div>
    `;
    document.getElementsByTagName("main")[0].innerHTML = main;

    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].oninvalid = (e) => { e.target.style.borderBottom = "2px solid #f54642"; console.log(2); };
    }
    
    document.getElementsByTagName('form')[0].addEventListener('submit', e => {
        e.preventDefault();

        let obj = {
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            name: document.getElementById("name").value,
            surname: document.getElementById("surname").value,
            address: document.getElementById("address").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time").value,
            payment: document.getElementById("payment").value,
        };

        sendToServer(obj);
    });
}

export function generateActions() {
    document.getElementsByTagName("main")[0].innerHTML = `
    <section class="section1">
        <div class="title-container">
            <h1>Actions</h1>
        </div>
        <div class="background-container-outer">
            <div class="background-container-inner">
                <div class="background"></div>
            </div>
        </div>
        <div class="sales-container-self">
            <div class="sales" style="overflow: unset;"></div>
        </div>
    </section>
    `;
}

export function generateAction(db, id) {
    let action = db.actions[id];
    document.getElementsByTagName("main")[0].innerHTML = `
    <section class="section1">
        <div class="title-container">
            <h1>Actions</h1>
        </div>
        <div class="background-container-outer">
            <div class="background-container-inner">
                <div class="background"></div>
            </div>
        </div>
        <div class="sales-container-self" style="min-height: 1000px;">
            <div class="sale" style="background-color: ${action.color};">
            <div class="image" style="background: url(${action.image}) 100% 100% no-repeat; background-size: cover;"></div>
                <div class="text-container">
                    <h2>${action.name}</h2>
                    <h3>${action.description}</h3>
                </div>
            </div>
        </div>
    </section>
    `;
}

export function generateStatus(isSuccess) {
    let main = `
    <section class="section1">
        <div class="background-container-outer" style="height: 1000px;">
            <div class="background-container-inner">
                <div class="background"></div>
            </div>
        </div>
        <div class="status-container">
            <div class="status">
                <h1>${isSuccess ? "Success" : "Error"}</h1 style="border-bottom: 2px solid ${isSuccess ? "yellowgreen" : "red"};">
                <h2>${isSuccess ? "Your order has been recieved" : "Something went wrong"}</h2>
            </div>
        </div>
    </section>
    `;
    document.getElementsByTagName("main")[0].innerHTML = main;
}

function float2price(num) {
    let rounded = Math.round(num * 100) / 100;
    let strings = rounded.toString().split('.');
    if (strings.length > 1) {
        return strings[0] + '.' + (strings[1].length > 1 ? strings[1].substring(0, 2) : (strings[1] + '0' * (2 - strings[1].length)));
    } else {
        return strings[0] + '.00';
    }
}