//(c)2021 Mitchell GNU 2.0

function drawLine(x1, y1, x2, y2, strokeColor, lineWidth) {
    ctx.stokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawTriangle(topVertexX, topVertexY, rightVertexX, rightVertexY, leftVertexX, leftVertexY) {
    ctx.beginPath();
    ctx.moveTo(topVertexX, topVertexY);
    ctx.lineTo(rightVertexX, rightVertexY);
    ctx.lineTo(leftVertexX, leftVertexY);
    ctx.lineTo(topVertexX, topVertexY);
    ctx.stroke();
}

function drawArc(centerX, centerY, radius, startingDegreesAngle, endingDegreesAngle) {
    startingRadianAngle = startingDegreesAngle * Math.PI / 180;
    endingRadianAngle = endingDegreesAngle * Math.PI / 180;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startingRadianAngle, endingRadianAngle);
    ctx.stroke();
}

function drawQuadraticCurve(startX, startY, controlX, controlY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(controlX, controlY, endX, endY);
    ctx.stroke();
}

function drawBezierCurve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    ctx.stroke();
}

function drawRectangle(startX, startY, width, height) {
    ctx.beginPath();
    ctx.rect(startX, startY, width, height);
    ctx.stroke();
}
