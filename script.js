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
//-----------------------------> for single product

var smallimg = document.getElementsByClassName(" smallimg")
var bigimg = document.getElementById("bigimg")

smallimg[0].onclick=()=>
{
    bigimg.src=smallimg[0].src
}
smallimg[1].onclick=()=>
{
    bigimg.src=smallimg[1].src
}
smallimg[2].onclick=()=>
{
    bigimg.src=smallimg[2].src
}
smallimg[3].onclick=()=>
{
    bigimg.src=smallimg[3].src
}
// for redirect to product page

// var productimg=document.getElementsByClassName("product-img")

// productimg.onclick=()=>
// {
//     for(var i =1;i<4;i++)
//     {
//         if(productimg[i].src=!bigimg.src)
//         {
//             bigimg.src=productimg[i].src
//         }
//     }
// }

