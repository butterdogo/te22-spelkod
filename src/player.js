import GameObject from "./GameObject"

export default class Player extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game

    this.image = new Image()
    this.image.src = "./src/assets/duck/idle.png"

    this.frameWidth = 64
    this.frameHeight = 64
    this.frameX = 0
    this.frameY = 0
    this.maxFrames = 4
    this.timer = 0
    this.fps = 20
    this.interval = 1000 / this.fps

    this.speedX = 0
    this.speedY = 0
    this.maxSpeedX = 0.1
    this.jumpSpeed = 20
    this.color = "255, 0, 0"
  }

  update(deltaTime) {
    if (this.game.input.keys.has("ArrowLeft")) {
      this.speedX -= this.maxSpeedX
      this.flip = true
    }
    if (this.game.input.keys.has("ArrowRight")) {
      this.speedX += this.maxSpeedX
      this.flip = false
    }

    if (this.y >= 320) {
      this.speedY = 0
      this.y = 320
      if (this.game.input.keys.has("ArrowUp")) {
        this.speedY -= 16
      }
      if (this.game.input.keys.has("ArrowRight") && this.game.input.keys.has("ArrowLeft") || !this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft") || this.speedX > 0 && this.game.input.keys.has("ArrowLeft") || this.speedX < 0 && this.game.input.keys.has("ArrowRight")) {
        this.speedX *= 0.8
        if (this.speedX < 0.01 && this.speedX > -0.01) {
          this.speedX = 0
        }
      }
    }
    else {
      this.speedY += 1
    }



    this.x += this.speedX
    this.y += this.speedY

    

    if (this.speedX != 0) {
      this.image.src = "./src/assets/duck/walk.png"
      this.maxFrames = 4
    } else {
      this.image.src = "./src/assets/duck/idle.png"
      this.maxFrames = 4
    }

    if (this.speedY < 0) {
      this.image.src = "./src/assets/duck/jump.png"
      this.maxFrames = 4
    }

    if (this.speedY > 1) {
      this.image.src = "./src/assets/duck/fall.png"
      this.maxFrames = 1
    }
    if (this.game.input.keys.has("ArrowDown")) {
      this.image.src = "./src/assets/duck/crouch.png"
      this.maxFrames = 1
    }
    if (this.game.input.keys.has("ArrowDown") && this.game.input.keys.has("ArrowRight")) {  
      this.image.src = "./src/assets/duck/crawl.png"
      this.maxFrames = 4
    }
    if (this.game.input.keys.has("ArrowDown") && this.game.input.keys.has("ArrowLeft")) {  
      this.image.src = "./src/assets/duck/crawl.png"
      this.maxFrames = 4
    }
    if (this.game.input.keys.has("c")){
      this.image.src = "./src/assets/duck/right_hook.png"
      this.maxFrames = 4
    }
   


    // Simulate ground plane
    if (this.y > 320) {
      this.y = 320
      this.speedY = 0
      this.grounded = true
    }

  

    if (this.timer > this.interval) {
      this.frameX++
      this.timer = 0
    } else {
      this.timer += deltaTime
    }

    if (this.frameX >= this.maxFrames) {
      this.frameX = 0
    }


  }

  draw(ctx) {

    //ctx.drawImage(this.image, this.x, this.y, this.width, this.height)

    if (this.flip) {
      ctx.save()
      ctx.scale(-1, 1)
    }

    ctx.drawImage(
      this.image,
      this.frameWidth * this.frameX,
      this.frameHeight * this.frameY,
      this.frameWidth,
      this.frameHeight,
      this.flip ? this.x * -1 - this.width : this.x,
      this.y,
      this.width,
      this.height,
    )
    if (this.flip) {
      ctx.restore()
    }
  }

}

