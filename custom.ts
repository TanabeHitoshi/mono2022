
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/
enum color_type {
    //% block="消灯"
    black,
    //% block="赤"
    red,
    //% block="青"
    blue,
    //% block="緑"
    green,
    //% block="紫"
    magenta,
    //% block="水色"
    cyan,
    //% block="黄"
    yellow,
    //% block="白"
    white
    }

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
    export function initialize(): void {
        // Add code here
        basic.clearScreen()
        led.enable(false)
        pins.setPull(DigitalPin.P6, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P7, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P9, PinPullMode.PullNone)
    }

    //% block
    export function フルカラーLED(c:color_type): void {
        switch(c){
            case color_type.black:
                FullLED_Value = 0
            break;
            case color_type.red:
                FullLED_Value= 8
            break;
            case color_type.blue:
                FullLED_Value= 4
            break;
            case color_type.green:
                FullLED_Value = 2
            break;
            case color_type.magenta:
                FullLED_Value = 12
            break;
            case color_type.cyan:
                FullLED_Value = 6
            break;
            case color_type.yellow:
                FullLED_Value = 10
            break;
            case color_type.white:
                FullLED_Value = 14
            break;
        }
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

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function _74HC595(value:number): void {
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
}
