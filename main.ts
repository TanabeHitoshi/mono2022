custom.initialize()
basic.forever(function () {
    if (custom.入力(io.digital02) == 0) {
        custom.セグメントＬＥＤ(LED_view.Hi, LED_view.pre)
    } else {
        custom.セグメントＬＥＤ(LED_view.Low, LED_view.pre)
    }
    if (custom.入力(io.digital01) == 0) {
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Hi)
        custom.ステッピングモータ(step_speed.hi, step_dir.ccw)
        custom.フルカラーLED(color_type.white)
    } else {
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Low)
        custom.フルカラーLED(color_type.magenta)
    }
})
