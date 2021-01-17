var canvas2 = function(p){
let _nsRate;
let _maxPoint;
let _aryObject = [];
let _objectNum;

let theShader;

p.preload = function(){
	theShader = new p5.Shader(this.renderer,vert,frag)
}

let drawingGraphics
let WebglGraphics

p.setup = function()  {
    p.createCanvas(p.windowWidth,800);
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


  _objectNum = 16;
  _nsRate = 0.001;
  _maxPoint = 20;

  for (let i = 0; i < _objectNum; i++) {
    _aryObject.push(new p.line());
  }
}

p.draw = function() {
  p.clear();
  p.blendMode(p.HARD_LIGHT);
  p.background(p.CMYK, 0, 0, 0, 90);

  WebglGraphics.shader(theShader)
	theShader.setUniform('u_resolution',[p.width/1000,p.height/1000])
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
	for(var i=00;i<800;i+=200){
		drawingGraphics.ellipse(p.mouseX,p.mouseY,i)
	}
    drawingGraphics.pop()
    
    drawingGraphics.push()
		

		if (p.mouseIsPressed){
			drawingGraphics.fill(255)
		}else{
			drawingGraphics.fill(0)
		}

  for (let i = 0; i < 6; i++) {
    _aryObject[i].update();
    _aryObject[i].draw();
  }

  WebglGraphics.rect(-p.width/2,-p.height/2,p.width,p.height)
	
	p.image(WebglGraphics,0,0)
}

p.line = class{
  constructor() {
    this.nsX = p.random(100);
    this.nsY = p.random(100);
    this.color = p.color(147,3,176);
    this.sw = p.random(p.width/20, p.width/3);
    this.aryPoints = [];
  }
  update() {
    this.nsX += _nsRate;
    this.nsY += _nsRate;
    this.aryPoints.unshift([
      p.width/3 * p.cos(8*3.14*p.noise(this.nsX)),
      p.height/3 * p.sin(8*3.14*p.noise(this.nsY))
    ]);

    while (this.aryPoints.length > _maxPoint) {
      this.aryPoints.pop();
    }
  }
  draw() {
    let xMin;
    let xMax;
    let yMin;
    let yMax;

    p.stroke(this.color);
    p.strokeWeight(this.sw);
    p.push();
    p.translate(p.width/2, p.height/2);
    p.beginShape();
    for (let i = 1; i < this.aryPoints.length; i++) {
      p.curveVertex(this.aryPoints[i][0], this.aryPoints[i][1]);
        xMin=this.aryPoints[i][0];
        xMax=this.aryPoints[i][0];
        yMin-this.aryPoints[i][1];
        yMax=this.aryPoints[i][1];
        if(this.aryPoints[i][0] < xMin){
            xMin=this.aryPoints[i][0]
        }
        if(this.aryPoints[i][1] < yMin){
            yMin=this.aryPoints[i][1]
        }
        if(this.aryPoints[i][0] > xMax){
            xMax=this.aryPoints[i][0]
        }
        if(this.aryPoints[i][1] > yMax){
            yMax=this.aryPoints[i][1]
        }
    }


    p.endShape();

let xMidpoint = (xMin+xMax)/2;
  let yMidpoint = (yMin+yMax)/2;
  
  p.textAlign(p.CENTER, p.CENTER);
  p.text("MIDPOINT", xMidpoint, yMidpoint);
  p.fill(0, 102, 153);
    p.pop();
  }
}

p.mouseRelease = function() {
  _aryObject = [];
  for (let i = 0; i < _objectNum; i++) {
    _aryObject.push(new line());
  }
}

}


var addC1 = new p5(canvas2, 'canvas2HTML');