var canvas2 = function(p){
let _nsRate;
let _maxPoint;
let _aryObject = [];
let _objectNum;

p.setup = function()  {
    p.createCanvas(p.windowWidth,800);
  p.frameRate(30);
  p.colorMode(p.HSB, 255,255,10,10);
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
  p.blendMode(p.BURN);
  p.background(p.CMYK, 0, 0, 0, 90);

  for (let i = 0; i < _objectNum; i++) {
    _aryObject[i].update();
    _aryObject[i].draw();
  }
}

p.line = class{
  constructor() {
    this.nsX = p.random(100);
    this.nsY = p.random(100);
    this.color = p.color(p.random(360), 100, 100, 255);
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
    p.stroke(this.color);
    p.strokeWeight(this.sw);
    p.push();
    p.translate(p.width/2, p.height/2);
    p.beginShape();
    for (let i = 0; i < this.aryPoints.length; i++) {
      p.curveVertex(this.aryPoints[i][0], this.aryPoints[i][1]);
    }
    p.endShape();
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