
function setup() {
    createCanvas(1200, 900);
  
    background("black");
  }
    
      function draw(){
      stroke("red")
      fill("blue")
      if(mouseIsPressed)
        rect(mouseX, mouseY, 20, 20)
    }
  
