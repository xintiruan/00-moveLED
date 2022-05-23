y = 0
x: List[number] = []

def on_forever():
    global y, x
    y = 0
    x = [0, 1, 2, 3, 4]
    for 值 in x:
        led.plot(1, 0)
        basic.pause(100)
        led.unplot(0, 0)
basic.forever(on_forever)
