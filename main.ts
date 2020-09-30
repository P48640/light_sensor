let light2 = 0
input.onButtonPressed(Button.A, function () {
    light2 = input.lightLevel()
    if (light2 <= 85) {
        basic.showNumber(light2)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (light2 > 85 && light2 <= 170) {
        basic.showNumber(light2)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (light2 > 170 && light2 <= 255) {
        basic.showNumber(light2)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
	
})
