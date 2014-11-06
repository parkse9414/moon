var img;  
var img5;  

function setup()
{
    createCanvas(1800,1800);
    img = loadImage("1Mercury.png");  
    img2 = loadImage("2Venus.png");
    img3 = loadImage("3earth.png");
    img4 = loadImage("4moon.png");
    img5 = loadImage("bg.png");
    img6 = loadImage("sun.png");
    img7 = loadImage("6Jupiter.png");
}

function draw()
{
	background(img5);

    image(img6, 900 - 256 ,900 - 256);

	// 수성
    var duration = 5000;
    var timing = (new Date()%duration)/duration;
	image(img, 900 + Math.cos(timing*2*PI)*250 - 9, 900 + Math.sin(timing*2*PI)*250 - 9);

	// 금성
    var duration = 7000;
    var timing = (new Date()%duration)/duration;
    image(img2, 900 + Math.cos(timing*2*PI)*300 - 27, 900 + Math.sin(timing*2*PI)*300 - 27);

    //지구
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img3, 900 + Math.cos(timing*2*PI)*350 - 32, 900 + Math.sin(timing*2*PI)*350 - 32);

    //달
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img4, 900 + Math.cos(timing*2*PI)*350 + Math.cos(timing*4*PI)*80 - 8, 
    900 + Math.sin(timing*2*PI)*350 + Math.sin(timing*4*PI)*80 - 8)

    //목성
    var duration = 9000;
    var timing = (new Date()%duration)/duration;
    image(img7, 900 + Math.cos(timing*2*PI)*650 - 138, 900 + Math.sin(timing*2*PI)*650 - 138);

}