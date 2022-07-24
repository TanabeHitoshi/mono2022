custom.config_ini()
let 上下 = 3
let 左右 = 4
let デジタル０１ = 6
let デジタル０２ = 7
let 本体タクト = 9
let モーター_1 = 8
let モーター_2 = 12
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
0
]
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) >= 600) {
        custom.led_stepmotor(color_type.black, pins.analogReadPin(AnalogPin.P3), 5)
    } else if (pins.analogReadPin(AnalogPin.P3) <= 400) {
        custom.led_stepmotor(color_type.black, 1000 - pins.analogReadPin(AnalogPin.P3), 5)
    } else {
        custom.led_stepmotor(color_type.black, 0, 0)
    }
})
