input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.pause(400)
    ONoff = true
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    ONoff = false
    basic.showNumber(0)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    basic.pause(500)
    basic.clearScreen()
})
let ONoff = false
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
