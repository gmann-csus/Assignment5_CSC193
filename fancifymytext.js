function makeBigger() {
    alert("Hello, world!");

    let textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

function fancifyText() {
    let textArea = document.getElementById("textArea");

    if (document.getElementById("fancy").checked) {
        alert("FancyShmancy selected!");

        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else if (document.getElementById("boring").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    let textArea = document.getElementById("textArea");

    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");

    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");

        if (words.length > 0) {
            words[words.length - 1] += "-MOO";
        }

        sentences[i] = words.join(" ");
    }

    text = sentences.join(".");

    textArea.value = text;
}