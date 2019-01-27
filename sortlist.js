//This code takes in a premade array of strings, sorts the array, and prints each value in the array once sorted.

var names = ["Zach", "James", "Allison"]
var i=0;
var hold;
var done=false

function isSorted(list)
{
  for(var i=0;i<list.length-1; i++)
  {
    if(list[i]>list[i+1])
    return false
  }
  return true
}

while(isSorted(names)==false)
{
  for (i=0;i<names.length-1;i++)
  {
    if(names[i]>=names[i+1])
    {
      hold = names[i]
      names[i] = names[i+1]
      names[i+1]=hold
    }
  }
}

for(i=0;i<names.length;i++)
{
  console.log(names[i]);
}

