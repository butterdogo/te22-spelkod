import GameObject from "./GameObject.js"
import Input from "./input.js"
import Player from "./player.js"
import Background from "./Background.js"
import UserInterface from "./UserInterface.js"



export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.gameTime = 0   
        this.ui = new UserInterface(this)
        this.input = new Input(this)
        this.player = new Player(0, 0, 60, 60, "green", this)
        this.pause = false
        this.gameOver = false
        
      //  this.platform = new GameObject(260, 300, 500, 30, "purple")
        this.background = new Background(this)
        }

    
    
        update(deltaTime) {
       // this.platform.update(deltaTime)
        this.player.update(deltaTime)
        if (this.pause) return 
        if (!this.gameOver) {
            this.gameTime += deltaTime
        }
        
    }

   

    draw(ctx) {
        this.background.draw(ctx)
        //this.platform.draw(ctx)
        this.player.draw(ctx)
        this.ui.draw(ctx)    
        
    }
}
