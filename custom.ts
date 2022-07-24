
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

let pre_led_value: number
let pre_numeric: number
let pre_FullLED_Value: number
let Step: number
let FullStep: number
let seg_l: number
let seg_r: number

/**
 * Custom blocks
 */
//% weight=100 color=#008080 icon="\uf076" block="ものづくりコンテスト"
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="初期化"
    export function config_ini(): void {
        // Add code here
        basic.clearScreen()
        led.enable(false)
        pins.setPull(DigitalPin.P6, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P7, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P9, PinPullMode.PullNone)
//        フルカラーLED(color_type.black)
        serial.writeNumbers([
            pins.digitalReadPin(DigitalPin.P9),
            pins.analogReadPin(AnalogPin.P3),
            pins.analogReadPin(AnalogPin.P4),
            pins.digitalReadPin(DigitalPin.P6),
            pins.digitalReadPin(DigitalPin.P7)
        ])
        disp(-1, 0, 0)
        led_stepmotor(0, 0, 0)
//        モーター(0)
//        FullStep = 0
//        Step = 0
    }
    //% block
    export function led_stepmotor(c: number, s: number,deg:number): void {
     //フルカラーＬＥＤ
        let FullLED_Value
        switch (c) {
            case 0:
                FullLED_Value = 0
                break;
            case 1:
                FullLED_Value = 8
                break;
            case 2:
                FullLED_Value = 4
                break;
            case 3:
                FullLED_Value = 2
                break;
            case 5:
                FullLED_Value = 12
                break;
            case 6:
                FullLED_Value = 6
                break;
            case 4:
                FullLED_Value = 10
                break;
            case 7:
                FullLED_Value = 14
                break;
        }
        //ステッピングモーター
        let value
        let n
        if (deg > 0) {
            Step = 128
            n = deg / 1.25
            if(s<0){
                s=-s
            }
        } else if(deg < 0){
            Step = 16
            n = -deg / 1.25
            if (s > 0) {
                s = -s
            }
        }else{
            if (s > 0) {
                Step = 128
            } else {
                Step = 16
            }
            n=4
        }
        let i = 1
        for (let j = 0; j < n; j++) {
            if(j == 1){
//                FullLED_Value = 0
            }
            if(s == 0){
                FullStep = FullLED_Value
            }else{
                FullStep = FullLED_Value + Step
            }
                pins.digitalWritePin(DigitalPin.P15, 0)
                for (let index = 0; index < 8; index++) {
                    let tmp = Math.trunc(FullStep / i)
                    pins.digitalWritePin(DigitalPin.P14, tmp % 2)

                    //クロック発振
                    pins.digitalWritePin(DigitalPin.P13, 0)
                    basic.pause(1)
                    pins.digitalWritePin(DigitalPin.P13, 1)
                    basic.pause(1)

                    i = i * 2
                }
                pins.digitalWritePin(DigitalPin.P15, 1)

                i = 1
                if (s > 0) {
                    Step /= 2
                    if (Step < 16) {
                        Step = 128
                    }
                } else {
                    Step *= 2
                    if (Step > 128) {
                        Step = 16
                    }
                }
            if(s == 0){
//                basic.pause(0)
            }else if(s > 0){
                basic.pause(1000/s)
            }else{
                basic.pause(-1000 / s)
            }
          
        }
    }
 
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //%

    export function serial_init(value: number): void {
        pins.digitalWritePin(DigitalPin.P16, 0)
        let i = 1
        for (let index = 0; index < 16; index++) {
            let tmp = Math.trunc(value / i)
            pins.digitalWritePin(DigitalPin.P14, tmp % 2)
            //クロック発生
            pins.digitalWritePin(DigitalPin.P13, 0)
            basic.pause(1)
            pins.digitalWritePin(DigitalPin.P13, 1)
            basic.pause(1)
            i = i * 2
        }
        pins.digitalWritePin(DigitalPin.P16, 1)

    }
    //% block
    export function disp(numeric: number,led_l: number, led_r: number): void {

        let led_value
        if (numeric > 100) {
            numeric = 99
        }
        if(numeric < 0){
            led_value = led_l + led_r * 256
        }else{
        let numeric_l = Math.floor(numeric / 10)
        switch (numeric_l) {
            case 0:
                led_value = 0
                break;
            case 1:
                led_value = 96
                break;
            case 2:
                led_value = 218
                break;
            case 3:
                led_value = 242
                break;
            case 4:
                led_value = 102
                break;
            case 5:
                led_value = 182
                break;
            case 6:
                led_value = 190
                break;
            case 7:
                led_value = 228
                break;
            case 8:
                led_value = 254
                break;
            case 9:
                led_value = 246
                break;
        }
        let numeric_r = numeric % 10
        switch (numeric_r) {
            case 0:
                led_value += 252 * 256
                break;
            case 1:
                led_value += 96 * 256
                break;
            case 2:
                led_value += 218 * 256
                break;
            case 3:
                led_value += 242 * 256
                break;
            case 4:
                led_value += 102 * 256
                break;
            case 5:
                led_value += 182 * 256
                break;
            case 6:
                led_value += 190 * 256
                break;
            case 7:
                led_value += 228 * 256
                break;
            case 8:
                led_value += 254 * 256
                break;
            case 9:
                led_value += 246 * 256
                break;
        }
        }
        if (led_value != pre_led_value) {
            serial_init(led_value)
            pre_numeric = 100
        }
        pre_led_value = led_value
    }
}
