function clearing (val) //  This function clears the display.
{ var val;
document.getElementById('input_id').value= val;
}

function  adding_value(val) // Adding onclick values on current value.
{
document.getElementById('input_id').value+=val;
}
function execute_result() // Result of finished numeric functions. If there are errors type 'Error'.
{ 
	try 
	{ 
	  clearing(eval(document.getElementById('input_id').value));
	} 
	catch(e) 
	{
	  clearing('Error');
	} 
}