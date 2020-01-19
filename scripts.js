
for(let i = 1; i<4; i=i+1)
{
  if(i===1)
  {
    $("#response").html(i + " is odd.");
  }else
  {
    if(i%2 === 0)
    {
      $("#response").append("<br/>" + i +" is even.");
    }else {
      {
        $("#response").append("<br/>" + i +" is odd.");
      }
    }

  }


}
