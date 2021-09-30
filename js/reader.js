function readLocalStorage() {
    let Storage = localStorage.getItem("Lab1");
    jsonArr = JSON.parse(Storage);
    return jsonArr;
}

function readForm(text) {
    let viewForm = document.createElement("div");    
    let showForm = document.createElement("input");
    showForm.setAttribute("class", "input");
    showForm.setAttribute("type", "text");
    showForm.setAttribute("placeholder", "Writer Input");
    showForm.setAttribute("value", text);
    showForm.setAttribute("readonly", true);
    //Final View
    viewForm.appendChild(showForm); document.getElementById("finalForm").appendChild(viewForm);
}

function getForm() {
    document.getElementById("finalForm").innerHTML = "";
    jsonArray = readLocalStorage();
    for (let i = 0; i < jsonArray.length; i++) {
        readForm(jsonArray[i].text);
    }
}

function getTime() {
    setInterval(function() {
        getForm();
        
    }, 2000);

}
getTime();