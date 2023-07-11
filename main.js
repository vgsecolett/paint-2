var lastPositionOfX, lastPositionOfY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
    
color = "white";
widthOfLine = 2;

var width = screen.width;

novaLargura = screen.width - 15; 
novaAltura = screen.height - 7.5;

    if (width < 992)
    {
    document.getElementById("myCanvas").width = novaLargura;
    document.getElementById("myCanvas").height = novaAltura;
    document.body.style.overflow = "hidden"; // isso impede que a tela habilite a opção de rolagem 
    }
    canvas.addEventListener ("toquestart", meuToqueStart);

function meuToqueStart(e);
{
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;

    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("toquemovimento", meuToqueMovimento);

function meuToqueMovimento(e)
{
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}