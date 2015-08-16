function drawSpiral() { 
 var width  = document.getElementById("width").value;
 var height = document.getElementById("height").value;
 var diff = 10;
 var horSteps = width / diff ;
 var vertSteps = height / diff;
 var canv = document.getElementById("myCanvas");
 var ctx = canv.getContext("2d");
 var x = document.getElementById("myCanvas").width/"2" + width/2;   //Set x coordinate to draw first unit square.
 var y = document.getElementById("myCanvas").height/"2" + height/2; //Set y coordinate to draw first unit square.
 
 function unitSquare(x,y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.rect(x-5,y-5, 10, 10);
	ctx.stroke(); 
 }
while( horSteps!==0 && vertSteps!==0) {
    for (var i = 1; i <= horSteps; i++) {
		x-=diff;
		setTimeout(unitSquare (x,y),250);	
	}	
	for (var j = 1; j < vertSteps; j++) {
		y-=diff;
		setTimeout(unitSquare (x,y),250); 	
     }
	diff*=-1;
	horSteps--;
	vertSteps--;
 
}
alert("Spiral is finished");	
}
 


 