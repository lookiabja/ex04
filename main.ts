let x = 89
serial.writeValue("x", x)
serial.writeValue("y", Math.map(x, 0, 100, 0, 15))
basic.forever(function () {
	
})
