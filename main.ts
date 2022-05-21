custom.initialize()
// custom.セグメントＬＥＤ(LED_view.e, LED_view.black)
basic.forever(function () {
    if (custom.入力(io.digital01) == 0) {
        custom.セグメントＬＥＤ(LED_view.Low, LED_view.pre)
    } else {
        custom.セグメントＬＥＤ(LED_view.Hi, LED_view.pre)
    }
    if (custom.入力(io.digital02) == 0) {
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Hi)
    } else {
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Low)
    }
})
