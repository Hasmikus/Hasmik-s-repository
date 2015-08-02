function spiral_drawing() { 
 var x= document.getElementById("width").value;
 var y = document.getElementById("height").value;
 var m = x/10 ;
 var n = y/10;
 var d=10;
 var c = document.getElementById("myCanvas");
 var ctx = c.getContext("2d");
 var a = m*n;
 x=500+x/2;
 y=250+y/2;
 q= 0;	
   do  {
    for (var i = 1; i <= m; i++) {	
		
	x-=d;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.rect(x-5,y-5, 10, 10);
	ctx.stroke();
	q++;
	alert("Next step");
	}

	for (var j = 1; j < n; j++) {
	y-=d;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.rect(x-5,y-5, 10, 10);
	ctx.stroke();
	q++;
	alert("Next step");
	}
	d*=-1;
	m--;
	n--;

	} while (m!=0 && n!=0);
}