class Game {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.initBackground();
    this.car = new Car(this.canvas, this.ctx);
    this.animate();
  }

  initBackground() {
    this.background = new Image();
    this.background.src = "./images/road.png";
    this.background.addEventListener("load", () => { this.drawBackground(); });
  }

  drawBackground = () => {
    this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
  }

  animate = () => {
    this.drawBackground();
    this.car.draw();
    requestAnimationFrame(this.animate);
  }
}
