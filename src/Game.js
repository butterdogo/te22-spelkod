import Ball from "./ball.js"
import GameObject from "./GameObject.js"
import Input from "./input.js"
import Player from "./player.js"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 50, 50, "green", this)
        this.box = new GameObject(40, 100, 200, 200, "purple")
        this.ball = new Ball(100, 200, 100, 100, "red")
    }

    update(deltaTime) {
        this.box.update(deltaTime)
        this.ball.update(deltaTime)
        this.player.update(deltaTime)
    }

    draw(ctx) {
        this.box.draw(ctx)
        this.ball.draw(ctx)
        this.player.draw(ctx)
    }
}
