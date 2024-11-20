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
let score = 0;
let startTime = 0;
let gameTimer;
let memorizationTimer;
const totalTime = 60; // Game duration in seconds
const memorizationTime = 4; // 4 seconds for memorization

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
    if (flippedCards.length < 2 && !cardInner.classList.contains("flipped") && !cardInner.classList.contains("matched")) {
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

        // Hide matched cards and remove them from the container
        setTimeout(() => {
            flippedCards[0].classList.add("matched");
            flippedCards[1].classList.add("matched");

            flippedCards[0].parentElement.style.backgroundColor = "green";
            flippedCards[1].parentElement.style.backgroundColor = "green";

            score++;
            updateScore();

            // Remove only the matched cards from the container (not the entire board)
            flippedCards[0].parentElement.remove();  // Remove the first matched card
            flippedCards[1].parentElement.remove();  // Remove the second matched card

            flippedEmojis = [];
            flippedCards = [];

            if (score === emojisList.length / 2) {
                clearInterval(gameTimer);
                showResultMessage(true);
            }
        }, 500);

    } else {
        flippedCards[0].parentElement.style.backgroundColor = "red";
        flippedCards[1].parentElement.style.backgroundColor = "red";

        setTimeout(() => {
            flippedCards[0].classList.remove("flipped");
            flippedCards[1].classList.remove("flipped");
            flippedCards[0].parentElement.style.backgroundColor = "";
            flippedCards[1].parentElement.style.backgroundColor = "";

            flippedEmojis = [];
            flippedCards = [];
        }, 2000);
    }
}

// Update score on screen
function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

// Update timer on screen
function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.textContent = `Time: ${elapsed}s`;

    if (elapsed >= totalTime) {
        clearInterval(gameTimer);
        showResultMessage(false);
    }
}

// Show result message
function showResultMessage(isSuccess) {
    resultMessage.textContent = isSuccess ? "You Won!" : "Game Over!";
    resultMessage.style.display = "block";
}

// Start the game
function startGame() {
    startGameButton.style.display = "none";
    instructionTemplate.style.display = "none";
    cardContainer.style.display = "grid";
    score = 0;
    updateScore();

    emojisList.forEach(emoji => {
        const card = createFlippedCard(emoji);
        cardContainer.appendChild(card);
    });

    // Show all cards for memorization
    cardContainer.childNodes.forEach(card => {
        card.querySelector(".card-inner").classList.add("flipped");
    });

    // Wait for 4 seconds to show all cards
    setTimeout(() => {
        cardContainer.childNodes.forEach(card => {
            card.querySelector(".card-inner").classList.remove("flipped");
        });

        // Start the game timer and memorization phase
        startTime = Date.now();
        gameTimer = setInterval(updateTimer, 1000);

        // Set memorization timer (4 seconds)
        memorizationTimer = setTimeout(() => {
            cardContainer.childNodes.forEach(card => {
                card.querySelector(".card-inner").classList.remove("flipped");
            });
        }, memorizationTime * 1000);
    }, 4000);
}

// Initialize Game
startGameButton.addEventListener("click", startGame);
