var canvas2 = function(a){

let _nsRate;
let _maxPoint;
let _aryObject = [];
let _objectNum;
let xMin=xMax=yMin=yMax=0;
let xMidpoint=yMidpoint=0;



a.setup = function() {
  a.createCanvas(a.windowWidth, a.windowHeight/1.5);
  a.frameRate(50);
  a.colorMode(RGB, 255, 255, 255, 1);
  a.strokeCap(ROUND);
  a.strokeJoin(ROUND);
  a.noFill();
  a.textSize(60);

  _objectNum = 8;
  _nsRate = 0.001;
  _maxPoint = 50;

  for (let i = 0; i < _objectNum; i++) {
    _aryObject.push(new a.line());
  }

  
}

a.draw = function() {
  a.clear();
  a.background(0);
  a.translate(width/2, height/2);
  a.blendMode(SCREEN);

  for (let i = 0; i < _objectNum; i++) {
    _aryObject[i].update();
    _aryObject[i].draw();
  }
}

a.line = class {
  constructor() {
    this.nsX = a.random(100);
    this.nsY = a.random(100);
    this.color = a.color('#D493C0');
    this.sw = a.random(width/30, width/4);
    this.aryPoints = [];
  }
  update() {
    this.nsX += _nsRate;
    this.nsY += _nsRate;
    this.aryPoints.unshift([
      width/3 * cos(8*PI*noise(this.nsX)),
      height/3 * sin(8*PI*noise(this.nsY))
    ]);

    while (this.aryPoints.length > _maxPoint) {
      this.aryPoints.pop();
    }
  }
  draw() {
    a.stroke(this.color);
    a.strokeWeight(this.sw);
    a.push();
    a.beginShape();
    for (let i = 0; i < this.aryPoints.length; i++) {
      a.curveVertex(this.aryPoints[i][0], this.aryPoints[i][1]);
      // First point    
      if(this.aryPoints[i][0] < xMin)
      xMin=this.aryPoints[i][0];

      if(this.aryPoints[i][0] > xMax)
      xMax=this.aryPoints[i][0];    
  
      // Second point    
      if(this.aryPoints[i][1] < yMin)
      yMin=this.aryPoints[i][1];
      
      if(this.aryPoints[i][1] > yMax)
      yMax=this.aryPoints[i][1];

    }

    
    a.endShape();

    

    xMidpoint = (xMin+xMax)/2;
    yMidpoint = (yMin+yMax)/2;

    a.textAlign(CENTER, CENTER);
    a.stroke(255, 255, 255);
   
    a.strokeWeight(2);
    
    a.point(xMidpoint, yMidpoint);
    
    let aryWords=["BOUND","TIME & LANGUAGE"];

    a.text(aryWords[1], xMidpoint, yMidpoint+75);

    a.text(aryWords[0], xMidpoint-300, yMidpoint);
     

    a.pop();
   
    

    
    

   

  }

}


}

var addC2 = new p5(canvas2, 'canvas2HTML');
