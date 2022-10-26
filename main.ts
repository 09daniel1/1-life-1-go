function ChangeLevel2 (Levelnum: number) {
    if (Levelnum == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (Levelnum == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (Levelnum == 2) {
        tiles.setCurrentTilemap(tilemap`level4`)
    }
    tiles.placeOnRandomTile(player_1, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Player_2, sprites.dungeon.floorDarkDiamond)
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    projectionx = 200
    Projectiony = 0
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 4 4 4 4 4 4 4 f . . . . 
        . . f 4 5 5 5 5 5 5 5 4 f . . . 
        . f 4 5 5 5 5 5 5 5 5 5 4 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 4 5 5 5 5 5 5 5 5 5 4 f . . 
        . . f 4 5 5 5 5 5 5 5 4 f . . . 
        . . . f 4 4 4 4 4 4 4 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, player_1, 50, 0)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Projectiony = 0
    Projectiony = 200
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    game.over(true)
})
function ChangeLevel (Levelnum: number) {
    if (Levelnum == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (Levelnum == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (Levelnum == 2) {
        tiles.setCurrentTilemap(tilemap`level4`)
    }
    tiles.placeOnRandomTile(player_1, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(Player_2, sprites.dungeon.floorDarkDiamond)
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    projectionx = 200
    Projectiony = 0
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    projectionx = 0
    Projectiony = -200
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    projectionx = -200
    Projectiony = 0
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    projectionx = 0
    Projectiony = -200
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . d d 5 1 1 1 1 1 1 1 5 d d . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Player_2, 50, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    CurrentLevel += 1
    scene.cameraShake(4, 500)
    ChangeLevel(CurrentLevel)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.over(true)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    projectionx = -200
    Projectiony = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(35, 5), sprites.dungeon.doorOpenEast)
    tiles.setWallAt(tiles.getTileLocation(35, 5), false)
    tiles.setTileAt(tiles.getTileLocation(1, 34), sprites.dungeon.buttonTealDepressed)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Projectiony = 0
    Projectiony = 200
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    EnemyBat.destroy(effects.warmRadial, 500)
})
let EnemyBat: Sprite = null
let CurrentLevel = 0
let projectile: Sprite = null
let Projectiony = 0
let projectionx = 0
let Levelnum = 0
let Player_2: Sprite = null
let player_1: Sprite = null
player_1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Player_2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 5 5 f f f . . . . 
    . . . f f f 5 5 5 5 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 5 5 5 5 5 5 e e f . . 
    . . f e 5 f f f f f f 5 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 5 5 5 5 5 5 f 4 e . . 
    . . 4 d f 5 5 5 5 5 5 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(Player_2)
controller.player1.moveSprite(player_1)
player_1.setStayInScreen(true)
Player_2.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(player_1)
scene.cameraFollowSprite(Player_2)
tiles.placeOnRandomTile(player_1, sprites.dungeon.floorDarkDiamond)
tiles.placeOnRandomTile(Player_2, sprites.dungeon.floorDarkDiamond)
info.setLife(1)
game.onUpdateInterval(5000, function () {
    EnemyBat = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    EnemyBat.follow(player_1)
})
game.onUpdateInterval(5000, function () {
    EnemyBat = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    EnemyBat.follow(Player_2)
})
