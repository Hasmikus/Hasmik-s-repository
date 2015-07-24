function clear(val) //  This function clears the display.
{
document.getElementById("input1").value=val;
} 
function value(val) // Adding onclick values on current value.
{
document.getElementById("input1").value+=val;
}
function e() // Result of finished numeric functions. If there are errors type 'Error'.
{ 
	try 
	{ 
	  c(eval(document.getElementById("input1").value)) 
	} 
	catch(e) 
	{
	  clear('Error') 
	} 
}