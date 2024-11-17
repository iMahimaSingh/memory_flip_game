* used javascript key features
- DOM manipulation to create dynamic card and element and made seamless user experience.
- eventhandler to detect the flip cards and manage state.
- array to store emojis and the cards and also to store flipped card .
- conditionals and loop used to check whether the flipped card matched  or not if not than reset it .
-settimeout to delay the execution .


![Screenshot 2024-11-16 at 8 49 55 PM](https://github.com/user-attachments/assets/e2564674-7c02-4598-a274-4de542bccaab)
![Screenshot 2024-11-16 at 8 50 54 PM](https://github.com/user-attachments/assets/cc9eb1e4-50f7-497b-972b-8660016d957b)
![Screenshot 2024-11-16 at 8 51 18 PM](https://github.com/user-attachments/assets/5299436a-061a-426a-9c05-bf5228b681e1)









 cards.addEventListener("click",function(){
        handleCardClick(cardInner,emoji,cards);
    });

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
    
}
