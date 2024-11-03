input.onButtonPressed(Button.A, function () {
    ONoff = 1
    basic.showNumber(1)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    ONoff = 0
    basic.showNumber(0)
    basic.pause(500)
    basic.clearScreen()
})
let ONoff = 0
ONoff = 0
radio.setGroup(1)
basic.forever(function () {
    if (ONoff == 1 && input.lightLevel() > 75) {
        radio.sendNumber(1)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(200)
        basic.clearScreen()
    } else {
    	
    }
})
