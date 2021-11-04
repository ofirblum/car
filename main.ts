input.onButtonPressed(Button.A, function () {
    wuKong.mecanumRun(wuKong.RunList.left, 50)
})
input.onGesture(Gesture.ScreenDown, function () {
    wuKong.mecanumRun(wuKong.RunList.stop, 0)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.mecanumRun(wuKong.RunList.Front, 50)
})
input.onButtonPressed(Button.B, function () {
    wuKong.mecanumRun(wuKong.RunList.right, 50)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
