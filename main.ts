OSOYOO_IR_BLACK.onPressEvent(RemoteButton.OK, function () {
    OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM5, function () {
    OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.Yellow)
    OSOYOO_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM2, function () {
    OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.Green)
    OSOYOO_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM3, function () {
    OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.Blue)
    OSOYOO_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM4, function () {
    OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.White)
    OSOYOO_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.White))
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.STAR, function () {
    OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
    mode += 1
    if (mode > 2) {
        mode = 0
    }
    if (mode == 0) {
        basic.showIcon(IconNames.Happy)
    }
    if (mode == 1) {
        basic.showIcon(IconNames.Asleep)
    }
    if (mode == 2) {
        basic.showIcon(IconNames.Angry)
    }
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.UP, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        `)
    OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Run)
    if (mode == 0) {
        basic.pause(200)
        OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
    }
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.RIGHT, function () {
    basic.showLeds(`
        . . # . .
        . . # # .
        . . # # #
        . . # # .
        . . # . .
        `)
    OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_SpinRight)
    if (mode == 0) {
        basic.pause(200)
        OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
    }
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM6, function () {
    OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.Pinkish)
    OSOYOO_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM0, function () {
    OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
    OSOYOO_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Black))
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.LEFT, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # . .
        . # # . .
        . . # . .
        `)
    OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_SpinLeft)
    if (mode == 0) {
        basic.pause(200)
        OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
    }
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.DOWN, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . # # # .
        . . # . .
        `)
    OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Back)
    if (mode == 0) {
        basic.pause(200)
        OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
    }
})
OSOYOO_IR_BLACK.onPressEvent(RemoteButton.NUM1, function () {
    OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.Red)
    OSOYOO_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
})
let mode = 0
basic.showIcon(IconNames.Happy)
OSOYOO_IR_BLACK.init(Pins.P8)
basic.forever(function () {
    if (mode == 2) {
        if (OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.LeftState, OSOYOO_Robot.enLineState.White) && OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.RightState, OSOYOO_Robot.enLineState.White)) {
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Run, 80)
        } else if (OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.LeftState, OSOYOO_Robot.enLineState.White) && OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.RightState, OSOYOO_Robot.enLineState.Black)) {
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinLeft, 80)
        } else if (OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.LeftState, OSOYOO_Robot.enLineState.Black) && OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.RightState, OSOYOO_Robot.enLineState.White)) {
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinRight, 80)
        } else {
            OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
        }
    }
})
