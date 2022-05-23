let n = 0
let n2 = 0
let m1 = 0
let m2 = 0
let m3 = 0
basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        led.plot(i, 0)
        basic.pause(200)
        led.unplot(i, 0)
    }
    n = 4
    while (n > -1) {
        led.plot(n, 1)
        basic.pause(200)
        led.unplot(n, 1)
        n += -1
    }
    for (let i2 = 0; i2 <= 4; i2++) {
        led.plot(i2, 2)
        basic.pause(200)
        led.unplot(i2, 2)
    }
    n2 = 4
    while (n2 > -1) {
        led.plot(n2, 3)
        basic.pause(200)
        led.unplot(n2, 3)
        n2 += -1
    }
    for (let i3 = 0; i3 <= 4; i3++) {
        led.plot(i3, 4)
        basic.pause(200)
        led.unplot(i3, 4)
    }
    m1 = 4
    while (m1 > -1) {
        led.plot(m1, 4)
        basic.pause(200)
        led.unplot(m1, 4)
        m1 += -1
    }
    for (let p1 = 0; p1 <= 4; p1++) {
        led.plot(p1, 3)
        basic.pause(200)
        led.unplot(p1, 3)
    }
    m2 = 4
    while (m2 > -1) {
        led.plot(m2, 2)
        basic.pause(200)
        led.unplot(m2, 2)
        m2 += -1
    }
    for (let p2 = 0; p2 <= 4; p2++) {
        led.plot(p2, 1)
        basic.pause(200)
        led.unplot(p2, 1)
    }
    m3 = 4
    while (m3 > -1) {
        led.plot(m3, 0)
        basic.pause(200)
        led.unplot(m3, 0)
        m3 += -1
    }
})
