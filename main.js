const elements = [
    contactUs = document.getElementById("contactUs"),
    airlines = document.getElementById("airlines"),
    shuttleBuses = document.getElementById("shuttleBuses"),
    hotels = document.getElementById("hotels"),
    form = document.getElementById("form"),
    flightTracker = document.getElementById("flightTracker"),
    hotelAvails = document.getElementById("hotelAvails")
]

const elementNames = ["contactUs", "airlines", "shuttleBuses", "hotels",
"form", "flightTracker", "hotelAvails"]

for(var i = 0; i < elements.length; i++){
    const name = elementNames[i];

    elements[i].addEventListener("mouseover", (e) => {contactButtonHover(name)});
    elements[i].addEventListener("mouseout", (e) => {contactButtonUnHover(name)});
}

function contactButtonHover (buttonName){
    document.getElementById(buttonName).style.background = "rgb(245, 223, 171)";
}

function contactButtonUnHover (buttonName){
    document.getElementById(buttonName).style.background = "white";
}