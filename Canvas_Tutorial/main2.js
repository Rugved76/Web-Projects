// This program just spawns 10 randomly positioned circles on the canvas after every refresh

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

var window_height= window.innerHeight;  
var window_width= window.innerWidth;  

canvas.width=window_width;
canvas.height=window_height;
canvas.style.background="#ff8";

class Circle{
    constructor(xpos,ypos,radius,color)
    {
        this.xpos=xpos;
        this.ypos=ypos;
        this.radius=radius;
        this.color=color;
    }

    draw(context){
        context.beginPath();
        context.arc(this.xpos,this.ypos,this.radius,0,Math.PI*2,false);
        context.strokeStyle="blue"
        context.lineWidth=5;
        context.fillStyle='blue';
        context.fill()           //this is necessary for context.fillStyle() to work
        context.stroke();
        context.closePath();
    }
}


let allcircles = [];

let createcircle= function(circle){
    circle.draw(context);
}

for(var numbers=0;numbers<10;numbers++){

    let randomx = Math.random()*window_width;
    let randomy = Math.random()*window_height;
    let my_circle = new Circle(randomx,randomy,50,"black")
    allcircles.push(my_circle);
    createcircle(allcircles[numbers]);
}
