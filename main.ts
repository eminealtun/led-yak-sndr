/**
 * led söndür (2,1)
 * 
 * led söndür (0,2)
 * 
 * led söndür (2,2)
 * 
 * led yak (2,4)
 * 
 * led yak (3,4)
 */
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . .
        # . . . #
        . # . . .
        `)
    basic.pause(1000)
    led.unplot(2, 1)
    basic.pause(500)
    led.unplot(0, 2)
    basic.pause(500)
    led.unplot(2, 2)
    basic.pause(500)
    led.plot(2, 4)
    basic.pause(500)
    led.plot(3, 4)
    basic.pause(2000)
})
