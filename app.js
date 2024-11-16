let bodyElement=document.querySelector(".body-container");
let cardContainer=document.createElement("div");
cardContainer.classList.add("card-container");
bodyElement.appendChild(cardContainer);
let emojisList=['🥑','🥑','🌼','🌹','🦋','🌼','😊','🦋','🌹','😊','🌞','🐒','🌞','🐒','🌙'];

emojisList.sort(() => 0.5 - Math.random());

let flipCount = 0;
let flippedEmojis = [];
let flippedCards = [];
let successCount = 0;


function createFlippedCard(emoji){
    let cards=document.createElement("div");
    cards.classList.add("card");

    let cardInner=document.createElement("div");
    cardInner.classList.add("card-inner");

    let cardBack=document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.textContent="Flip Me!"

    let cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.textContent=emoji;

    cardInner.appendChild(cardBack);
    cardInner.appendChild(cardFront);
    cards.appendChild(cardInner);

    cards.addEventListener("click",function(){
        handleCardClick(cardInner,emoji,cards);
    });
    return cards;
}

function handleCardClick(cardInner, emoji, cardElement) {
    if (
        cardInner.classList.contains("flipped") || 
        flippedCards.includes(cardElement)
    ) return; // Prevent clicking already flipped cards

    cardInner.classList.add("flipped"); // Flip the card to show front
    flippedCards.push(cardElement); // Track flipped cards
    flippedEmojis.push(emoji);
    flipCount++;

    if (flipCount === 2) { // Match two cards
        checkFlippedEmojis();
    }
}

function checkFlippedEmojis() {
    if (flippedEmojis[0] === flippedEmojis[1]) {
        // Cards match, mark them as successful
        flippedCards.forEach(card => {
            card.querySelector(".card-inner").classList.add("success");
        });
        successCount += 2;

        alert("Great! You matched the cards!");

        if (successCount === emojisList.length) {
            alert("Congratulations! You matched all the cards!");
        }
    } else {
        // Cards do not match, flip them back
        setTimeout(() => {
            flippedCards.forEach(card => {
                card.querySelector(".card-inner").classList.remove("flipped");
            });
            alert("Better luck next time! Try again.");
        }, 600);
    }

    // Reset for next round
    flipCount = 0;
    flippedEmojis = [];
    flippedCards = [];
}



function createCards(container, emojis) {
    emojis.forEach(emoji => {
        let card = createFlippedCard(emoji);
        container.appendChild(card);
    });
}

createCards(cardContainer, emojisList);

