function spiral_drawing() { 
 x= document.getElementById("width").value;
 y = document.getElementById("height").value;
 horSteps = x/10 ;
 vertSteps = y/10;
 diff=10;
 canv =document.getElementById("myCanvas");
 ctx = canv.getContext("2d");
 x=500+x/2;
 y=250+y/2;

 while (horSteps!==0 && vertSteps!==0)   { 
    for (var i = 1; i <= horSteps; i++) {
		x-=diff;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.rect(x-5,y-5, 10, 10);
		ctx.stroke(); 
		setTimeout(function(){var s=0; s++;}, 500);
	}

	for (var j = 1; j < vertSteps; j++) {
		y-=diff;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.rect(x-5,y-5, 10, 10);
		ctx.stroke();
		setTimeout(function(){var s=0; s++;}, 500);
	}
    diff*=-1;
	horSteps--;
	vertSteps--;
  }
alert ("Spiral is finished");
}

 