var img;  

function setup()
{
    createCanvas(900,900);
    img = loadImage("1Mercury.png");  
    img2 = loadImage("2Venus.png");
    img3 = loadImage("3earth.png");
    img4 = loadImage("4moon.png");
}

function draw()
{
	background(255);
    fill(237,112,50);
    noStroke();
    ellipse(450,450,350,350);

	// 수성
    var duration = 5000;
    var timing = (new Date()%duration)/duration;
	image(img, 450 + Math.cos(timing*2*PI)*200 - 18, 450 + Math.sin(timing*2*PI)*200 - 18);

	// 금성
    var duration = 4000;
    var timing = (new Date()%duration)/duration;
    image(img2, 450 + Math.cos(timing*2*PI)*250 - 27, 450 + Math.sin(timing*2*PI)*250 - 27);

    //지구
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img3, 450 + Math.cos(timing*2*PI)*350 - 32, 450 + Math.sin(timing*2*PI)*350 - 32);

    //달
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img4, 450 + Math.cos(timing*2*PI)*350 + Math.cos(timing*4*PI)*100 - 8, 
    450 + Math.sin(timing*2*PI)*350 + Math.sin(timing*4*PI)*100 - 8)




}