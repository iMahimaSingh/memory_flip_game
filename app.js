let startGameButton = document.getElementById("start-game-button");
let cardContainer = document.getElementById("card-container");
let instructionTemplate = document.getElementById("instruction-template");
let timerDisplay = document.getElementById("timer");
let scoreDisplay = document.getElementById("score");
let resultMessage = document.getElementById("result-message");

let emojisList = ['🥑', '🥑', '🌼', '🌹', '🦋', '🌼', '😊', '🦋', '🌹', '😊', '🌞', '🐒', '🌞', '🐒', '🌙', '🌙'];
emojisList.sort(() => 0.5 - Math.random());

let flippedEmojis = [];
let flippedCards = [];
let successCount = 0;
let startTime = 0;
let gameTimer;
let totalTime = 60; // Game duration in seconds

function createFlippedCard(emoji) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    let cardBack = document.createElement("div");
    cardBack.classList.add("card-back");

    let cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.textContent = emoji;

    cardInner.appendChild(cardBack);
    cardInner.appendChild(cardFront);
    card.appendChild(cardInner);

    cardInner.addEventListener("click", () => flipCard(cardInner, emoji));

    return card;
}

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

function startGame() {
    instructionTemplate.style.display = "none";
    cardContainer.style.display = "grid";
    createCards(cardContainer, emojisList);

    startTime = Date.now();
    gameTimer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.textContent = `Time: ${elapsedTime}s`;

    if (elapsedTime >= totalTime) {
        clearInterval(gameTimer);
        showResultMessage(false);
    }
}

function showResultMessage(isSuccess) {
    resultMessage.style.display = "block";
    resultMessage.textContent = isSuccess ? "Congratulations! You completed the game within 1 minute!" : "Better luck next time!";
}

function createCards(container, emojis) {
    emojis.forEach(emoji => {
        let card = createFlippedCard(emoji);
        container.appendChild(card);
    });

    setTimeout(() => {
        document.querySelectorAll('.card-inner').forEach(card => {
            card.classList.add('flipped');
        });

        setTimeout(() => {
            document.querySelectorAll('.card-inner').forEach(card => {
                card.classList.remove('flipped');
            });
        }, 4000);
    }, 0);
}

startGameButton.addEventListener("click", startGame);
