function Form(text) {
    this.text = text;
}


function writerForm() {
    let inputBox = document.createElement("div");
    let inputForm = document.createElement("input");
    let removeButton = document.createElement("input");
    //inputBox
    inputBox.setAttribute("id", "remove");
    inputBox.setAttribute("class", "box");
    //input
    inputForm.setAttribute("class", "input");
    inputForm.setAttribute("type", "text");
    inputForm.setAttribute("placeholder", "Writer Input");
    //Remove
    removeButton.setAttribute("class", "remove-button");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("value", "remove");
    removeButton.addEventListener("click", function (e) {
        e.target.parentNode.remove()
    });
    //appending elements
    inputBox.appendChild(inputForm);
    inputBox.appendChild(removeButton);
    document.body.insertBefore(inputBox, buttonList);
}

function storeForm() {
    let storedInput = [];
    let formBox = document.getElementsByClassName("box");
    for (let i = 0; i < formBox.length; i++) {
        let elementText = formBox[i].firstElementChild.value;
        const form = new Form(elementText);
        storedInput.push(form);
    }

    localStorage.setItem("Lab1", JSON.stringify(storedInput));
}

function storeTime(s) {
    window.setInterval(() => {
        storeForm();
    }, s);
}
storeTime(2000);
