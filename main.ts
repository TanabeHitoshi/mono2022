custom.initialize()
basic.forever(function () {
    if (custom.入力(io.digital01) == 0) {
        custom.セグメントＬＥＤ(LED_view.Hi, LED_view.pre)
        custom.ステッピングモータ角度(90)
    } else {
        custom.セグメントＬＥＤ(LED_view.Low, LED_view.pre)
    }
    if (custom.入力(io.digital02) == 0) {
        custom.ステッピングモータ角度(-90)
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Hi)
    } else {
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Low)
    }
})
