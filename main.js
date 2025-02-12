var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update() {
  fabrc.Image.fromURL ("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
      top:player_y, 
      left:player_x
    });
    canvas.add(player_object);
  });
}
function new_image(get_image){
  fabrc.Image.fromURL (get_image,function(Img){
    block_image_object=Img; 
    block_image_object.scaleToWidth(block_image_width); 
    block_image_object.scaleToHeight(block_image_height); 
    block_image_object.set({
      top:player_y, 
      left:player_x
    });
    canvas.add(block_image_object);
  });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCodes;
  console.log(keyPressed);
  if (e.shiftKey==true && keyPressed== '80'){
    console.log("P and Shift are pressed together");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("curent_width").INNERHTML=block_image_width;
    document.getElementById("curent_height").INNERHTML=block_image_height;
}
  
  if (e.shiftKey==true && keyPressed== '77'){
    console.log("M and Shift are pressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("curent_width").INNERHTML=block_image_width;
    document.getElementById("curent_height").INNERHTML=block_image_height;
}
  
  if(keyPressed=='87') {
  new_image('wall.jpg');
    console.log("w");
  }
  
 if(keyPressed=='71') {
  new_image('ground.png');
    console.log("g");
  } 
  
  if(keyPressed=='67') {
  new_image('cloud.jpg');
    console.log("c");
  }
  
  if(keyPressed=='76') {
  new_image("light_green.png");
    console.log("l");
  }
  
  if(keyPressed=='84') {
  new_image('trunk.jpg');
    console.log("t");
  }
  
  if(keyPressed=='82') {
  new_image('roof.jpg');
    console.log("r");
  }
  
  if(keyPressed=='85') {
  new_image('unique.png');
    console.log("u");
  }
  
  if(keyPressed=='89') {
  new_image('yellow_wall.png');
    console.log("y");
  }
}
