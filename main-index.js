btn = document.getElementsByClassName("random-btn");
//-----------------------------------------------------------------
btn[0].addEventListener("mouseover", function(){mouseIn(0)});
btn[1].addEventListener("mouseover", function(){mouseIn(1)});
function mouseIn(n){
    btn[n].style.boxShadow = "0px 0px 10px rgb(0 0 0 / 80%)";
    btn[n].style.backgroundColor = "#333";
    btn[n].style.color = "#fff";
}
//--------------------------------------------------------------------
btn[0].addEventListener("mouseout", function(){mouseOut(0)});
btn[1].addEventListener("mouseout", function(){mouseOut(1)});
function mouseOut(n){
    btn[n].style.boxShadow = "0px 0px 0px rgb(0 0 0 / 80%)";
    btn[n].style.backgroundColor = "#fff";
    btn[n].style.color = "#333";
}