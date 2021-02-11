//p5.js shader basic structure ref from https://www.openprocessing.org/sketch/920144
//mySketch.js is a modified version of sketch954948 from openprocessing.org


var canvas1 = function(p){
	
let theShader;

p.preload = function(){
	theShader = new p5.Shader(this.renderer,vert,frag)
}

let drawingGraphics
let WebglGraphics
p.setup = function() {
	
	
	p.createCanvas(p.windowWidth,660);
	p.background(25, 25, 25);
	

	p.noStroke();
	WebglGraphics = p.createGraphics(p.width,p.height,p.WEBGL)
	drawingGraphics = p.createGraphics(p.width,p.height)
	
	mouseX = p.width/2
	mouseY = p.height/2
}

p.draw = function() {
	p.clear();

	WebglGraphics.shader(theShader)
	theShader.setUniform('u_resolution',[p.width/1000,p.height/700])
	theShader.setUniform('u_time',p.millis()/10000)
	theShader.setUniform('u_mouse',[mouseX/p.width,mouseY/p.height])
	theShader.setUniform('tex0',drawingGraphics)
	
	drawingGraphics.clear(0,0,p.width,p.height)
	//drawingGraphics.ellipse(mouseX,mouseY,850)
	drawingGraphics.stroke(255)
	drawingGraphics.strokeWeight(2)
	drawingGraphics.push()
	if (mouseIsPressed){
		drawingGraphics.noFill()
	}else{
		drawingGraphics.fill(147,3,176)
	}
		
		// drawingGraphics.noFill()
	for(var i=200;i<800;i+=200){
		drawingGraphics.ellipse(mouseX,mouseY,i)
	}
	drawingGraphics.pop()
	
	
	drawingGraphics.push()
		drawingGraphics.textSize(105)
		drawingGraphics.textStyle(p.BOLDITALIC)

		if (p.mouseIsPressed){
			drawingGraphics.fill(255)
		}else{
			drawingGraphics.fill(0)
		}

		for(var i=0;i<p.height+400;i+=200){
		 drawingGraphics.text("TIME TRAVELERS",50,i+(p.frameCount/(5/p.log(mouseY))  )%200  )
			

			
		}
	
	//for(var i=0;i<width;i+=50){
		//for(var o=0;o<height;o+=50){
			//drawingGraphics.ellipse(i,o,(i/50%5==0)? 20:10)
		//}
	//}
	WebglGraphics.rect(-p.width/2,-p.height/2,p.width,p.height)
	
	p.image(WebglGraphics,0,0)
	
	// image(drawingGraphics,0,0)
	// rotateY(frameCount/100)
	// ellipse(mouseX, mouseY, 20, 20);
}

// function keyPressed(){
// 	save() 
// }
};

var addC1 = new p5(canvas1, 'canvas1HTML');