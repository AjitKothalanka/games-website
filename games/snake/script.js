const COLS = 26, ROWS = 26;
        const EMPTY = 0, SNAKE = 1, FRUIT = 2;
        const LEFT = 0, UP = 1, RIGHT = 2, DOWN = 3;

        const grid = {
            width: null,
            height: null,

            _grid: null,

            init: function (direction, column ,row) {
                this.width = column;
                this.height = row;
                this._grid = [];

                for (let x = 0; x < column; x++) {
                    this._grid.push([]);

                    for (let y = 0; y < row; y++) {
                        this._grid[x].push(direction);
                    }
                }
            },

            set: function (value, x, y) {
                this._grid[x][y] = value;
            },

            get: function (x, y) {
                return this._grid[x][y];
            }
        }

        const snake = {
            direction: null,
            last: null,

            _queue: null,

            init: function (direction, x, y) {
                this.direction = direction;
                this._queue = [];
                this.insert(x, y);
            },

            insert: function (x, y) {
                this._queue.unshift({ x, y });
                this.last = this._queue[0];
            },

            remove: function () {
                return this._queue.pop();
            },
        }

        function setFood() {
            const empty = [];
            for (let x = 0; x < grid.width; x++) {
                for (let y = 0; y < grid.height; y++) {
                    if (grid.get(x, y) === EMPTY) {
                        empty.push({ x, y });
                    }
                }
            }

            const randomPosition = empty[Math.floor(Math.random() * empty.length)];
            grid.set(FRUIT, randomPosition.x, randomPosition.y);
        }

        let canvas, context, keyState, frames, score;

        function main() {
            canvas = document.createElement('canvas');
            canvas.width = COLS * 20;
            canvas.height = ROWS * 20;

            context = canvas.getContext('2d');
            context.font = '12px Helvetica';

            frames = 0;
            keyState = { };

            document.addEventListener('keydown', event => keyState[event.key] = true);
            document.addEventListener('keyup', event => delete keyState[event.key]);

            document.body.appendChild(canvas);

            init();
            loop();
        }

        function init() {
            score = 0;

            grid.init(EMPTY, COLS, ROWS);

            const snakePosition = {
                x: Math.floor(COLS / 2),
                y: ROWS - 1,
            };

            snake.init(UP, snakePosition.x, snakePosition.y);
            grid.set(SNAKE, snakePosition.x, snakePosition.y);

            setFood();
        }

        function loop() {
            update();
            draw();

            window.requestAnimationFrame(loop);
        }

        function update() {
            frames++;

            checkKey();

            if (frames % 5 === 0) {
                let nextX = snake.last.x;
                let nextY = snake.last.y;

                switch (snake.direction) {
                    case LEFT:
                        nextX--;
                        break;
                    case UP:
                        nextY--;
                        break;
                    case RIGHT:
                        nextX++;
                        break;
                    case DOWN:
                        nextY++;
                        break;
                }

                if (0 > nextX || nextX > grid.width - 1 ||
                    0 > nextY || nextY > grid.height - 1 ||
                    grid.get(nextX, nextY) === SNAKE) {
                    return init();
                }

                if (grid.get(nextX, nextY) === FRUIT) {
                    ++score;
                    setFood();
                } else {
                    const tail = snake.remove();
                    grid.set(EMPTY, tail.x, tail.y);
                }

                grid.set(SNAKE, nextX, nextY);
                snake.insert(nextX, nextY);
            }
        }

        function checkKey() {
            if (keyState.ArrowLeft && snake.direction !== RIGHT) {
                snake.direction = LEFT;
            }
            if (keyState.ArrowUp && snake.direction !== DOWN) {
                snake.direction = UP;
            }
            if (keyState.ArrowRight && snake.direction !== LEFT) {
                snake.direction = RIGHT;
            }
            if (keyState.ArrowDown && snake.direction !== UP) {
                snake.direction = DOWN;
            }
        }

        function draw() {
            const targetWidth = canvas.width / grid.width;
            const targetHeight = canvas.height / grid.height;

            for (let x = 0; x < grid.width; x++) {
                for (let y = 0; y < grid.height; y++) {
                    switch (grid.get(x, y)) {
                        case EMPTY:
                            context.fillStyle = '#ffffff';
                            break;
                        case SNAKE:
                            context.fillStyle = '#008000';
                            break;
                        case FRUIT:
                            context.fillStyle = '#ff0000';
                            break;
                    }

                    context.fillRect(x * targetWidth, y * targetHeight, targetWidth, targetHeight);
                }
            }

            context.fillStyle = '#000';
            context.fillText(`SCORE: ${score}`, 10, canvas.height - 10);
        }

        main();