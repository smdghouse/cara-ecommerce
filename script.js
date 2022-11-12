var menu = document.getElementById("menu")
var menudiv = document.getElementById("menudiv")
var nav = document.getElementById("nav")
var close = document.getElementById("close")
menu.onclick= ()=>
{
    if(nav.style.right == "-300px")
    {
        nav.style.right="0px"
    }
    else
    {
        nav.style.right="-300px"
    }
}
close.onclick=()=>
{
    if(nav.style.right == "-300px")
    {
        nav.style.right="0px"
    }
    else
    {
        nav.style.right="-300px"
    }
}
