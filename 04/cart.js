import { globalObj } from "./main.js";

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
}

export function checkCartIcon(globalObj) {
    document.getElementById("cart-counter").style.visibility = globalObj.localStorageInfo.length > 0 ? "visible" : "hidden";
    document.getElementById("cart-counter").innerHTML = globalObj.localStorageInfo.length > 9 ? '+' : globalObj.localStorageInfo.length;
}