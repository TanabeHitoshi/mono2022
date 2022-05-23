custom.initialize()
basic.forever(function () {
    if (custom.入力(io.digital02) == 0) {
        custom.セグメントＬＥＤ(LED_view.Hi, LED_view.pre)
    } else {
        custom.セグメントＬＥＤ(LED_view.Low, LED_view.pre)
    }
    if (custom.入力(io.digital01) == 0) {
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Hi)
        custom.ステッピングモータ(step_speed.hi, step_dir.cw)
        custom.フルカラーLED(color_type.green)
    } else {
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Low)
        custom.フルカラーLED(color_type.yellow)
    }
})
