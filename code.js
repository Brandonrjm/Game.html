// Function to simulate the game
function playGame() {
    // Generate two random numbers between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum
    let sum = die1 + die2;

    // Output message
    let message = `You rolled ${die1} and ${die2}. Total: ${sum}. `;

    // Game logic (using if/else if/else)
    if (sum === 7 || sum === 11) {
        message += "uh oh – you lose:(";
    } else if (die1 === die2 && die1 % 2 === 0) {
        message += "You WON (doubles and even)";
    } else {
        message += "You pushed";
    }

    // Output the result to the page using innerHTML
    document.getElementById("gameResult").innerHTML = message;
}

// Function that takes a parameter and outputs results
function personalizedGreeting(name) {
    // Greet the user by name
    document.getElementById("gameResult").innerHTML = `Welcome to the game, ${name}! Good luck!`;
}
