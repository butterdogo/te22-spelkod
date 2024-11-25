import Ball from "./ball.js"
import GameObject from "./GameObject.js"
import Input from "./input.js"
import Player from "./player.js"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 100, 100, "green", this)
        this.platform = new GameObject(260, 300, 500, 30, "purple")
        }

    update(deltaTime) {
        this.platform.update(deltaTime)
        this.player.update(deltaTime)
    }

    draw(ctx) {
        this.platform.draw(ctx)
        this.player.draw(ctx)
    }
}
