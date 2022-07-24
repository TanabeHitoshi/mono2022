custom.config_ini()
let デジタル０１ = 1
let デジタル０２ = 2
let num = [
252,
96,
218,
242,
102,
182,
190,
228,
254,
246,
1
]
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P8, 1023)
    } else {
        if (pins.digitalReadPin(DigitalPin.P9) == 0) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.analogWritePin(AnalogPin.P12, 1023)
        } else {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
    }
})
