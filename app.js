

// Variable Declaration
let previousTime = 0;
let previousFoodTime = 0;
const SNAKE_SPEED = 100;
const FOOD_SPAWN = 5000;
let snake = [];
let food = [{x: 5, y: 5}];
let movement = 'RightArrow';

let score = 0;

/**
 * Game Loop
 * @param {number} time 
 */
function game(newTime) {
    window.requestAnimationFrame(game)
    // Evaluate if the time has passed to render the next frame
    if (newTime - previousTime > SNAKE_SPEED) {
        checkFoodForSnake(snake);
        if (newTime - previousFoodTime > FOOD_SPAWN) {
            const newFood = createRandomFood();
            food.push(newFood);
            console.log(food);
            previousFoodTime = newTime;
        }
        spawnFood(food);
        
        snake = updateSnakePosition(snake, movement);
        // Check for Game Over on walls
        if (snake[0].x < 1 || snake[0].x > 25 || snake[0].y < 1 || snake[0].y > 25) {
            alert(`Game Over, your score was ${score}`);
            resetGame();
        }
        // Check for game over on snake
        for (let index = 0; index < snake.length; index++) {
            const snakePart = snake[index];
            if (index != 0 && snakePart.x === snake[0].x && snakePart.y === snake[0].y) {
                alert(`Game Over, your score was ${score}`)
                resetGame();
            }
            
        }
        previousTime = newTime; // Set the new value to the previous time
        // console.log(snake);
    }
}

function checkFoodForSnake(snake) {
    if (food.length > 0 && snake.length > 0) {
        for (const foodItem of food) {
            if (snake[0].x === foodItem.x && snake[0].y === foodItem.y) {
                snake = growSnake(snake, 1);
                food.splice(food.indexOf(foodItem),1);
                score += 1;
            }
            
        }
    }
}

function resetGame() {
    const gameContainer = document.getElementById('game');  // Get the game container
    gameContainer.innerHTML = '';
    movement = 'esc';
    snake = [];
    food = [];
    snake.push({ x: 2, y: 2 });
    score = 0;
    drawInitialSnake(snake);    // Reset the game

}




resetGame(snake);


window.requestAnimationFrame(game);

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if ((movement === 'ArrowRight' && event.key === 'ArrowLeft') || 
        (movement === 'ArrowLeft' && event.key === 'ArrowRight') ||
        (movement === 'ArrowUp' && event.key === 'ArrowDown') || 
        (movement === 'ArrowDown' && event.key === 'ArrowUp') && snake.length > 1) {
        movement = movement;
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'ArrowUp' ||
                event.key === 'ArrowDown') {
        movement = event.key;
    } 
});