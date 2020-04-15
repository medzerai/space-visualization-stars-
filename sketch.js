var pt = [];
var x;
var y;
var sx;
var sy;
var z;
var i;
var nb= 400;
var speed = 3;
var w;
var h;

function setup() {
	createCanvas(800 , 800);
	frameRate(30);
	for( i = 0 ; i < nb ; i++ ){
		let w = random(-width, width);
		let h = random(-height, height);
		pt[i] = new Object();
		pt[i].px =Math.floor(w / 2);
		pt[i].py =Math.floor(h / 2);
		pt[i].x =Math.floor(w / 2);
		pt[i].y =Math.floor(h / 2);
		pt[i].z = width;
		pt[i].dd=2;
		pt[i].d=2;

		
	}
	//z = width;
	//translate( width / 2 ,height / 2);
}

function draw() {
	background(0);
	translate( width/2 ,height/2);
	mise(speed);
	show();
	
	
}

function show(){
	for(i = 0; i < nb ; i++ ){
		// strokeWeight(2);
		// stroke(250);
		// line(pt[i].px , pt[i].py ,pt[i].x ,pt[i].y);
		x = pt[i].px;
    	y = pt[i].py;
    	z = pt[i].z;
    	sx = Math.floor((x / z) * width);
    	sy = Math.floor((y / z) * height);
    	//console.log ("point "+i+" x="+sx+" y="+sy);
		pt[i].px = sx;
		pt[i].py = sy;
		pt[i].dd = pt[i].dd + 0.5;
		fill(250);
		noStroke();
		ellipse(x, y , pt[i].dd ,pt[i].dd );
		// strokeWeight(2);
		// stroke(150);
		// line(pt[i].px , pt[i].py ,pt[i].x ,pt[i].y);
	}
     

}

function mise(speed){
	//z = z - speed;
	//console.log("z="+z);
		for( i = 0 ;i < nb ; i++){
			x=pt[i].px;
			y=pt[i].py;
			if(((x < Math.floor(-width / 2)  - 10)||(x > Math.floor(width / 2) + 10))||((y < Math.floor(-height / 2) - 10)||(y > Math.floor(height / 2) + 10))||((pt[i].z - speed) < 5)){
				upd(i);
			}else{
				pt[i].z = pt[i].z - speed;
			}
		}
}

function upd(i){
		// pt[i].px =pt[i].x;
		// pt[i].py =pt[i].y;
		// pt[i].z = width;
		// pt[i].dd=pt[i].d;	


		let w = random(-width, width);
		let h = random(-height, height);
		pt[i].px =Math.floor(w / 2);
		pt[i].py =Math.floor(h / 2);
		pt[i].x =Math.floor(w / 2);
		pt[i].y =Math.floor(h / 2);
		pt[i].z = width;
		pt[i].dd=2;
		pt[i].d=2;
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}