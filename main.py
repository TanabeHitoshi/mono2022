def _74HC4094(value: number):
    global i, tmp
    pins.digital_write_pin(DigitalPin.P16, 0)
    i = 1
    for index in range(8):
        tmp = int(value / i)
        pins.digital_write_pin(DigitalPin.P14, tmp % 2)
        clk()
        i = i * 2
    pins.digital_write_pin(DigitalPin.P16, 1)
def clk():
    pins.digital_write_pin(DigitalPin.P13, 0)
    basic.pause(1)
    pins.digital_write_pin(DigitalPin.P13, 1)
    basic.pause(1)
tmp = 0
i = 0
basic.clear_screen()
led.enable(False)
pins.set_pull(DigitalPin.P6, PinPullMode.PULL_NONE)
pins.set_pull(DigitalPin.P7, PinPullMode.PULL_NONE)

def on_forever():
    while True:
        if pins.digital_read_pin(DigitalPin.P7) == 0:
            pins.digital_write_pin(DigitalPin.P0, 0)
        else:
            pins.digital_write_pin(DigitalPin.P0, 1)
    _74HC4094(15)
    basic.pause(1000)
    _74HC4094(240)
    basic.pause(1000)
basic.forever(on_forever)
