function _74HC4094 (value: number) {
    pins.digitalWritePin(DigitalPin.P16, 0)
    i = 1
    for (let index = 0; index < 8; index++) {
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
basic.forever(function () {
    while (true) {
        if (pins.digitalReadPin(DigitalPin.P6) == 0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
    }
    _74HC4094(15)
    basic.pause(1000)
    _74HC4094(240)
    basic.pause(1000)
})
