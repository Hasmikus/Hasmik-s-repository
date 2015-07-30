function spiral_drawing () { 
 var x= document.getElementById("width").value;
	y = document.getElementById("height").value
	m= x/10 ;
	n =y/10;
	d=-10;
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	a = m *n;
	
    for ( var q =0; q < a; q++) {
    for (var i = 1; i < m; i++) {
		ctx.beginPath();
		ctx.rect(x-5,y-5, 10, 10);
		ctx.stroke();
		x+=d;
		ctx.moveTo(x, y);
		ctx.stroke();
		
    }
	for (var j = 1; j < n; j++) {
		ctx.rect(x-5,y-5, 10, 10);
		y+=d;
		ctx.moveTo(x, y);
		ctx.stroke();
	}
    
    d*=-1;
	m--;
	n--;

	} 
}