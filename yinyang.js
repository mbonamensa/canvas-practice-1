
const canvas1 = document.querySelector("#canvas_1")
const ctx = canvas1.getContext("2d")


// YinYang
function drawYinYang(rotationInDegrees) {

    const rotationInRadians = rotationInDegrees * Math.PI/180

    ctx.translate(canvas1.width/2, canvas1.height/2)
    ctx.rotate(rotationInRadians)
    ctx.translate(-canvas1.width/2, -canvas1.height/2)

    const mainRadius = 200
    // black circle
    ctx.beginPath()
    ctx.fillStyle = "#000000"
    ctx.strokeStyle = "000000"
    ctx.lineWidth = 10
    ctx.arc(canvas1.width/2, canvas1.height/2, mainRadius, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    
    // white half circle
    ctx.beginPath()
    ctx.fillStyle = "#ffffff"
    ctx.arc(canvas1.width/2, canvas1.height/2, mainRadius, Math.PI/2, -Math.PI/2)
    ctx.fill()
    
    
    // black medium circle
    ctx.beginPath()
    ctx.fillStyle = "#000000"
    ctx.arc(canvas1.width/2, canvas1.height/2 + mainRadius/2, mainRadius/2, 0, Math.PI * 2)
    ctx.fill()
    
    // white medium circle
    ctx.beginPath()
    ctx.fillStyle = "#ffffff"
    ctx.arc(canvas1.width/2, canvas1.height/2 - mainRadius/2, mainRadius/2, 0, Math.PI * 2)
    ctx.fill()
    
    // black small circle
    ctx.beginPath()
    ctx.fillStyle = "#000000"
    ctx.arc(canvas1.width/2, canvas1.height/2 - mainRadius/2, mainRadius/6, 0, Math.PI * 2)
    ctx.fill()
    
    // white small circle
    ctx.beginPath()
    ctx.fillStyle = "#ffffff"
    ctx.arc(canvas1.width/2, canvas1.height/2 + mainRadius/2, mainRadius/6, 0, Math.PI * 2)
    ctx.fill()
}

function animate() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height)
    drawYinYang(2)
    window.requestAnimationFrame(animate)
}

animate()
