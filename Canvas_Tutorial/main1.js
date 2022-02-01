let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

var window_height= window.innerHeight;  
var window_width= window.innerWidth;  

canvas.width=window_width;
canvas.height=window_height;

canvas.style.background="#ff8";


context.fillStyle="red"     // This needs to be written before the below statesments to be in effect 
context.fillRect(100,0,100,200);
context.fillRect(100,500,100,200);

context.beginPath();
context.strokeStyle="blue";
context.lineWidth=20;
context.arc(300,200,50,0,Math.PI*2,false);
context.stroke();
context.closePath();
