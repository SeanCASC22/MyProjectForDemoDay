const MessageElem = document.querySelector("#ForInput");
const PlaceForText = document.querySelector("#SeeHere");

let randomBtn = document.querySelector("#thySubmitButton");
randomBtn.onclick = function (event) {
    //prevent default form behavior
    event.preventDefault();

    if (MessageElem.value === "") { }

    else {
        PlaceForText.innerHTML += `<hr>` + MessageElem.value + `<hr>` + `<br>`;
        MessageElem.value = "";
    }

}