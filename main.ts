input.onButtonPressed(Button.A, function () {
    ONoff = true
    basic.showNumber(1)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    ONoff = false
    basic.showNumber(0)
    basic.pause(500)
    basic.clearScreen()
})
let ONoff = false
ONoff = false
radio.setGroup(1)
basic.forever(function () {
    if (ONoff == true && input.lightLevel() < 205) {
        radio.sendNumber(1)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else if (ONoff == true) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
    } else {
    	
    }
})
