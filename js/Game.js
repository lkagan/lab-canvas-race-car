class Game {
  constructor() {
    document.addEventListener("keydown", this.move);
    this.canvas = document.querySelector("canvas");
    this.context = this.canvas.getContext("2d");
    this.car = null;
    this.setBackground();
    this.setCar();
  }

  setBackground() {
    const background = new Image();
    background.src = "./images/road.png";

    background.addEventListener("load", () => {
      this.context.drawImage(
        background,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
    });
  }

  setCar() {
    const car = new Image();
    this.car = car;
    car.src = "./images/car.png";
    car.addEventListener("load", () => {
      const displayWidth = car.width / 4;
      const startX = this.canvas.width / 2 - displayWidth / 2;
      const startY = this.canvas.height - 100;

      this.context.drawImage(car, startX, startY, displayWidth, car.height / 4);
    });
  }

  move = (event) => {
    switch (event.code) {
      case "ArrowRight":
      case "KeyD":
        this.car.x += 10; // trying to change x on undefined 'car'.
        break;
      case "ArrowLeft":
      case "KeyA":
        if (this.car.x > 0) this.car.x -= 10;
        break;
      default:
        console.log("You are not using arrow keys!");
    }
  }
}
