let code = 0
basic.showLeds(`
    . # # # .
    # . . . .
    # . . . .
    # . . . .
    . # # # .
    `)
basic.forever(function () {
    if (code == 0 && input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(200)
        code += 1
    }
    if (code == 1 && input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(200)
        code += 2
    }
    if (code == 3 && input.logoIsPressed()) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(200)
        code += 3
    }
    if (code == 6 && input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(200)
        code += 4
    }
    if (code == 10 && input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(200)
        code += 5
    }
})
