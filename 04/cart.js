import { globalObj, saveToLocalStorage } from "./main.js";

export function addToCart(productId, sizeId) {
    let el = globalObj.localStorageInfo.find((element, index, array) => (element.product == productId) && (element.size == sizeId));
    if (el != undefined) {
        el.count++;
    } else {
        globalObj.localStorageInfo.push({
            product: productId,
            size: sizeId,
            count: 1
        });
    }
    checkCartIcon(globalObj);
    saveToLocalStorage();
}

export function checkCartIcon(globalObj) {
    document.getElementById("cart-counter").style.visibility = globalObj.localStorageInfo.length > 0 ? "visible" : "hidden";
    let cartSize = 0;
    globalObj.localStorageInfo.forEach(element => { cartSize += element.count; });
    document.getElementById("cart-counter").innerHTML = cartSize > 9 ? '+' : cartSize;
}