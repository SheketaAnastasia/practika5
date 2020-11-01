 var canvas = document.getElementById("drawingCanvas");
context = canvas.getContext("2d");
let parentLeft = canvas.parentElement.parentElement.offsetLeft
let parentTop = canvas.parentElement.parentElement.offsetTop;

window.onload = function() {
   
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
}
var previousColorElement;

function changeColor(color, imgElement)
{
    context.strokeStyle = color;
    imgElement.className = "Selected";

    if (previousColorElement != null)
        previousColorElement.className = "";

    previousColorElement = imgElement;
}
var previousThicknessElement;

function changeThickness (thickness, imgElement)
{
    context.lineWidth = thickness;
    imgElement.className = "Selected";

    if (previousThicknessElement != null)
        previousThicknessElement.className = "";

    previousThicknessElement = imgElement;
}

function startDrawing(e) {
    
    isDrawing = true;

    context.beginPath();

    context.moveTo(e.pageX - canvas.offsetLeft-parentLeft, e.pageY - canvas.offsetTop-parentTop);
}

function draw(e) {

    if (isDrawing == true)
    {
        var x = e.pageX - canvas.offsetLeft - parentLeft;
        var y = e.pageY - canvas.offsetTop- parentTop;

        context.lineTo(x, y);
        context.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
