

// Variable Declaration
let previousTime = 0;
const FRAME_LIMIT = 200;
let snake = [{ x: 1, y: 2 }, { x: 2, y: 2 }];
let movement = 'RightArrow';

/**
 * Game Loop
 * @param {number} time 
 */
function game(newTime) {
    window.requestAnimationFrame(game)
    // Evaluate if the time has passed to render the next frame
    if (newTime - previousTime > FRAME_LIMIT) {
        // Do updates
        snake = updateSnakePosition(snake, movement);
        previousTime = newTime; // Set the new value to the previous time
    }
}

document.addEventListener('keydown', (event) => {
    movement = event.key;

 });



window.requestAnimationFrame(game);
