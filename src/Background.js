import Layer from './Layer'

export default class Background {
  constructor(game) {
    this.game = game
    this.width = 860
    this.height = 710

   
    this.ml = new Image()
    this.ml.src = "./src/assets/MG_2.png"
    this.sl = new Image()
    this.sl.src = "./src/assets/BG.png"

    this.backgroundLayers = [
      new Layer(this.game, this.width, this.height, 0.11, this.sl),
      new Layer(this.game, this.width, this.height, 1, this.ml)
    ]
  }

  update(deltaTime) {
    this.backgroundLayers.forEach(layer => {
      layer.update(deltaTime)
    })
  }

  draw(ctx) {
    this.backgroundLayers.forEach(layer => {
      layer.draw(ctx)
    })
  }

}