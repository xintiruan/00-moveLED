let x: number[] = []
basic.forever(function () {
    x = [
    0,
    1,
    2,
    3,
    4
    ]
    for (let y = 0; y <= 4; y++) {
        for (let 值 of x) {
            led.plot(值, y)
            basic.pause(200)
            led.unplot(值, y)
        }
    }
})
