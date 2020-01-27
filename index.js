var a,b,c;
function plus()
{
   a=document.getElementById("x").value;
   b=document.getElementById("y").value;
   c=+a+ +b;
   document.getElementById("z").value=c;

}
function minus()
{
   a=document.getElementById("x").value;
   b=document.getElementById("y").value;
   c=a-b;
   document.getElementById("z").value=c;

}
function mul()
{
   a=document.getElementById("x").value;
   b=document.getElementById("y").value;
   c=a*b;
   document.getElementById("z").value=c;

}
function div()
{
   a=document.getElementById("x").value;
   b=document.getElementById("y").value;
   c=a/b;
   document.getElementById("z").value=c;

}

