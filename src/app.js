// DOM Elements
const startGameButton = document.getElementById("start-game-button");
const cardContainer = document.getElementById("card-container");
const instructionTemplate = document.getElementById("instruction-template");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const resultMessage = document.getElementById("result-message");

// Game Variables
const emojisList = ['🥑', '🥑', '🌼', '🌹', '🦋', '🌼', '😊', '🦋', '🌹', '😊', '🌞', '🐒', '🌞', '🐒', '🌙', '🌙'];
emojisList.sort(() => 0.5 - Math.random()); // Shuffle emojis

let flippedEmojis = [];
let flippedCards = [];
let successCount = 0;
let startTime = 0;
let gameTimer;
const totalTime = 60; // Game duration in seconds

// Create flipped card element
function createFlippedCard(emoji) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.textContent = emoji;

    // Append elements
    cardInner.appendChild(cardBack);
    cardInner.appendChild(cardFront);
    card.appendChild(cardInner);

    cardInner.addEventListener("click", () => flipCard(cardInner, emoji));

    return card;
}

// Flip card logic
function flipCard(cardInner, emoji) {
    if (flippedCards.length < 2 && !cardInner.classList.contains("flipped")) {
        cardInner.classList.add("flipped");
        flippedEmojis.push(emoji);
        flippedCards.push(cardInner);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Check if two flipped cards match
function checkMatch() {
    if (flippedEmojis[0] === flippedEmojis[1]) {
        flippedCards[0].classList.add("success");
        flippedCards[1].classList.add("success");
        successCount++;

        flippedEmojis = [];
        flippedCards = [];

        if (successCount === emojisList.length / 2) {
            clearInterval(gameTimer);
            showResultMessage(true);
        }
    } else {
        setTimeout(() => {
            flippedCards[0].classList.remove("flipped");
            flippedCards[1].classList.remove("flipped");
            flippedEmojis = [];
            flippedCards = [];
        }, 1000);
    }
}

// Start the game
function startGame() {
    instructionTemplate.style.display = "none";
    cardContainer.style.display = "grid";
    createCards(cardContainer, emojisList);

    startTime = Date.now();
    gameTimer = setInterval(updateTimer, 1000);
}

// Update timer display
function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.textContent = `Time: ${elapsedTime}s`;

    if (elapsedTime >= totalTime) {
        clearInterval(gameTimer);
        showResultMessage(false);
    }
}

// Display result message
function showResultMessage(isSuccess) {
    resultMessage.style.display = "block";
    resultMessage.textContent = isSuccess ? "Congratulations! You completed the game within 1 minute!" : "Better luck next time!";
}

// Create and append cards to container
function createCards(container, emojis) {
    const fragment = document.createDocumentFragment(); // Create a DocumentFragment

    emojis.forEach(emoji => {
        const card = createFlippedCard(emoji);
        fragment.appendChild(card); // Append cards to the fragment
    });

    container.appendChild(fragment); // Append the fragment to the container

    // Temporarily flip all cards to hide emojis
    setTimeout(() => {
        document.querySelectorAll('.card-inner').forEach(card => {
            card.classList.add('flipped');
        });

        // Unflip cards after 4 seconds
        setTimeout(() => {
            document.querySelectorAll('.card-inner').forEach(card => {
                card.classList.remove('flipped');
            });
        }, 4000);
    }, 0);
}

// Event Listener for starting the game
startGameButton.addEventListener("click", startGame);
