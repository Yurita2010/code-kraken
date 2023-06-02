let code = 0
if (code == 0) {
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
}
basic.forever(function () {
    if (code == 1 && (input.buttonIsPressed(Button.A) || input.logoIsPressed())) {
        basic.pause(200)
        code = 9
    }
    if (code == 2 && (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.pause(200)
        code = 9
    }
    if (code == 3 && (input.logoIsPressed() || input.buttonIsPressed(Button.B))) {
        basic.pause(200)
        code = 9
    }
    if (code == 4 && (input.logoIsPressed() || input.buttonIsPressed(Button.B))) {
        basic.pause(200)
        code = 9
    }
    if (code == 5 && (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.pause(200)
        code = 9
    }
})
basic.forever(function () {
    if (code == 9) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        code = 0
    }
    if (code == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (code == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (code == 3) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (code == 4) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (code == 5) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (code == 0 && input.buttonIsPressed(Button.A)) {
        basic.pause(200)
        code = 1
    }
    if (code == 1 && input.buttonIsPressed(Button.B)) {
        basic.pause(200)
        code = 2
    }
    if (code == 2 && input.logoIsPressed()) {
        basic.pause(200)
        code = 3
    }
    if (code == 3 && input.buttonIsPressed(Button.A)) {
        basic.pause(200)
        code = 4
    }
    if (code == 4 && input.logoIsPressed()) {
        basic.pause(200)
        code = 5
    }
})
