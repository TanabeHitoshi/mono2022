function 入力 (数値: number) {
    if (数値 == 1) {
        入力値 = pins.digitalReadPin(DigitalPin.P7)
    } else if (数値 == 2) {
        入力値 = pins.digitalReadPin(DigitalPin.P6)
    } else if (数値 == 3) {
        入力値 = pins.analogReadPin(AnalogPin.P4)
    } else if (数値 == 4) {
        入力値 = pins.analogReadPin(AnalogPin.P3)
    } else {
    	
    }
    return 入力値
}
let 入力値 = 0
custom.initialize()
let デジタル０１ = 1
let デジタル０２ = 2
let アナログ０３ = 3
let アナログ０４ = 4
basic.forever(function () {
    custom.セグメントＬＥＤ(LED_view.Hi, LED_view.Low)
})
