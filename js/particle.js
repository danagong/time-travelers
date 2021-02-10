
function Particle(x,y){
    this.x = x;
    this.y = y;
  
  
    this.history=[];
  
    this.update = function(){
      this.x = mouseX;
      this.y = 100;
  
      for(var i=0; i<this.history.length; i++){
        this.history[i].x+= (random(-2,2));
        this.history[i].y+= random(-2,2);
      }
      
      var v = createVector(this.x, this.y);
      this.history.push(v);
  
      if(this.history.length > 200){
        this.history.splice(0,1);
      }
    }
  
    this.show = function(){
      stroke(255);
      fill(0);
      ellipse(this.x, this.y, 4, 4);
  
      smooth();
      beginShape();
      for(var i=0; i< this.history.length; i++){
        var pos = this.history[i];
        //ellipse(pos.x, pos.y, 4, 4);
        
        curveVertex(pos.x, pos.y);
      }
      endShape();
    }
  }
  
  var particle;
  
  
  function setup(){
    
    var canvas = createCanvas(windowWidth, 200);
    canvas.parent('line-holder');
    smooth();
    x = mouseX;
    particle = new Particle(x,100);
    
  
  }
  
  function draw(){
  
  
    background(0);
    l1 = line(0, 100, windowWidth,100);
    
    particle.update();
    particle.show();
  }