
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
enum LED_view {
    //% block="消灯"
    black,
    //% block="そのまま"
    pre,
    //% block="H"
    Hi,
    //% block="L"
    Low,
    //% block="-"
    minus,
    //% block="0"
    zero,
    //% block="1"
    one,
    //% block="2"
    two,
    //% block="3"
    three,
    //% block="4"
    four,
    //% block="5"
    five,
    //% block="6"
    six,
    //% block="7"
    seven,
    //% block="8"
    eight,
    //% block="9"
    nine,
    //% block="A"
    a,
    //% block="b"
    b,
    //% block="c"
    c,
    //% block="d"
    d,
    //% block="E"
    e,
    //% block="F"
    f

}
enum io {
    //% block="デジタル０１"
    digital01,
    //% block="デジタル０２"
    digital02,
    //% block="アナログ０３"
    analog03,
    //% block="アナログ０４"
    analog04,
}
enum step_speed {
    //% block="遅い"
    low,
    //% block="普通"
    mid,
    //% block="速い"
    hi
}
enum step_dir {
    //% block="正転"
    cw,
    //% block="逆転"
    ccw
}
enum tone {
    //% block="低音"
    low,
    //% block="中音"
    mid,
    //% block="高音"
    hi
}
let pre_led_value:number
let FullLED_Value:number
let Step:number
let FullStep:number
let seg_l:number
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
    export function initialize(): void {
        // Add code here
        basic.clearScreen()
        led.enable(false)
        pins.setPull(DigitalPin.P6, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P7, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P9, PinPullMode.PullNone)
        FullStep = 0
        Step = 0
    }
    //% block
    export function 入力(i:io):any {
        switch(i){
            case io.digital01:
                return pins.digitalReadPin(DigitalPin.P7)
            break;
            case io.digital02:
                return pins.digitalReadPin(DigitalPin.P6)
            break;
            case io.analog03:
                return pins.analogReadPin(AnalogPin.P4)
            break;
            case io.analog04:
                return pins.analogReadPin(AnalogPin.P3)
                break;
        }
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
        serial.writeValue("f", FullLED_Value)
        serial.writeValue("s", Step)
        FullStep = FullLED_Value + Step
        pins.digitalWritePin(DigitalPin.P15, 0)
        let i = 1
        for (let index = 0; index < 8; index++) {
            let tmp = Math.trunc(FullStep / i)
            pins.digitalWritePin(DigitalPin.P14, tmp % 2)
            clk()
            i = i * 2
        }
        pins.digitalWritePin(DigitalPin.P15, 1)

    }
    //% block
    export function ステッピングモータ(s:step_speed,d:step_dir): void {
		let value
        if(d==step_dir.cw){
            Step = 128
        }else{
            Step = 16
        }
        let i = 1
		for(let j=0;j<4;j++){
            serial.writeValue("f", FullLED_Value)
            serial.writeValue("s", Step)
            FullStep = FullLED_Value + Step
            
           pins.digitalWritePin(DigitalPin.P15, 0)
	        for (let index = 0; index < 8; index++) {
                let tmp = Math.trunc(FullStep / i)
	            pins.digitalWritePin(DigitalPin.P14, tmp % 2)
	            clk()
	            i = i * 2
	        }
            pins.digitalWritePin(DigitalPin.P15, 1)

            i=1
            if (d == step_dir.cw) {
                Step /= 2
                if(Step < 16){
                    Step = 0
                }
            } else {
                Step *= 2
                if (Step > 256) {
                    Step = 0
                }
            }
            if(s==step_speed.low){
                basic.pause(200)
            } else if (s == step_speed.mid){
                basic.pause(100)
            }else{
                basic.pause(0)
            }
            
		}
    }        
    //% block
    export function ステッピングモータ角度(deg: number): void {
        let value
        let n
        if (deg > 0) {
            value = 128
            n = deg / 1.25
        } else {
            value = 16
            n = -deg / 1.25
        }

        let i = 1
        for (let j = 0; j < n; j++) {
            pins.digitalWritePin(DigitalPin.P15, 0)
            for (let index = 0; index < 8; index++) {
                let tmp = Math.trunc(value / i)
                pins.digitalWritePin(DigitalPin.P14, tmp % 2)
                clk()
                i = i * 2
            }
            pins.digitalWritePin(DigitalPin.P15, 1)
            i = 1
            if (deg > 0) {
                value /= 2
                if (value < 16) {
                    value = 128
                }
            } else {
                value *= 2
                if (value > 128) {
                    value = 16
                }
            }

        }
    }

    //% block
    export function 音(m: tone): void {
        switch (m) {
            case tone.hi:
                music.ringTone(698)
                break;
            case tone.mid:
                music.ringTone(349)
                break;
            case tone.low:
                music.ringTone(175)
                break;
        }
    }

    //% block
    export function モニタ(): void {
        serial.writeNumbers([
            pins.analogReadPin(AnalogPin.P3),
            pins.analogReadPin(AnalogPin.P4),
            pins.digitalReadPin(DigitalPin.P6),
            pins.digitalReadPin(DigitalPin.P7)
        ])
        basic.pause(1000)
    }
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //%
    export function clk(): void {
        pins.digitalWritePin(DigitalPin.P13, 0)
        basic.pause(1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(1)
    }
    //%
    export function _74HC595(value:number): void {
        pins.digitalWritePin(DigitalPin.P16, 0)
        let i = 1
        for (let index = 0; index < 16; index++) {
            let tmp = Math.trunc(value / i)
            pins.digitalWritePin(DigitalPin.P14, tmp % 2)
            clk()
            i = i * 2
        }
        pins.digitalWritePin(DigitalPin.P16, 1)

    }
    //% block
    export function モーター(value: number): void {
        if(value==0){
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
        }else if(value>0){
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.analogWritePin(AnalogPin.P12, value)
        }else{
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.analogWritePin(AnalogPin.P8, Math.abs(value))
        }
    }

    //% block
    export function セグメントＬＥＤ(led_l: LED_view, led_r: LED_view): void {
        let led_value
        if(led_l ==LED_view.pre){
            led_l = seg_l
        }else{
            seg_l = led_l
        }
        if (led_r == LED_view.pre) {
            led_r = seg_r
        }else{
            seg_r = led_r
        }

        switch(led_l){
            case LED_view.black:
                led_value = 0
            break;
            case LED_view.Hi:
                led_value = 110
            break;
            case LED_view.Low:
                led_value = 28
            break;
            case LED_view.minus:
                led_value = 2
            break;
            case LED_view.zero:
                led_value = 252
            break;
            case LED_view.one:
                led_value = 96
            break; 
            case LED_view.two:
                led_value = 218
            break; 
            case LED_view.three:
                led_value = 242
            break; 
            case LED_view.four:
                led_value = 102
            break; 
            case LED_view.five:
                led_value = 182
            break; 
            case LED_view.six:
                led_value = 190
            break; 
            case LED_view.seven:
                led_value = 228
            break; 
            case LED_view.eight:
                led_value = 254
            break; 
            case LED_view.nine:
                led_value = 246
            break; 
            case LED_view.a:
                led_value = 238
            break; 
            case LED_view.b:
                led_value = 62
            break; 
            case LED_view.c:
                led_value = 26
            break; 
            case LED_view.d:
                led_value = 122
            break; 
            case LED_view.e:
                led_value = 158
            break; 
            case LED_view.f:
                led_value = 142
            break;
        }
        switch (led_r) {
            case LED_view.black:
                led_value += 0 * 256
            break;
            case LED_view.Hi:
                led_value += 110*256
                break;
            case LED_view.Low:
                led_value += 28 * 256
                break;
            case LED_view.minus:
                led_value += 2
                break;
             case LED_view.zero:
                led_value += 252 * 256
                break;
            case LED_view.one:
                led_value += 96 * 256
                break;
            case LED_view.two:
                led_value += 218 * 256
                break;
            case LED_view.three:
                led_value += 242 * 256
                break;
            case LED_view.four:
                led_value += 102*256
                break;
            case LED_view.five:
                led_value += 182 * 256
                break;
            case LED_view.six:
                led_value += 190 * 256
                break;
            case LED_view.seven:
                led_value += 228 * 256
                break;
            case LED_view.eight:
                led_value += 254 * 256
                break;
            case LED_view.nine:
                led_value += 246 * 256
                break;
            case LED_view.a:
                led_value += 238 * 256
                break;
            case LED_view.b:
                led_value += 62 * 256
                break;
            case LED_view.c:
                led_value += 26 * 256
                break;
            case LED_view.d:
                led_value += 122 * 256
                break;
            case LED_view.e:
                led_value += 158 * 256
                break;
            case LED_view.f:
                led_value += 142 * 256
                break;
        }
        if(led_value != pre_led_value){
            _74HC595(led_value)
        }
        pre_led_value = led_value
    }

}
