custom.initialize()
custom.セグメントＬＥＤ(LED_view.minus, LED_view.Hi)
// custom.セグメントＬＥＤ(LED_view.e, LED_view.black)
basic.forever(function () {
    if (custom.デジタル２() == 0) {
        custom.セグメントＬＥＤ(LED_view.Low, LED_view.pre)
    } else {
        custom.セグメントＬＥＤ(LED_view.Hi, LED_view.pre)
    }
    if (custom.デジタル１() == 0) {
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Hi)
    } else {
        custom.セグメントＬＥＤ(LED_view.pre, LED_view.Low)
    }
})
