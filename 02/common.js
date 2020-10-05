function submit(inputSide) {
    let inputView = document.getElementById("textInput");
    let inputStr = inputView.value;
    if (inputStr == "")
        return;
    if (inputStr == "clear") {
        clearMsgs();
        inputView.value = "";
        return;
    }
    inputView.value = "";
    let date = new Date();
    let inputDate = date.toLocaleTimeString().substr(0, 5);

    let currentId = getCurrId(getCurrUser()) + 1;
    let currentUser = getCurrUser();
    localStorage.setItem(`${currentUser}${currentId}msg`, inputStr);
    localStorage.setItem(`${currentUser}${currentId}time`, inputDate);
    localStorage.setItem(`${currentUser}${currentId}side`, inputSide);

    localStorage.setItem(`${currentUser}currId`, (currentId).toString());
    showMessages();
}

function showMessages() {
    let currentId = getCurrId(getCurrUser());
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
        let msg = localStorage.getItem(`${currentUser}${i}msg`);
        let time = localStorage.getItem(`${currentUser}${i}time`);
        msgText.innerText = msg;
        msgTime.innerText = time;
        if (i == currentId) {
            setUserTextNTimeInChats(getCurrUser(), msg, time);
        }
        div.appendChild(msgText);
        div.appendChild(msgTime);
        msgView.appendChild(div);
    }
}

function setUserTextNTimeInChats(user, text, time) {
    if (user != null) {
        if (text != null && time != null) {
            document.getElementById(`${user}LastMsgText`).innerHTML = text;
            document.getElementById(`${user}LastMsgTime`).innerHTML = time;
        } else {
            document.getElementById(`${user}LastMsgText`).innerHTML = "";
            document.getElementById(`${user}LastMsgTime`).innerHTML = "";
        }
    }
}

function getCurrId(user) {
    let currentId = localStorage.getItem(`${user}currId`);
    if (currentId == null || isNaN(parseInt(currentId)))
        return -1;
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
    window.location.reload();
}

function goToChat(name) {
    localStorage.setItem("currUser", name);
    document.getElementById("chatTitle").innerHTML = name;
    window.location.replace(`${window.location.href.substring(0, window.location.href.indexOf("?"))}?chat=${name}`)
}

(function onStart() {
    if (getCurrUser() == "")
        localStorage.setItem("currUser", "Hana");

    document.getElementById("chatTitle").innerHTML = getCurrUser();
    document.getElementById(`${getCurrUser()}ShortView`).style = "background-color: #5682a3; color: #ffffff";

    let user = "Hana";
    setUserTextNTimeInChats(user, localStorage.getItem(`${user}${getCurrId(user)}msg`), localStorage.getItem(`${user}${getCurrId(user)}time`));
    user = "Peter";
    setUserTextNTimeInChats(user, localStorage.getItem(`${user}${getCurrId(user)}msg`), localStorage.getItem(`${user}${getCurrId(user)}time`));
    user = "Ivan";
    setUserTextNTimeInChats(user, localStorage.getItem(`${user}${getCurrId(user)}msg`), localStorage.getItem(`${user}${getCurrId(user)}time`));
    user = "Patricia";
    setUserTextNTimeInChats(user, localStorage.getItem(`${user}${getCurrId(user)}msg`), localStorage.getItem(`${user}${getCurrId(user)}time`));
    user = "Henry";
    setUserTextNTimeInChats(user, localStorage.getItem(`${user}${getCurrId(user)}msg`), localStorage.getItem(`${user}${getCurrId(user)}time`));

    showMessages();
})();