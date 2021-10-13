
/**
 * 
 * @param {{x: number, y:number}[]} snake 
 * @param {string} movement 
 */
function updateSnakePosition(snake, movement) {
    const gameContainer = document.getElementById('game');  // Get the game container
    // Calculate snake position
    if (movement === 'ArrowRight') {
        moveSnake(snake, 'right');
    } else if (movement === 'ArrowLeft') {
        moveSnake(snake, 'left');
    } else if (movement === 'ArrowUp') {
        moveSnake(snake, 'up');
    } else if (movement === 'ArrowDown') {
        moveSnake(snake, 'down');
    };
    // clean the whole snake
    const items = document.getElementsByClassName('item');
    for (const item of items) {
        item.remove();
    }
    // Update the snake on the HTML
    for (const snakepart of snake) {
        const snakeElement = document.createElement('div'); // Create the new snake element
        snakeElement.className = 'item';
        snakeElement.style.gridColumn = snakepart.x;
        snakeElement.style.gridRow = snakepart.y;
        gameContainer.appendChild(snakeElement);
    }
    return snake;
}




/**
 * 
 * @param {{x: number, y:number}[]} snake 
 * @param {string} direction 
 */
function moveSnake(snake, direction) {
    let previousPostion = {x: 0, y: 0}
    for (let index = 0; index < snake.length; index++) {
        const snakePart = snake[index];
        if (index === 0) {
            if (direction === 'right') {
                snake[index].x += 1;
            } else if (direction === 'left') {
                snake[index].x -= 1;
            } else if (direction === 'up') {
                snake[index].y -= 1;
            }  else if (direction === 'down') {
                snake[index].y += 1;
            }
        } else {
            snake[index] = previousPostion;
        }
        
        
        previousPostion = snakePart;
    }
}



