custom.config_ini()
let デジタル０１ = 0
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
1
]
basic.forever(function () {
    custom.disp(7, num[0], num[5])
})
