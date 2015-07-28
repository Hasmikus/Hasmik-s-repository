 function clear (val) //  This function clears the display.
{ var val = " ";
document.getElementsByName('funct_space').value = val;
}

function  adding_value(val) // Adding onclick values on current value.
{
document.getElementByName('funct_space').value+=val;
}
function execute() // Result of finished numeric functions. If there are errors type 'Error'.
{ 
	try 
	{ 
	  clear(eval(document.getElementsByName('funct_space').value));
	} 
	catch(e) 
	{
	  clear('Error');
	} 
}