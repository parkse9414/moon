var img;  

function setup()
{
    createCanvas(900,900);
    img = loadImage("1Mercury.png");  
    img2 = loadImage("2Venus.png");
}

function draw()
{
	background(255);
    fill(237,112,50);
    noStroke();
    ellipse(450,450,350,350);


    var duration = 5000;
    var timing = (new Date()%duration)/duration;


	// 수성
	image(img, 450 + Math.cos(timing*2*PI)*200 - 17, 450 + Math.sin(timing*2*PI)*200 - 17);
	// 금성
    image(img2, 450 + Math.cos(timing*2*PI)*250 - 27, 450 + Math.sin(timing*2*PI)*250 - 27);

    //지구
	fill(0);
    ellipse(450 + Math.cos(timing*2*PI)*350,                       
    450 + Math.sin(timing*2*PI)*350,
    100, 100);  

    //달
	fill(0);
    ellipse(450 + Math.cos(timing*2*PI)*350 + Math.cos(timing*4*PI)*80,                       
    450 + Math.sin(timing*2*PI)*350 + Math.sin(timing*4*PI)*80,
    30, 30);  




}