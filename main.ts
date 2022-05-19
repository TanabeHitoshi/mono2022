custom.initialize()
// custom.セグメントＬＥＤ(LED_view.e, LED_view.black)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        custom.セグメントＬＥＤ(LED_view.black, LED_view.Hi)
    } else {
        custom.セグメントＬＥＤ(LED_view.black, LED_view.Low)
    }
})
