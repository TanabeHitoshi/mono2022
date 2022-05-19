
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/
enum MyEnum {
    //% block="赤"
    red,
    //% block="青"
    blue,
    //% block="緑"
    green,
    //% block="紫"
    mazenta,
    //% block="水色"
    cyan,
    //% block="黄"
    yellow,
    //% block="白"
    white,
    //% block="消灯"
    black
    }

/**
 * Custom blocks
 */
//% weight=100 color=#0f0f0f icon="\uf076" block="ものづくりコンテスト"
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
    export function フルカラーLED(R: number, G: number, B: number): void {
        FullLED_Value = R * 8 + (G * 2 + B * 4)
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
    export function fib(): void {
    }
}
