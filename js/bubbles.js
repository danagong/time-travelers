var canvas2 = function(p){


let theShader;

p.preload = function(){
	theShader = new p5.Shader(this.renderer,vert,frag)
}

let drawingGraphics
let WebglGraphics

p.setup = function()  {
    p.createCanvas(p.windowWidth,p.windowHeight*3.5);
  p.frameRate(30);
  p.colorMode(p.HSB, 255,255,10,10);

  p.noStroke();
	WebglGraphics = p.createGraphics(p.width,p.height,p.WEBGL)
	drawingGraphics = p.createGraphics(p.width,p.height)
	
	mouseX = p.width/2
    mouseY = p.height/2
    
  p.strokeCap(p.ROUND);
  p.strokeJoin(p.ROUND);
  p.noFill();


}

p.draw = function() {
  p.clear();
  p.blendMode(p.HARD_LIGHT);
  p.background(25, 25, 25);

  WebglGraphics.shader(theShader)
	theShader.setUniform('u_resolution',[p.width/1000,p.height/2600])
	theShader.setUniform('u_time',p.millis()/10000)
	theShader.setUniform('u_mouse',[mouseX/p.width,mouseY/p.height])
	theShader.setUniform('tex0',drawingGraphics)
	
    drawingGraphics.clear(0,0,p.width,p.height)
    
    drawingGraphics.stroke(255)
	drawingGraphics.strokeWeight(2)
	drawingGraphics.push()
	if (p.mouseIsPressed){
		drawingGraphics.noFill()
	}else{
		drawingGraphics.fill(147,3,176)
	}
		
		// drawingGraphics.noFill()
	for(var i=0; i<800;i+=200){
		drawingGraphics.ellipse(p.mouseX,p.mouseY,i)
	}
    drawingGraphics.pop()
    
    drawingGraphics.push()
		

		if (p.mouseIsPressed){
			drawingGraphics.fill(255)
		}else{
			drawingGraphics.fill(0)
		}




  WebglGraphics.rect(-p.width/2,-p.height/2,p.width,p.height)
	
	p.image(WebglGraphics,0,0)
}


}
var addC1 = new p5(canvas2, 'canvas2HTML');