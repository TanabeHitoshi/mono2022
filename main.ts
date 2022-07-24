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
let カウント = 0
basic.forever(function () {
    custom.led_stepmotor(7, 0, 0)
    custom.led_stepmotor(0, 0, 0)
})
