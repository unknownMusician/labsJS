function onScrollOrWindowSizeChange() {
    var rect = document.body.getBoundingClientRect();
    document.getElementById("titleImage").style = `transform: translateY(${-rect.top / 3 * 2}px); width: ${Math.min(document.documentElement.clientWidth, 700)}px;`;
    if (-rect.top > 439) {
        document.getElementsByClassName("header")[0].id = "onText";
    } else {
        document.getElementsByClassName("header")[0].id = "onImage";
    }
}

function menuBtnClick() {
    buttons.forEach(btn => {
        if (!menuBtnPressed) {
            let buttonShowAnim = [{
                transform: `translateY(${parseInt(btn.id) * -60}px)`,
                opacity: '0'
            }];

            btn.animate(buttonShowAnim, 300);
            setTimeout(() => { btn.style = `transform: translateY(${parseInt(btn.id) * -60}px); opacity: 0;`; }, 250);
        } else {
            let buttonShowAnim = [{
                transform: `translateY(0px)`,
                opacity: '1'
            }];

            btn.animate(buttonShowAnim, 300);
            setTimeout(() => { btn.style = `transform: translateY(0px); opacity: 1;`; }, 250);
        }
    });
    menuBtnPressed = !menuBtnPressed;
}

function resetBtns() {
    buttons.forEach(btn => {
        btn.style = `transform: translateY(${parseInt(btn.id) * -60}px); opacity: 0;`;
    });
}

function btnClick(id) {
    let y = document.getElementsByClassName("segment")[id].getBoundingClientRect().top - document.body.getBoundingClientRect().top - 10;
    windowMover(-document.body.getBoundingClientRect().top, y, 20, 1);
}

function windowMover(yActual, y, step, ms) {
    step = Math.abs(step) * Math.sign(y - yActual);
    yNew = yActual + step;
    console.log("yActual=", yActual, "; y=", y, "; step=", step, "; ms=", ms, "; yNew=", yNew);
    if (Math.abs(yNew - y) > 50) {
        window.scrollTo(0, yNew);
        setTimeout(() => { windowMover(yNew, y, step, ms); }, ms);
    } else {
        window.scrollTo(0, y);
    }
}

const buttons = [];
var menuBtnPressed = true;

(function start() {
    window.addEventListener("resize", onScrollOrWindowSizeChange);
    onScrollOrWindowSizeChange();

    // saving header buttons

    let elems = document.getElementsByClassName("headerButton")
    for (let i = 1; i < elems.length; i++) {
        buttons.push(elems[i]);
    }

    resetBtns();
})()