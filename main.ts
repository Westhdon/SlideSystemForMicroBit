input.onButtonPressed(Button.A, function () {
    Slide += 1
})
input.onButtonPressed(Button.B, function () {
    Slide += -1
})
let Slide = 0
/**
 * This Is Icon For Your Slide
 */
basic.forever(function () {
    serial.writeLine("" + (Slide))
    if (Slide == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (Slide == 2) {
        basic.showIcon(IconNames.SmallHeart)
    }
    if (Slide == 3) {
        basic.showIcon(IconNames.Yes)
    }
    if (Slide == 4) {
        basic.showIcon(IconNames.No)
    }
    if (Slide == 5) {
        basic.showIcon(IconNames.Happy)
    }
    if (Slide == 6) {
        Slide = 1
    }
    if (Slide == -1) {
        Slide = 1
    }
})
/**
 * This Is Logic For Your Slide
 */
basic.forever(function () {
    if (Slide == 1 && input.buttonIsPressed(Button.AB)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    }
    if (Slide == 2 && input.buttonIsPressed(Button.AB)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
    if (Slide == 3 && input.buttonIsPressed(Button.AB)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    }
    if (Slide == 4 && input.buttonIsPressed(Button.AB)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
    }
    if (Slide == 5 && input.buttonIsPressed(Button.AB)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
    }
    if (Slide == 6) {
        Slide = 1
    }
    if (Slide == -1) {
        Slide = 1
    }
})
