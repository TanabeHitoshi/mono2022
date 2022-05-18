function 参考 (list: any[]) {
	
}
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
function フルカラーLED (数値: number, 数値2: number, 数値3: number) {
    FullLED_Value = 数値 * 8 + (数値2 * 2 + 数値3 * 4)
    pins.digitalWritePin(DigitalPin.P15, 0)
    i = 1
    for (let index = 0; index < 8; index++) {
        tmp = Math.trunc(FullLED_Value / i)
        pins.digitalWritePin(DigitalPin.P14, tmp % 2)
        clk()
        i = i * 2
    }
    pins.digitalWritePin(DigitalPin.P15, 1)
}
let FullLED_Value = 0
let tmp = 0
let i = 0
let 黒: number[] = []
custom.initialize()
参考(黒)
basic.forever(function () {
    custom.フルカラーLED(1, 1, 1)
    basic.pause(1000)
})
