function c(val)
{
document.getElementById("in1").value=val;
}
function v(val)
{
document.getElementById("in1").value+=val;
}
function e() 
{ 
	try 
	{ 
	  c(eval(document.getElementById("in1").value)) 
	} 
	catch(e) 
	{
	  c('Error') 
	} 
}