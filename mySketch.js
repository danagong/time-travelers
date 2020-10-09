//p5.js shader basic structure ref from https://www.openprocessing.org/sketch/920144
//mySketch.js is a modified version of sketch954948 from openprocessing.org
let theShader;

function preload(){
	theShader = new p5.Shader(this.renderer,vert,frag)
}

let drawingGraphics
let WebglGraphics
function setup() {
	
	createCanvas(1435,1000);
	noStroke();
	WebglGraphics = createGraphics(width,height,WEBGL)
	drawingGraphics = createGraphics(width,height)
	background(255)
	mouseX = width/2
	mouseY = height/2
}

function draw() {
	WebglGraphics.shader(theShader)
	theShader.setUniform('u_resolution',[width/1000,height/1000])
	theShader.setUniform('u_time',millis()/1000)
	theShader.setUniform('u_mouse',[mouseX/width,mouseY/height])
	theShader.setUniform('tex0',drawingGraphics)
	
	drawingGraphics.clear(0,0,width,height)
	// drawingGraphics.ellipse(mouseX,mouseY,850)
	
	drawingGraphics.stroke(255)
	drawingGraphics.strokeWeight(2)
	drawingGraphics.push()
	if (mouseIsPressed){
		drawingGraphics.noFill()
	}else{
		drawingGraphics.fill(147,3,176)
	}
		
		// drawingGraphics.noFill()
	for(var i=00;i<800;i+=200){
		drawingGraphics.ellipse(mouseX,mouseY,i)
	}
	drawingGraphics.pop()
	
	drawingGraphics.push()
		drawingGraphics.textSize(105)
		drawingGraphics.textStyle(BOLDITALIC)

		if (mouseIsPressed){
			drawingGraphics.fill(255)
		}else{
			drawingGraphics.fill(0)
		}

		for(var i=0;i<height+400;i+=200){
			if(i<600){
				var word= drawingGraphics.text("TIME TRAVELERS",50,i+(frameCount/(5/log(mouseY))  )%200  )
			}
		

			
		}
	
	//for(var i=0;i<width;i+=50){
		//for(var o=0;o<height;o+=50){
			//drawingGraphics.ellipse(i,o,(i/50%5==0)? 20:10)
		//}
	//}
	WebglGraphics.rect(-width/2,-height/2,width,height)
	
	image(WebglGraphics,0,0)
	
	// image(drawingGraphics,0,0)
	// rotateY(frameCount/100)
	// ellipse(mouseX, mouseY, 20, 20);
}

// function keyPressed(){
// 	save() 
// }
