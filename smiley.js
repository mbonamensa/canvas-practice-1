
const canvas1 = document.querySelector("#canvas_1")
const ctx = canvas1.getContext("2d")

// hollow rectangle
ctx.beginPath()
ctx.rect(350, 200, 100, 100)
ctx.strokeStyle = "#808080"
ctx.stroke()

// fill rectangle
ctx.beginPath()
ctx.fillStyle = "#808080"
ctx.fillRect(20, 30, 100, 100)

/* Head */
// hollow circle
ctx.beginPath()
ctx.strokeStyle = "grey"
ctx.arc(100, 100, 70, 0, Math.PI * 2)
ctx.stroke()

// fill circle
ctx.beginPath()
ctx.fillStyle = "grey"
ctx.arc(100, 100, 50, 0, Math.PI * 2)
ctx.fill()

/* Eyes */
// left eyeball
ctx.beginPath()
ctx.fillStyle = "pink"
ctx.arc(75, 90, 10, 0, Math.PI * 2)
ctx.fill()

// right eyeball
ctx.beginPath()
ctx.fillStyle = "pink"
ctx.arc(125, 90, 10, 0, Math.PI * 2)
ctx.fill()

/* Nose */
// right nose line
ctx.beginPath()
ctx.strokeStyle = "pink"
ctx.moveTo(100, 100)
ctx.lineTo(110, 110)
ctx.stroke()

// left nose line
ctx.beginPath()
ctx.strokeStyle = "pink"
ctx.moveTo(100, 100)
ctx.lineTo(90, 110)
ctx.stroke()

// bottom nose line
ctx.beginPath()
ctx.strokeStyle = "pink"
ctx.moveTo(90, 110)
ctx.lineTo(110, 110)
ctx.stroke()

/* Mouth */
ctx.beginPath()
ctx.strokeStyle = "pink"
ctx.arc(100, 110, 30, Math.PI, 0, true)
ctx.lineWidth = 3
ctx.stroke()