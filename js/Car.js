class Car {
    constructor(canvas, ctx) {
        document.addEventListener("keydown", this.move);

        this.x = 0;
        this.y = 0;
        this.step = 10; // Distance in pixels to move the car each step.
        this.canvas = canvas;
        this.ctx = ctx;

        this.initImage();
        this.width = this.image.width / 4;
        this.height = this.image.height / 4;
    }

    /**
     * Initialize the image of the car.
     */
    initImage = () => {
        this.image = new Image();
        this.image.src = "./images/car.png";
        this.image.addEventListener("load", () => {
            this.x = this.canvas.width / 2 - this.image.width / 4 / 2;
            this.y = this.canvas.height - 100;
            this.draw();
        });
    }

    draw = () => {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move = event => {
        switch (event.code) {
            case "ArrowRight":
            case "KeyD":
                this.moveRight();
                break;
            case "ArrowLeft":
            case "KeyA":
                this.moveLeft();
                break;
        }
    }

    moveLeft = () => {
        // Ensure we don't move off the canvas.
        if (this.x <= 0) {
            return;
        }

        this.x += this.step;
        this.draw();
    }

    moveRight = () => {
        // Ensure we don't move off the canvas.
        if (this.x >= this.canvas.width - this.width) {
            return;
        }

        this.x += this.step;
        this.draw();
    }
}