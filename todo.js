

function addItem(){
    let myDiv = document.createElement("div");
    let myInput = document.createElement("input");
    let myLabel = document.createElement("label");
    // changing attributes
    myInput.setAttribute("type", "checkbox");
    myLabel.innerHTML=(document.getElementById("text").value);
    myInput.addEventListener("click", removeItem);
    //adding in variables back to div
    myDiv.appendChild(myInput);
    myDiv.appendChild(myLabel);
    document.body.appendChild(myDiv);
    
}

document.getElementById("addButton").addEventListener("click", addItem);

//Removing an item
function removeItem(){
    this.parentNode.remove();
}
