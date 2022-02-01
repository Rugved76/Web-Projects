// Creating an Image 

let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

var window_height= window.innerHeight;  
var window_width= window.innerWidth;  

canvas.width=window_width;
canvas.height=window_height;

canvas.style.background="#ff8";

class Image{
    constructor(imagepath,xpos,ypos,width,height,speed)
    {
        this.imagepath=imagepath;
        this.xpos=xpos;
        this.ypos=ypos;
        this.width=width;
        this.height=height;
        this.speed=speed;

        this.dx=speed;
        this.dy=speed;
    }
    
}

function createimage(context,imagepath,xpos,ypos,width,height){
    let myimage = document.createElement('img');
    myimage.src=imagepath;
    myimage.onload=function()
    {
        context.drawImage(myimage,xpos,ypos,width,height);
    }
}

let image = new Image('logo.png',50,50,100,100,50);
createimage(context,image.imagepath,image.xpos,image.ypos,image.width,image.height);

function Update()
{
    clearRect(0,0,window_width,window_height);
    image.xpos+=dx;
    image.ypos+=dy;
    setInterval(Update,1000/30);
}

Update();