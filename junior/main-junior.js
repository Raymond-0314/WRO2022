fac = document.getElementsByClassName("factory");
facIn = document.getElementsByClassName("fac-in");
startArea = document.getElementsByClassName("start");
startNothing = document.getElementById("start-nothing");
startContainer = document.getElementById("start-container");
function start(){
    for(i = 0; i < 6; i++){
        h = fac[i].offsetHeight;
        fac[i].style.width = h + "px";
    }
    h0 = startArea[0].offsetHeight;
    startArea[0].style.width = h0 + "px";
    startArea[1].style.width = h0 + "px";
    
    h2 = facIn[0].offsetHeight;
    facIn[0].style.width = h2*3 + "px";
    facIn[1].style.width = h2*3 + "px";

    h1 = startContainer.offsetWidth;
    startNothing.style.width = h1-(2*h0)+ "px";

}
start();
window.addEventListener('resize', start);



//--------------------------------------------------------------------
btn = document.getElementsByClassName("random-btn");

start1 = document.getElementById("start1");
start2 = document.getElementById("start2");

area = document.getElementsByClassName("area")
/*
area[0] red2
area[1] red1
area[2] yellow1
area[3] yellow2
area[4] green2
area[5] green1
area[6] brown2
area[7] brown1
area[8] white1
area[9] white2
area[10] blue2
area[11] blue1
*/

//--------------------------------------------------------------------
btn[0].addEventListener("mouseover", function(){mouseIn(0)});
btn[1].addEventListener("mouseover", function(){mouseIn(1)});
btn[2].addEventListener("mouseover", function(){mouseIn(2)});
btn[3].addEventListener("mouseover", function(){mouseIn(3)});
function mouseIn(n){
    btn[n].style.boxShadow = "0px 0px 10px rgb(0 0 0 / 80%)";
    btn[n].style.backgroundColor = "#333";
    btn[n].style.color = "#fff";
}
//--------------------------------------------------------------------
btn[0].addEventListener("mouseout", function(){mouseOut(0)});
btn[1].addEventListener("mouseout", function(){mouseOut(1)});
btn[2].addEventListener("mouseout", function(){mouseOut(2)});
btn[3].addEventListener("mouseout", function(){mouseOut(3)});
function mouseOut(n){
    btn[n].style.boxShadow = "0px 0px 0px rgb(0 0 0 / 80%)";
    btn[n].style.backgroundColor = "#fff";
    btn[n].style.color = "#333";
}
//--------------------------------------------------------------------
btn[1].addEventListener("click", function(){mouseClick(1)});
btn[2].addEventListener("click", function(){mouseClick(2)});
btn[3].addEventListener("click", function(){mouseClick(3)});
function mouseClick(n){
    if(n == 1){
        startArea = randomStart()
        object = randomObject()

        displayStartArea(startArea)
        displayObject(object)
    }
    else if(n == 2){
        startArea = randomStart()

        displayStartArea(startArea)
    }
    else if(n == 3){
        object = randomObject()

        displayObject(object)
    }
    console.log(startArea)
    console.log(object)
}

function randomStart(){
    return Math.floor(Math.random()*2)+1;
}
function randomObject(){
    tag = [1, 1, 1, 1, 1, 1]
    areaObject = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
    for(i = 0; i < 6; i++){
        //x: 0空 1黑 2大白 3小白 4紅1 5紅2
        while(1){
            x = Math.floor(Math.random()*6)
            if(tag[x]){
                areaObject[i][0] = x
                tag[x] = 0;
                break;
            }
        }
        //1 or 2 號位
        areaObject[i][1] = Math.floor(Math.random()*2)+1;
    }
    return areaObject
}

function displayStartArea(startArea){
    //startArea
    start1.style.backgroundColor = "#fff";
    start2.style.backgroundColor = "#fff";

    if(startArea == 1){
        start1.style.backgroundColor = "#333";
    }
    else{
        start2.style.backgroundColor = "#333";
    }
}
function displayObject(object){
    //object
    for(i = 0; i < 6; i++){
        photo = findPhoto(0)
        area[i*2].style.backgroundImage = "url(" + photo + ")"
        area[i*2+1].style.backgroundImage = "url(" + photo + ")"

        photo = findPhoto(object[i][0])
        if(object[i][1] == 1){
            area[i*2].style.backgroundImage = "url(" + photo + ")"
        }
        else{
            area[i*2+1].style.backgroundImage = "url(" + photo + ")"
        }
    }
}

function findPhoto(obj){
    if(obj == 0){
        url = "./img/area.png"
    }
    else if(obj == 1){
        url = "./img/area-chemical.png"
    }
    else if(obj == 2){
        url = "./img/area-bigPerson.png"
    }
    else if(obj == 3){
        url = "./img/area-smallPerson.png"
    }
    else{
        url = "./img/area-fire.png"
    }
    return url
}