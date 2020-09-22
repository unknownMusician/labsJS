function submit(inputSide) {
    let inputView = document.getElementById("input");
    let inputStr = inputView.value;
    if (inputStr == "")
        return;
    inputView.value = "";
    let date = new Date();
    let inputDate = date.toLocaleTimeString().substr(0, 5);

    let currentId = getCurrId();
    let currentUser = getCurrUser();
    localStorage.setItem(`${currentUser}${currentId}msg`, inputStr);
    localStorage.setItem(`${currentUser}${currentId}time`, inputDate);
    localStorage.setItem(`${currentUser}${currentId}side`, inputSide);
    msgTrigger();
    localStorage.setItem(`${currentUser}currId`, (currentId + 1).toString());
}

function msgTrigger() {
    let currentId = getCurrId()
    let currentUser = getCurrUser();
    let msgView = document.getElementById("messageView");
    msgView.innerHTML = "";
    for (let i = 0; i <= currentId; i++) {
        let div = document.createElement("div");
        let inputSide = localStorage.getItem(`${currentUser}${i}side`);
        switch (inputSide) {
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
        msgText.innerText = localStorage.getItem(`${currentUser}${i}msg`);
        msgTime.innerText = localStorage.getItem(`${currentUser}${i}time`);
        div.appendChild(msgText);
        div.appendChild(msgTime);
        msgView.appendChild(div);
    }
}

function getCurrId() {
    let currentId = localStorage.getItem(`${getCurrUser()}currId`);
    if (currentId == null)
        return 0;
    return parseInt(currentId);
}

function getCurrUser() {
    let currentUser = localStorage.getItem("currUser");
    if (currentUser == null)
        return "";
    return currentUser;
}

function clearMsgs() {
    localStorage.clear();
    msgTrigger();
}

function goToChat(name) {
    localStorage.setItem("currUser", name);
    document.getElementById("title").innerHTML = name;
    msgTrigger();
}

if (getCurrUser() == "")
    localStorage.setItem("currUser", "Hana");

document.getElementById("title").innerHTML = getCurrUser();
msgTrigger();