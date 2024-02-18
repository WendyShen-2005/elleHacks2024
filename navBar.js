//initialize -----------------------------------------------
var navButtons = document.getElementById("navigationalBar").getElementsByTagName("div");
var w = window.innerWidth;
var consolelog = document.getElementById("consolelog");
var navBar = document.getElementById("navigationalBar");
var narrow;
var navCollapsed = true;
if(w < 700)
    narrow = true;
else
    narrow = false;

resizeBar();

//initialize -----------------------------------------------

for(var i = 0; i < navButtons.length; i++){
    const buttonName = navButtons[i].innerHTML + "Button";
    navButtons[i].addEventListener("mouseover", (e) => {navButtonHover(buttonName)});
    navButtons[i].addEventListener("mouseout", (e) => {navButtonUnHover(buttonName)});
    navButtons[i].addEventListener("click", (e) => {navButtonClick(buttonName)});
}

window.addEventListener("resize", (e) => {resizeBar()});

const logo = document.getElementById("logo");
logo.addEventListener("click", (e) => {collapseBar()});

// functions ---------------------------------------------------------------

function navButtonHover(buttonName){
    document.getElementById(buttonName).style.background = "rgb(126, 194, 188)";
}
function navButtonUnHover(buttonName){
    document.getElementById(buttonName).style.background = "rgb(155, 222, 216)";

}

function resizeBar () {

    w = window.innerWidth;
    if(w < 700)
        narrow = true;
    else
        narrow = false;

    if(narrow){
        if(!navCollapsed){
            navBar.style.display = "initial";
            navBar.style.height = "100%";
            navBar.style.width = "300px";
            for(var i = 0; i < navButtons.length; i++){
                navButtons[i].style.display = "initial";
                navButtons[i].style.width = "100%";
            }
        } else {
            navBar.style.height = "100%";
            navBar.style.width = "70px";
            for(var i = 0; i < navButtons.length; i++)
                navButtons[i].style.display = "none";
        }
    } else {
        navBar.style.display = "initial";
        navBar.style.height = "65px";
        navBar.style.width = "100%";
        for(var i = 0; i < navButtons.length; i++){
            navButtons[i].style.width = "fit-content";
            navButtons[i].style.display = "initial";
        }
    }
}
function collapseBar(){
    if(narrow){
        if(navCollapsed){
            navCollapsed = false;
        } else{
            navCollapsed = true;
        }
        resizeBar();
    }
}