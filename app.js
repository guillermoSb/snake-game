
const SNAKE_SPEED = 1000;
let previousTime = 0;
let time = 0;
let snake = [{ x: 1, y: 1 }];
// Spawn the first snake 
const gameContainer = document.getElementById('game');
// Add the item to the game
const snakeElement = document.createElement('div');
snakeElement.className = 'item';
gameContainer.appendChild(snakeElement)

/**
 * Game Loop
 * @param {number} time 
 */
function game(newTime) {
    time = newTime;
    window.requestAnimationFrame(game)
}

document.addEventListener('keydown', function (event) {
    if (time - previousTime > SNAKE_SPEED) {
        // Move the snake
        switch (event.key) {
            case 'ArrowRight':
                snake[0].x += 1;
                break;
            case 'ArrowDown':
                snake[0].y += 1;
                break;
            case 'ArrowUp':
                snake[0].y -= 1;
                break;
            case 'ArrowLeft':
                snake[0].x -= 1;
                break;
            default:
                break;

        }
        snakeElement.style.gridColumn = snake[0].x;
        snakeElement.style.gridRow = snake[0].y;
        previousTime = time;
    } else { return }

})


window.requestAnimationFrame(game);
