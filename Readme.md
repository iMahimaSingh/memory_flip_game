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






