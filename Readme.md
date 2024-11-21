# Memory Card Game

## Overview  
The **Memory Game** is a web-based application designed to challenge and enhance your memory skills. The objective is to match all the pairs of cards within the allotted time. This project uses JavaScript for dynamic behavior, CSS for styling, and HTML for structuring the application.

## Features  

- **Dynamic Card Rendering**: Cards are dynamically created and displayed using DOM manipulation.  
- **Interactive Gameplay**:  
  - Event handlers detect card flips and manage game state seamlessly.  
  - Array structures store cards, emojis, and track flipped cards.  
- **Match Detection**: Conditional statements and loops check if the flipped cards match. If not, they reset to their initial state.  
- **Timer Implementation**: A timer limits the time available to memorize and match the cards.  
- **Delay Handling**: `setTimeout` is used to delay certain actions, such as flipping cards back after mismatches.  

---

## How It Works  

1. **Instructions Screen**  
   The game starts with an instruction template that explains the gameplay. A **Start Game** button initiates the game.  

2. **Memorization Phase**  
   - Initially, the cards are displayed face-up for **4 seconds** to allow the player to memorize their positions.  
   - After 4 seconds, the cards flip back to hide the emojis.  

3. **Matching Phase**  
   - Players flip the cards to find and match pairs.  
   - A timer tracks the remaining time to complete the game.  

4. **Game End**  
   - If all cards are matched within the allotted time, a congratulatory message is displayed.  
   - If the time runs out, a "Better luck next time!" message is shown.  

---

## File Structure  

All files are located in the `src` folder:

- **`index.html`**: The main HTML file containing the structure of the game.  
- **`app.js`**: JavaScript file for game logic and DOM manipulation.  
- **`index.css`**: Stylesheet for designing the game layout and visual elements.  

---

## Getting Started  

### Prerequisites  
To run this game, you'll need a modern web browser (e.g., Chrome, Firefox, Edge).  

### Steps to Run Locally  

1. **Clone the Repository**  
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. **Open the Game**  
   Open the `index.html` file in a web browser to start playing.  

---

## Technologies Used  

- **HTML**: Structuring the game.  
- **CSS**: Styling the user interface.  
- **JavaScript**: Implementing the game logic and interactivity.  

---

## Contributing  

Contributions are welcome! If you have ideas to enhance the game or fix issues, feel free to create a pull request or raise an issue.  

---

## License  

This project is licensed under the MIT License.  

--- 

## Screenshots  

### Instructions Template  
![Instructions Template](https://github.com/user-attachments/assets/04209e5d-f1f6-4257-8c59-6ad820e7661d)

### Memorization Phase  
![Memorization Phase](https://github.com/user-attachments/assets/cb10c9cb-bac2-4076-8b71-ac9a2e53ce12)

### Matching Phase  
![Matching Phase](https://github.com/user-attachments/assets/68df4994-5f00-41b7-a1a4-b5faded48956)

### Win Screen  
![Win Screen](https://github.com/user-attachments/assets/07f8ae87-bea0-4b9c-a61c-904f012c927e)

### Loss Screen  
![Loss Screen](https://github.com/user-attachments/assets/cebc12e8-e749-4c65-946b-897e90746adf)



#Updated Features 🎉  
The game now includes exciting visual and interactive enhancements for an improved user experience. Check out the latest updates:

### 1. Mismatch Visual Feedback 
When two flipped cards don't match, their backgrounds turn **red**, providing immediate visual feedback for incorrect pairs.  
![Mismatch Feedback](https://github.com/user-attachments/assets/1e35e98c-e244-4f6b-9c69-2dea91e08a2a)

### 2. Match Visual Feedback  
Matched card pairs are highlighted with a **green background**, giving players a satisfying visual confirmation.  
![Match Feedback](https://github.com/user-attachments/assets/994a83a9-2d4a-4f96-9346-efbe7639e38d)

### 3. Automatic Removal of Matched Cards  
After a delay of **500ms**, matched cards are seamlessly removed from the game board, decluttering the interface.  
![Cards Removed](https://github.com/user-attachments/assets/f9c625d2-b726-4183-93a6-787724a28c51)

### 4. Win Message and Score Display  
When all pairs are matched, the game displays a "You Won!"** message along with your final score, leaving no cards in the container.  
![Winning Screen](https://github.com/user-attachments/assets/d58de344-dead-474e-8ac7-017ccb0c9bc3)

---

## How It Works 💡  
- Real-Time Feedback: Immediate visual effects help players track their progress.  
- Efficient DOM Manipulation: Matched cards are removed dynamically, reducing the number of elements in the DOM and improving game performance.  
- Engaging Gameplay: Color-coded feedback enhances the interactive experience, while the score system adds an element of challenge.

---

## Why These Updates Matter 🚀  
- Improved User Experience: Players get clear visual cues for every action.  
- Enhanced Performance: Removing matched cards minimizes the workload for the browser, making rendering faster.  
- Simplified Game Flow: Reducing DOM complexity ensures smoother animations and responsive gameplay.

Feel free to clone this project and explore the latest features. 

Enjoy the game and test your memory skills! 😊




<!-- 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
     <title>Memory Game</title>
    <link rel="stylesheet" href="index.css"> 
</head>
<body>
    <div class="board-container">
        <header>
            <h1 class="heading">Memory Flip Game</h1>
            <div class="stars-row">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> 
                <i class="fas fa-star"></i> 
                <i class="fas fa-star"></i> 
                <i class="fas fa-star"></i> 
            </div>
            <div class="game-info">
                <span id="timer">Time: 0s</span>
                <div id="score">Score: 0</div>
            </div>
        </header>

        <div id="instruction-template" class="instruction-template">
            <h2>How to Play</h2>
            <ul class="instruction-list">
                <li><strong>Step 1:</strong> Memorize the cards in 3s.</li>
                <li><strong>Step 2:</strong> Match pairs of cards.</li>
                <li><strong>Step 3:</strong> Complete the game within 1 minute to win.</li>
                <li><strong>Step 4:</strong> Score will be alloted on basis of  number of matched pairs.</li>
            </ul>
            <button id="start-game-button" class="start-btn">Start Game</button>
        </div>

        <div id="card-container" class="card-container" style="display: none;"></div>
        <div id="result-message" style="display: none;"></div>
    </div>

    <script src="app.js"></script>
</body>
</html>
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
 -->
