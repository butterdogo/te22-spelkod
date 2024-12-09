import Layer from './Layer'

export default class Background {
  constructor(game) {
    this.game = game
    this.width = 860
    this.height = 710
    this.gameon = true
    this.timer = 0
    this.timemin = 0
    this.timesec = 0
    this.timemilisec = 0
    this.ml = new Image()
    this.ml.src = "./src/assets/MG_2.png"
    this.sl = new Image()
    this.sl.src = "./src/assets/BG.png"

    this.backgroundLayers = [
      new Layer(this.game, this.width, this.height, 0.01, this.sl),
      new Layer(this.game, this.width, this.height, 1, this.ml)
    ]
  }

  while (gameon = true) {
    setTimeout(1)
    this.timemilisec += 1
    console.log(this.timemilisec)
  }

  update(deltaTime) {
    this.backgroundLayers.forEach(layer => {
      layer.update(deltaTime)
      this.timemilisec.update(deltaTime)
    })
  }

  draw(ctx) {
    this.backgroundLayers.forEach(layer => {
      layer.draw(ctx)
    })
  }

}