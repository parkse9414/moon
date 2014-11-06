var img;  
var img5;  

function setup()
{
    createCanvas(2000,2000);
    img = loadImage("1Mercury.png");  
    img2 = loadImage("2Venus.png");
    img3 = loadImage("3earth.png");
    img4 = loadImage("4moon.png");
    img5 = loadImage("bg.png")
    img6 = loadImage("sun.png")
}

function draw()
{
	background(img5);

    image(img6, 1000 - 256 ,1000 - 256);

	// 수성
    var duration = 5000;
    var timing = (new Date()%duration)/duration;
	image(img, 1000 + Math.cos(timing*2*PI)*230 - 9, 1000 + Math.sin(timing*2*PI)*230 - 9);

	// 금성
    var duration = 4000;
    var timing = (new Date()%duration)/duration;
    image(img2, 1000 + Math.cos(timing*2*PI)*250 - 27, 1000 + Math.sin(timing*2*PI)*250 - 27);

    //지구
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img3, 1000 + Math.cos(timing*2*PI)*300 - 32, 1000 + Math.sin(timing*2*PI)*300 - 32);

    //달
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img4, 1000 + Math.cos(timing*2*PI)*300 + Math.cos(timing*4*PI)*80 - 8, 
    1000 + Math.sin(timing*2*PI)*300 + Math.sin(timing*4*PI)*80 - 8)




}