function _74HC4094 (value: number) {
    pins.digitalWritePin(DigitalPin.P16, 0)
    i = 1
    for (let index = 0; index < 16; index++) {
        tmp = Math.trunc(value / i)
        pins.digitalWritePin(DigitalPin.P14, tmp % 2)
        clk()
        i = i * 2
    }
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function clk () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1)
}
let tmp = 0
let i = 0
basic.clearScreen()
led.enable(false)
pins.setPull(DigitalPin.P6, PinPullMode.PullNone)
pins.setPull(DigitalPin.P7, PinPullMode.PullNone)
pins.setPull(DigitalPin.P9, PinPullMode.PullNone)
basic.forever(function () {
    _74HC4094(1000)
    basic.pause(1000)
})
