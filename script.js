addCard.addEventListener("click", function() {

    const flashCardContainer = document.getElementById("flashCardContainer");
    
    const newCard = document.createElement("div");
    newCard.classList.add("flash-card");
    newCard.contentEditable = true;
    newCard.innerText = "New Card";

    const deleteCard = document.createElement("button");
    deleteCard.textContent = "Delete";
    deleteCard.classList.add("delete-button");
    deleteCard.addEventListener("click", function() {
    deleteCard.classList.toggle("deleted");
    deleteCard.contentEditable = false;
    });

    const editCard = document.createElement("button");
    editCard.textContent = "Edit";
    editCard.classList.add("edit-button");
    editCard.addEventListener("click", function() {
    editCard.classList.toggle("flipped");
    editCard.contentEditable = false;
    return;
    });

    newCard.classList.add("flash-card");
    newCard.contentEditable = true;
    newCard.innerText = "new-card";
    newCard.deleteCard = `${deleteCard}`;
    newCard.flipCard = `${flipCard}`;
    flashCardContainer.appendChild(newCard);

    newCard.appendChild(deleteCard);
    newCard.appendChild(editCard);
});
