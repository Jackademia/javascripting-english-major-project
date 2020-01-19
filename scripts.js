let userInput;
userInput = prompt("what do you want to have for dinner", "Type your answer here." );
if(userInput.toLowerCase() === "burrito" )
{
  $("#response").html("Brilliant choice!");
}else
{
  $("#response").html("Don't you want a burrito?");
}
