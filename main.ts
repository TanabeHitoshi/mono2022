custom.config_ini()
let デジタル０１ = 1
let デジタル０２ = 2
let アナログ０３ = 3
let アナログ０４ = 4
let num = [
252,
96,
218,
242,
102,
182,
190,
228,
254,
246,
0
]
basic.forever(function () {
    custom.disp(num[0], num[1])
    basic.pause(2000)
    custom.disp(num[2], num[3])
    basic.pause(2000)
    custom.disp(num[4], num[5])
    basic.pause(2000)
    custom.disp(num[6], num[7])
    basic.pause(2000)
    custom.disp(num[8], num[9])
    basic.pause(2000)
    custom.disp(num[10], num[10])
    basic.pause(2000)
})
