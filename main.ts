custom.initialize()
// custom.セグメントＬＥＤ(LED_view.e, LED_view.black)
basic.forever(function () {
    if (custom.デジタル２() == 0) {
        if (custom.デジタル１() == 0) {
            custom.セグメントＬＥＤ(LED_view.Hi, LED_view.Hi)
        } else {
            custom.セグメントＬＥＤ(LED_view.Hi, LED_view.Low)
        }
    } else {
        if (custom.デジタル１() == 0) {
            custom.セグメントＬＥＤ(LED_view.Low, LED_view.Hi)
        } else {
            custom.セグメントＬＥＤ(LED_view.Low, LED_view.Low)
        }
    }
})
