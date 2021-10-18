
/**
 * 
 * @param {{x: number, y:number}[]} snake 
 * @param {string} movement 
 */
function updateSnakePosition(snake, movement) {

    // Calculate snake position
    if (movement === 'ArrowRight') {
        snake = moveSnake(snake, 'right');
    } else if (movement === 'ArrowLeft') {
        snake = moveSnake(snake, 'left');
    } else if (movement === 'ArrowUp') {
        snake = moveSnake(snake, 'up');
    } else if (movement === 'ArrowDown') {
        snake = moveSnake(snake, 'down');
    };

    return snake;
}

/**
 * Draws the initial snake
 * @param {*} snake 
 */
function drawInitialSnake(snake) {
    const gameContainer = document.getElementById('game');  // Get the game container
    // Update the snake on the HTML
    for (const snakepart of snake) {
        const snakeElement = document.createElement('div'); // Create the new snake element
        snakeElement.className = 'item-snake ';
        snakeElement.style.gridColumn = snakepart.x;
        snakeElement.style.gridRow = snakepart.y;
        gameContainer.appendChild(snakeElement);
    }
}

/**
 * 
 * @param {{x: number, y:number}[]} snake 
 * @param {number} count 
 */
function growSnake(snake, count) {
    const gameContainer = document.getElementById('game');  // Get the game container
    for (let index = 0; index < count; index++) {
        // * 1. Get last element
        snake.push(snake[snake.length - 1]);
        const snakeElement = document.createElement('div'); // Create the new snake element
        snakeElement.className = 'item-snake ';
        snakeElement.style.gridColumn = snake[snake.length - 1].x;
        snakeElement.style.gridRow = snake[snake.length - 1].y;
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
    const gameContainer = document.getElementById('game');  // Get the game container
    const snakeParts = gameContainer.getElementsByClassName('item-snake');
    snakeParts[snakeParts.length - 1].remove(); // Remove the last snake parts
    const firstNode = {...snake[0]};
    // * 2. Calculate new position
    if (direction === 'right') {
        firstNode.x += 1;
    } else if (direction === 'left') {
        firstNode.x -= 1;
    } else if (direction === 'up') {
        firstNode.y -= 1;
    } else if (direction === 'down') {
        firstNode.y += 1;
    }
    let lastNode = snake.pop();
    lastNode = firstNode;
    const snakeElement = document.createElement('div'); // Create the new snake element
    snakeElement.className = 'item-snake';
    snakeElement.style.gridColumn = lastNode.x;
    snakeElement.style.gridRow = lastNode.y;
    gameContainer.prepend(snakeElement);

    let newSnake = [...snake];
    newSnake.unshift(lastNode);

    return newSnake;



}



