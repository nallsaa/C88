block_width = 30
block_height = 30
player_x = 10
player_y = 10
player_object = ""
keyPressed=0
var canvas = new fabric.Canvas("myCanvas")

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object=img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,left:player_x
        })
        canvas.add(player_object)
    })
}

function new_Image(get_img){
    fabric.Image.fromURL(get_img, function(img){
        block_img_object=img
        block_img_object.scaleToWidth( block_width)
        block_img_object.scaleToHeight(block_height)
        block_img_object.set({
            top:player_y,left:player_x
        })
        canvas.add(block_img_object)
    })
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
keyPressed=e.keyCode
   if(e.shiftKey == true && keyPressed == '80'){
   console.log("p and shift pressed together")
   block_height +=10
   block_width +=10
   document.getElementById("currentHeight").innerHTML=block_height
   document.getElementById("currentWidth").innerHTML=block_width
   }

   if(e.shiftKey == true && keyPressed == '77'){
   console.log("m and shift pressed together")
   block_height -=10
   block_width -=10
   document.getElementById("currentHeight").innerHTML=block_height
   document.getElementById("currentWidth").innerHTML=block_width
   }

   if(keyPressed == '38'){
       up()
       console.log("up")
   }

   if(keyPressed == '40'){
    down()
    console.log("down")
}

if(keyPressed == '37'){
    left()
    console.log("left")
}

if(keyPressed == '39'){
    right()
    console.log("right")
}

if(keyPressed == '67'){
    new_Image("cloud.jpg")
    console.log("c")
}

if(keyPressed == '68'){
    new_Image("dark_green.png")
    console.log("d")
}

if(keyPressed == '71'){
    new_Image("ground.png")
    console.log("g")
}

if(keyPressed == '76'){
    new_Image("light_green.png")
    console.log("l")
}

if(keyPressed == '82'){
    new_Image("roof.jpg")
    console.log("r")
}

if(keyPressed == '84'){
    new_Image("trunk.jpg")
    console.log("t")
}

if(keyPressed == '85'){
    new_Image("unique.png")
    console.log("u")
}

if(keyPressed == '87'){
    new_Image("wall.jpg")
    console.log("w")
}

if(keyPressed == '89'){
    new_Image("yellow_wall.jpg")
    console.log("y")
}

function up(){
    if(player_y>0){
    player_y=player_y-block_height
    console.log("When Up arrow key is pressed, X="+player_x+" Y="+player_y)
    canvas.remove(player_object)
    player_update()
}
}

function down(){}
    if(player_y<600){
        player_y=player_y+block_height
        console.log("When Down arrow key is pressed, X="+player_x+" Y="+player_y)
        canvas.remove(player_object)
        player_update()
    }
}

function left(){
    if(player_x>0){
        player_x=player_x-block_width
        console.log("When Left arrow key is pressed, X="+player_x+" Y="+player_y)
        canvas.remove(player_object)
        player_update()
    }
}

 function right(){
     if(player_x<1000){
         player_x=player_x+block_width
         console.log("When Right arrow key is pressed, X="+player_x+" Y="+player_y)
         canvas.remove(player_object)
         player_update()
     }
 }
