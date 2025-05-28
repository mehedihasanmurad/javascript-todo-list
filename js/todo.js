

document.getElementById("add-button").addEventListener("click", function () {
    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value.trim();

    if (inputValue !== "") {
        //agulo sob ager moton ai
        const inputText = document.getElementById("input-text");

        const createDivElement = document.createElement("div");
        createDivElement.innerHTML = `
        ${inputValue} <button>Delete</button>
        `
        //classlist add
        createDivElement.classList.add('new-add');

        inputText.appendChild(createDivElement);
        inputField.value = "";

    }

    else {
        alert("Please you add something");
    }  
});

///akhon kaj holo create element take dhore niye ashe seitake todo list theke remove kora
const removeDiv = document.getElementById("input-text");
    removeDiv.addEventListener("click",function(event){
    const singleDiveRemove = event.target.parentNode;
    singleDiveRemove.parentNode.removeChild(singleDiveRemove);
})