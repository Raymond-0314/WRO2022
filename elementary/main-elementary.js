obj = document.getElementsByClassName("object");

function start(){
    for(i = 0; i < 8; i++){
        h = obj[i].offsetHeight;
        obj[i].style.width = h + "px";
    }
}
start();
window.addEventListener('resize', start);



//--------------------------------------------------------------------
btn = document.getElementsByClassName("random-btn");

objectIn = document.getElementsByClassName("object-in") //內部

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
//--------------------------------------------------------------------
btn[1].addEventListener("click", function(){mouseClick(1)});
function mouseClick(n){
    objectData = random()
    display(objectData)
    console.log(objectData)
}

function random(){
    tag = [1, 1, 1, 1, 1, 1, 1, 1]
    color = ["empty", "empty", "green", "green", "green", "red", "red", "red"]
    areaObject = [-1, -1, -1, -1, -1, -1, -1, -1]

    for(i = 0; i < 8; i++){
        //x: 0空 1黑 2大白 3小白 4紅1 5紅2
        while(1){
            x = Math.floor(Math.random()*8)
            if(tag[x]){
                areaObject[i] = color[x]
                tag[x] = 0;
                break;
            }
        }
    }
    return areaObject
}

function display(objectData){
    for(i = 0; i < 8; i++){
        if(objectData[i] == "empty"){
            objectIn[i].style.backgroundColor = "#fff"
        }
        else if(objectData[i] == "green"){
            objectIn[i].style.backgroundColor = "rgb(59, 124, 40)"
        }
        else if(objectData[i] == "red"){
            objectIn[i].style.backgroundColor = "rgb(185, 37, 0)"
        }
    }
}