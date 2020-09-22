function submit(inputAuthor) {
    let inputView = document.getElementById("input");
    let inputStr = inputView.value;
    if (inputStr == "")
        return;
    inputView.value = "";
    let date = new Date();
    let inputDate = date.toLocaleTimeString().substr(0, 5);

    let currentId = getCurrId();
    localStorage.setItem(`${currentId}msg`, inputStr);
    localStorage.setItem(`${currentId}time`, inputDate);
    localStorage.setItem(`${currentId}author`, inputAuthor);
    msgTrigger();
    localStorage.setItem("currId", (currentId + 1).toString());
}

function msgTrigger() {
    let currentId = getCurrId()
    let msgView = document.getElementById("messageView");
    msgView.innerHTML = "";
    for (let i = 0; i <= currentId; i++) {
        let div = document.createElement("div");
        let inputAuthor = localStorage.getItem(`${i}author`);
        switch (inputAuthor) {
            case "right":
                div.className = "rightMsg";
                break;
            case "left":
                div.className = "leftMsg";
                break;
        }
        let msgText = document.createElement("div");
        msgText.className = "msgText";
        let msgTime = document.createElement("div");
        msgTime.className = "msgTime";
        msgText.innerText = localStorage.getItem(`${i}msg`);
        msgTime.innerText = localStorage.getItem(`${i}time`);
        div.appendChild(msgText);
        div.appendChild(msgTime);
        msgView.appendChild(div);
    }
}

function getCurrId() {
    let currentId = localStorage.getItem("currId");
    if (currentId == null)
        return 0;
    return parseInt(currentId);
}

function clearMsgs() {
    localStorage.clear();
    msgTrigger();
}

function goToChat(name) {
    switch (name) {
        case "Hana":
            window.location.replace("hana.html");
            break;
        case "Peter":
            window.location.replace("peter.html");
            break;
        case "Ivan":
            window.location.replace("ivan.html");
            break;
        case "Patricia":
            window.location.replace("patricia.html");
            break;
        case "Henry":
            window.location.replace("henry.html");
            break;
    }
}


msgTrigger();