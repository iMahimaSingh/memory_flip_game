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

Enjoy the game and test your memory skills! 😊