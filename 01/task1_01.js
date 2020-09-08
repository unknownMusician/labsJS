function fill(n) {
    var arr = [];
    for (let i = 0; i < n; i++)
        arr[i] = i;
    return arr;
}

function test() {
    for (let i = 0; i < 10; i++) {
        var index = Math.round(Math.random() * 20);
        console.log(`${index} → ${fill(index)}`);
    }
    console.log(fill(5));
}

test();