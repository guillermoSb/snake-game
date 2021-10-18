

function spawnFood(food) {
    const gameContainer = document.getElementById('game');  // Get the game container
    const foodItems = gameContainer.getElementsByClassName('item-food');
    for (const food of foodItems) {
        food.remove();
    }

    // Update the snake on the HTML
    for (const foodPart of food) {
        const foodElement = document.createElement('div'); // Create the new snake element
        foodElement.className = 'item-food';
        foodElement.style.gridColumn = foodPart.x;
        foodElement.style.gridRow = foodPart.y;
        gameContainer.appendChild(foodElement);
    }
}

function createRandomFood() {
    const randomValue = Math.floor(Math.random() * 5) + 5
    // Check if the condition is met for spawning a need food

    console.log('spawn food');
    // Spawn a new food
    const foodX = Math.floor(Math.random() * 25) + 0;
    const foodY = Math.floor(Math.random() * 25) + 0;
    console.log(foodX, foodY);
    return {
        x: foodX,
        y: foodY
    }


}