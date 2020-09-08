function write() {
    var str = document.getElementById("field").value;
    var p = document.createElement("div");
    var node = document.createTextNode(str);
    p.appendChild(node);
    document.body.appendChild(p);
}

function start() {
    document.getElementById("btn").onclick = write;
}

start();