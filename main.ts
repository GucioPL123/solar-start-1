enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.setGroup(2)
    radio.sendMessage(RadioMessage.message1)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (ONoff == false) {
        ONoff = true
        basic.showNumber(1)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.pause(500)
        basic.clearScreen()
    } else if (ONoff == true) {
        ONoff = false
        basic.showNumber(0)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.pause(500)
        basic.clearScreen()
    }
})
let ONoff = false
radio.setTransmitPower(7)
ONoff = false
radio.setGroup(1)
loops.everyInterval(50, function () {
    if (ONoff == true && input.lightLevel() < 205) {
        radio.sendNumber(1)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(3000)
        basic.clearScreen()
    }
})
