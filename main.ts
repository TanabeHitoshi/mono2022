function 問題6 () {
    カウンタ = 0
    while (true) {
        if (custom.入力(io.digital02) == custom.出力(out.UP)) {
            custom.セグメント数値(カウンタ)
        } else {
            custom.セグメントＬＥＤ(LED_view.black, LED_view.black)
            カウンタ = 0
        }
        if (custom.入力(io.digital01) == custom.出力(out.ON)) {
            カウンタ += 1
            basic.pause(50)
        }
    }
}
function 問題9 () {
    パターン = 0
    カウンタ = 0
    while (true) {
        if (custom.入力(io.analog04) > 300) {
            パターン = 10
        } else {
            パターン = 0
        }
        if (パターン == 0) {
            custom.セグメントＬＥＤ(LED_view.black, LED_view.black)
            custom.フルカラーLED(color_type.black)
            カウンタ = 0
        }
        if (パターン == 10) {
            カウンタ += 1
            if (カウンタ >= 4) {
                カウンタ = 1
            }
            custom.セグメント数値(カウンタ)
            basic.pause(500)
            if (custom.入力(io.digital01) == custom.出力(out.ON)) {
                パターン = 20
            }
        }
        if (パターン == 20) {
            while (custom.入力(io.digital01) == custom.出力(out.ON)) {
                if (カウンタ == 1) {
                    custom.フルカラーLED(color_type.red)
                    basic.pause(200)
                    custom.フルカラーLED(color_type.black)
                    basic.pause(200)
                }
                if (カウンタ == 2) {
                    custom.フルカラーLED(color_type.blue)
                    basic.pause(200)
                    custom.フルカラーLED(color_type.black)
                    basic.pause(200)
                }
                if (カウンタ == 3) {
                    custom.フルカラーLED(color_type.green)
                    basic.pause(200)
                    custom.フルカラーLED(color_type.black)
                    basic.pause(200)
                }
            }
        }
    }
}
function 問題1 () {
    while (true) {
        if (custom.入力(io.digital01) == custom.出力(out.ON)) {
            custom.セグメントＬＥＤ(LED_view.eight, LED_view.eight)
        } else {
            custom.セグメントＬＥＤ(LED_view.black, LED_view.black)
        }
    }
}
function 問題3 () {
    while (true) {
        if (custom.入力(io.digital02) == custom.出力(out.UP)) {
            custom.音(tone.mid)
        } else {
            custom.音(tone.no)
        }
    }
}
function 問題7 () {
    while (true) {
        custom.モーター(custom.入力(io.analog03))
    }
}
function 問題4 () {
    while (true) {
        if (custom.入力(io.digital01) == custom.出力(out.OFF) && custom.入力(io.digital02) == custom.出力(out.DOWN)) {
            custom.モーター(0)
            custom.音(tone.no)
        }
        if (custom.入力(io.digital01) == custom.出力(out.ON) && custom.入力(io.digital02) == custom.出力(out.DOWN)) {
            custom.モーター(800)
            custom.音(tone.no)
        }
        if (custom.入力(io.digital01) == custom.出力(out.OFF) && custom.入力(io.digital02) == custom.出力(out.UP)) {
            custom.ステッピングモータ(step_speed.hi, step_dir.cw)
            custom.モーター(0)
            custom.音(tone.no)
        }
        if (custom.入力(io.digital01) == custom.出力(out.ON) && custom.入力(io.digital02) == custom.出力(out.UP)) {
            custom.モーター(0)
            custom.音(tone.mid)
        }
    }
}
function 問題8 () {
    カウンタ = 0
    while (true) {
        if (custom.入力(io.digital01) == custom.出力(out.ON)) {
            カウンタ += 1
            if (カウンタ > 4) {
                カウンタ = 1
            }
            custom.音(tone.mid)
            basic.pause(1000)
        }
        if (カウンタ == 1) {
            custom.セグメントＬＥＤ(LED_view.zero, LED_view.zero)
            custom.音(tone.no)
        }
        if (カウンタ == 2) {
            custom.セグメントＬＥＤ(LED_view.zero, LED_view.one)
            custom.音(tone.no)
        }
        if (カウンタ == 3) {
            custom.セグメントＬＥＤ(LED_view.zero, LED_view.two)
            custom.音(tone.no)
        }
        if (カウンタ == 4) {
            custom.セグメントＬＥＤ(LED_view.zero, LED_view.three)
            custom.音(tone.no)
        }
        if (custom.入力(io.digital02) == custom.出力(out.UP)) {
            if (カウンタ == 1) {
                custom.ステッピングモータ角度(0)
            }
            if (カウンタ == 2) {
                custom.ステッピングモータ角度(90)
            }
            if (カウンタ == 3) {
                custom.ステッピングモータ角度(180)
            }
            if (カウンタ == 4) {
                custom.ステッピングモータ角度(270)
            }
            break;
        }
    }
    while (true) {
        if (custom.入力(io.digital02) == custom.出力(out.DOWN)) {
            if (カウンタ == 1) {
                custom.ステッピングモータ角度(0)
            }
            if (カウンタ == 2) {
                custom.ステッピングモータ角度(-90)
            }
            if (カウンタ == 3) {
                custom.ステッピングモータ角度(-180)
            }
            if (カウンタ == 4) {
                custom.ステッピングモータ角度(90)
            }
            custom.音(tone.mid)
            basic.pause(1000)
            custom.音(tone.no)
            custom.セグメントＬＥＤ(LED_view.black, LED_view.black)
            break;
        }
    }
}
function 問題2 () {
    while (true) {
        if (custom.入力(io.analog04) < 300) {
            custom.セグメントＬＥＤ(LED_view.minus, LED_view.minus)
        } else {
            custom.セグメントＬＥＤ(LED_view.zero, LED_view.f)
        }
    }
}
function 問題5 () {
    while (true) {
        if (custom.入力(io.digital01) == custom.出力(out.ON)) {
            custom.セグメントＬＥＤ(LED_view.c, LED_view.c)
            if (custom.入力(io.digital02) == custom.出力(out.UP)) {
                custom.ステッピングモータ(step_speed.hi, step_dir.cw)
            } else {
                custom.ステッピングモータ(step_speed.hi, step_dir.ccw)
            }
        } else {
            custom.セグメントＬＥＤ(LED_view.black, LED_view.black)
        }
    }
}
let パターン = 0
let カウンタ = 0
custom.initialize()
let 問題 = 6
basic.forever(function () {
    if (問題 == 1) {
        問題1()
    }
    if (問題 == 2) {
        問題2()
    }
    if (問題 == 3) {
        問題3()
    }
    if (問題 == 4) {
        問題4()
    }
    if (問題 == 5) {
        問題5()
    }
    if (問題 == 6) {
        問題6()
    }
    if (問題 == 7) {
        問題7()
    }
    if (問題 == 8) {
        問題8()
    }
    if (問題 == 9) {
        問題9()
    }
})
