import * as pages from "./pages.js";

export function loadCorrectHTML(globalObj) {
    let hash = window.location.hash;
    let splitted = hash.split('/');
    if (splitted.length < 2) {
        globalSwitch(hash, globalObj);
    } else {
        directorySwitch(splitted, globalObj);
    }
}

function directorySwitch(splitted, globalObj) {
    switch (splitted[0]) {
        case "#catalog":
            catalogSwitch(splitted[1], globalObj);
            return;
        case "#product":
            productSwitch(splitted[1], globalObj);
            return;
        case "#action":
            actionSwitch(splitted[1], globalObj);
            return;
        default:
            loadDefault(globalObj);
            return;
    }
}

function actionSwitch(secondPart, globalObj) {
    let actions = globalObj.db.actions;
    let itemId = actions.indexOf(actions.find(el => el.url == secondPart));
    if (itemId == -1) { return loadDefault(); }
    pages.generateAction(globalObj.db, itemId);
}

function productSwitch(secondPart, globalObj) {
    let products = globalObj.db.products;
    let itemId = products.indexOf(products.find(el => el.url == secondPart));
    if (itemId == -1) { return loadDefault(); }
    pages.generateProduct(globalObj.db, itemId);
}

function catalogSwitch(secondPart, globalObj) {
    let categs = globalObj.db.productsCategories;
    let itemId = categs.indexOf(categs.find(el => el.url == secondPart));
    if (itemId == -1) { return loadDefault(); }
    pages.generateCategory(globalObj.db, itemId);
}

function globalSwitch(hash, globalObj) {
    switch (hash) {
        case "":
            pages.generateMain(globalObj.db);
            return;
        case "#catalog":
            pages.generateCatalog(globalObj.db);
            return;
        case "#action":
            pages.generateActions();
            return;
        case "#cart":
            if (globalObj.localStorageInfo.length != 0) {
                pages.generateCart(globalObj.db, globalObj.localStorageInfo);
                return;
            }
            loadDefault(globalObj);
            return;
        default:
            loadDefault(globalObj);
            return;
    }
}

function loadDefault(globalObj) {
    window.location.hash = ""
    pages.generateMain(globalObj.db);
}