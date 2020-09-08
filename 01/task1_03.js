function capitalize(str) {
    return String(str).charAt(0).toLocaleUpperCase() + String(str).substr(1);
}

function test() {
    console.log(capitalize("this"));
    console.log(capitalize("is"));
    console.log(capitalize("words"));
    console.log(capitalize("all"));
    console.log(capitalize("lower"));
    console.log(capitalize("case"));
    console.log(capitalize("or"));
    console.log(capitalize("not?"));
}

test();