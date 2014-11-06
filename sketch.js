var img;  
var img5;  

function setup()
{
    createCanvas(1000,1000);
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
    fill(237,112,50);
    noStroke();
    image(img6, 500 - 256 ,500 - 256);

	// 수성
    var duration = 5000;
    var timing = (new Date()%duration)/duration;
	image(img, 500 + Math.cos(timing*2*PI)*200 - 9, 500 + Math.sin(timing*2*PI)*200 - 9);

	// 금성
    var duration = 4000;
    var timing = (new Date()%duration)/duration;
    image(img2, 500 + Math.cos(timing*2*PI)*250 - 27, 500 + Math.sin(timing*2*PI)*250 - 27);

    //지구
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img3, 500 + Math.cos(timing*2*PI)*350 - 32, 500 + Math.sin(timing*2*PI)*350 - 32);

    //달
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img4, 500 + Math.cos(timing*2*PI)*350 + Math.cos(timing*4*PI)*80 - 8, 
    500 + Math.sin(timing*2*PI)*350 + Math.sin(timing*4*PI)*80 - 8)




}