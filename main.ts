let hi = new texteffects.TextSprite("f",image.font5,1)
hi.updateState()
let no = image.create(100, 100)
hi.draw(no,10,10)
let mySprite = sprites.create(no, SpriteKind.Player)
game.onPaint(function(){
    screen.print("no",10,10,1)
})
