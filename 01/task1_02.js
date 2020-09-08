function bothDevidable(div, num1, num2) {
    let res1 = String(div / num1);
    let res2 = String(div / num2);
    
    return (res1.concat(res2).indexOf(".") == -1);
}

function test() {
    console.log(`(12, 3, 2) → ${bothDevidable(12, 3, 2)}`)
    console.log(`(15, 3, 6) → ${bothDevidable(15, 3, 6)}`)
    console.log(`(10, 2, 6) → ${bothDevidable(10, 2, 6)}`)
    console.log(`(8, 4, 2) → ${bothDevidable(8, 4, 2)}`)
    console.log(`(36, 12, 36) → ${bothDevidable(36, 12, 36)}`)
    console.log(`(100, 3, 50) → ${bothDevidable(100, 3, 50)}`)
}

test();