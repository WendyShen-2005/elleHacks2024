const airports = [
    [["Abbotsford, BC"],["YXX"]],
[["Akulivik, QC"],["AKV"]],
[["Aldershot, ON - Rail service"],["XLY"]],
[["Alexandria,ON - Rail service"],["XFS"]],
[["Alma, QC"],["YTF"]],
[["Anahim Lake, BC"],["YAA"]],
[["Angling Lake, ON"],["YAX"]],
[["Arctic Bay, NU"],["YAB"]],
[["Arviat, NU"],["YEK"]],
[["Attawapiskat, ON"],["YAT"]],
[["Aupaluk, QC"],["YPJ"]],
[["Bagotville, QC"],["YBG"]],
[["Baie Comeau, QC"],["YBC"]],
[["Baker Lake, NU"],["YBK"]],
[["Bathhurst, NB"],["ZBF"]],
[["Bearskin Lake, ON"],["XBE"]],
[["Bella Bella, BC"],["ZEL"]],
[["Bella Coola, BC"],["QBC"]],
[["Belleville, ON - Rail service"],["XVV"]],
[["Berens River, MB"],["YBV"]],
[["Big Trout, ON"],["YTL"]],
[["Black Tickle, NL"],["YBI"]],
[["Blanc Sablon, QC"],["YBX"]],
[["Bonaventure, QC"],["YVB"]],
[["Brampton, ON - Rail service"],["XPN"]],
[["Brandon, MB"],["YBR"]],
[["Brantford, ON - Rail service"],["XFV"]],
[["Brochet, MB"],["YBT"]],
[["Brockville, ON"],["XBR"]],
[["Burns Lake, BC"],["YPZ"]],
[["Calgary, AB"],["YYC"]],
[["Cambridge Bay, NU"],["YCB"]],
[["Campbell River, BC"],["YBL"]],
[["Campbellton, NB - Rail service"],["XAZ"]],
[["Cape Dorset, NU"],["YTE"]],
[["Capreol, ON - Rail service"],["XAW"]],
[["Cartwright, NL"],["YRF"]],
[["Casselman, ON - Rail service"],["XZB"]],
[["Castlegar, BC"],["YCG"]],
[["Cat Lake, ON"],["YAC"]],
[["Chambord, QC - Rail service"],["XCI"]],
[["Chandler, QC - Rail service"],["XDL"]],
[["Chapleau, ON"],["YLD"]],
[["Charlottetown, NL"],["YHG"]],
[["Charlottetown, PE"],["YYG"]],
[["Chatham, ON"],["XCM"]],
[["Chemainus, BC - Rail service"],["XHS"]],
[["Chesterfield Inlet, NU"],["YCS"]],
[["Chevery, QC"],["YHR"]],
[["Chibougamau, QC"],["YMT"]],
[["Chisasibi, QC"],["YKU"]],
[["Churchill Falls, NL"],["ZUM"]],
[["Churchill, MB - Rail service"],["XAD"]],
[["Churchill, MB"],["YYQ"]],
[["Clyde River, NU"],["YCY"]],
[["Cobourg, ON - Rail service"],["XGJ"]],
[["Colville Lake, NT"],["YCK"]],
[["Comox, BC"],["YQQ"]],
[["Coral Harbour, NU"],["YZS"]],
[["Cornwall, ON"],["YCC"]],
[["Coteau, QC - Rail service"],["XGK"]],
[["Courtenay, BC"],["YCA"]],
[["Cranbrook, BC"],["YXC"]],
[["Cross Lake, MB"],["YCR"]],
[["Dauphin, MB"],["YDN"]],
[["Davis Inlet, NL"],["YDI"]],
[["Dawson City, YT"],["YDA"]],
[["Dawson Creek, BC"],["YDQ"]],
[["Deer Lake, NL"],["YDF"]],
[["Deer Lake, ON"],["YVZ"]],
[["Deline, NT"],["YWJ"]],
[["Drummondville, QC - Rail service"],["XDM"]],
[["Dryden, ON"],["YHD"]],
[["Duncan/Quam, BC"],["DUQ"]],
[["East Main, QC"],["ZEM"]],
[["Edmonton, AB - Rail service"],["XZL"]],
[["Edmonton, AB - International"],["YEG"]],
[["Esquimalt, BC"],["YPF"]],
[["Flin Flon, MB"],["YFO"]],
[["Fond du Lac, SK"],["ZFD"]],
[["Fort Albany, ON"],["YFA"]],
[["Fort Chipewyan, AB"],["YPY"]],
[["Fort Frances, ON"],["YAG"]],
[["Fort Good Hope, NT"],["YGH"]],
[["Fort Hope, ON"],["YFH"]],
[["Fort Mcmurray, AB"],["YMM"]],
[["Fort Nelson, BC"],["YYE"]],
[["Fort Severn, ON"],["YER"]],
[["Fort Simpson, NT"],["YFS"]],
[["Fort Smith, NT"],["YSM"]],
[["Fort St John, BC"],["YXJ"]],
[["Fox Harbour/St Lewis, NL"],["YFX"]],
[["Fredericton Junction, NB - Rail service"],["XFC"]],
[["Fredericton, NB"],["YFC"]],
[["Gander, NL"],["YQX"]],
[["Gaspe, QC - Rail service"],["XDD"]],
[["Gaspe, QC"],["YGP"]],
[["Georgetown, ON - Rail service"],["XHM"]],
[["Gethsemani, QC"],["ZGS"]],
[["Gillam, MB"],["YGX"]],
[["Gillies Bay, BC"],["YGB"]],
[["Gjoa Haven, NU"],["YHK"]],
[["Glencoe, ON - Rail service"],["XZC"]],
[["Gods Narrows, MB"],["YGO"]],
[["Gods River, MB"],["ZGI"]],
[["Goose Bay, NL"],["YYR"]],
[["Grande Prairie, AB"],["YQU"]],
[["Grimsby, ON"],["XGY"]],
[["Grise Fiord, NU"],["YGZ"]],
[["Guelph, ON - Rail service"],["XIA"]],
[["Halifax, NS - Rail service"],["XDG"]],
[["Halifax, NS - International"],["YHZ"]],
[["Hall Beach, NU"],["YUX"]],
[["Hamilton, ON"],["YHM"]],
[["Havre St Pierre, QC"],["YGV"]],
[["Hay River, NT"],["YHY"]],
[["Hervey, QC - Rail service"],["XDU"]],
[["High Level, AB"],["YOJ"]],
[["Holman, NT"],["YHI"]],
[["Hopedale, NL"],["YHO"]],
[["Houston, BC - Bus station"],["ZHO"]],
[["Hudson Bay, SK"],["YHB"]],
[["Igloolik, NU"],["YGT"]],
[["Iles De La Madeleine, QC"],["YGR"]],
[["Ilford, MB"],["ILF"]],
[["Ingersoll, ON - Rail service"],["XIB"]],
[["Inukjuak, QC"],["YPH"]],
[["Inuvik, NT"],["YEV"]],
[["Iqaluit, NU"],["YFB"]],
[["Island Lake/Garden Hill"],["YIV"]],
[["Ivujivik, QC"],["YIK"]],
[["Jasper, AB - Rail service"],["XDH"]],
[["Joliette, QC - Rail service"],["XJL"]],
[["Jonquiere, QC - Rail service"],["XJQ"]],
[["Kamloops, BC"],["YKA"]],
[["Kangiqsualujjuaq, QC"],["XGR"]],
[["Kangiqsujuaq, QC"],["YWB"]],
[["Kangirsuk, QC"],["YKG"]],
[["Kapuskasing, ON"],["YYU"]],
[["Kasabonika, ON"],["XKS"]],
[["Kaschechewan, ON"],["ZKE"]],
[["Keewaywin, ON"],["KEW"]],
[["Kegaska, QC"],["ZKG"]],
[["Kelowna, BC"],["YLW"]],
[["Kenora, ON"],["YQK"]],
[["Kimmirut/Lake Harbour NU"],["YLC"]],
[["Kingfisher Lake, ON"],["KIF"]],
[["Kingston, ON - Rail service"],["XEG"]],
[["Kingston, ON - Norman Rogers Airport"],["YGK"]],
[["Kitchener, ON"],["YKF"]],
[["Klemtu, BC"],["YKT"]],
[["Kugaaruk, NU"],["YBB"]],
[["Kugluktuk/Coppermine, NU"],["YCO"]],
[["Kuujjuaq, QC"],["YVP"]],
[["Kuujjuarapik, QC"],["YGW"]],
[["La Grande, QC"],["YGL"]],
[["La Ronge, SK"],["YVC"]],
[["La Tabatiere, QC"],["ZLT"]],
[["La Tuque, QC"],["YLQ"]],
[["Lac Brochet, MB"],["XLB"]],
[["Lac Edouard, QC - Rail service"],["XEE"]],
[["Ladysmith, BC - Rail service"],["XEH"]],
[["Langford, BC - Rail service"],["XEJ"]],
[["Lansdowne House, ON"],["YLH"]],
[["Leaf Rapids, MB"],["YLR"]],
[["Lethbridge, AB"],["YQL"]],
[["Lloydminister, AB"],["YLL"]],
[["London, ON - Rail service"],["XDQ"]],
[["London, ON - Municipal Airport"],["YXU"]],
[["Lutselke/Snowdrift, NT"],["YSG"]],
[["Mary's Harbour, NL"],["YMH"]],
[["Maxville, ON - Rail service"],["XID"]],
[["Medicine Hat, AB"],["YXH"]],
[["Melville, SK - Rail service"],["XEK"]],
[["Miramichi, NB - Rail service"],["XEY"]],
[["Moncton, NB - Rail service"],["XDP"]],
[["Moncton, NB - Airport"],["YQM"]],
[["Mont Joli, QC"],["YYY"]],
[["Montreal, QC - Dorval Rail service"],["XAX"]],
[["Montreal, QC - Downtown Rail service"],["YMY"]],
[["Montreal, QC - St Lambert Rail service"],["XLM"]],
[["Montreal, QC - all airports"],["YMQ"]],
[["Montreal, QC - Dorval"],["YUL"]],
[["Moosonee, ON"],["YMO"]],
[["Muskrat Dam, ON"],["MSA"]],
[["Nain, NL"],["YDP"]],
[["Nakina, ON"],["YQN"]],
[["Nanaimo, BC - Harbour Airport"],["ZNA"]],
[["Nanaimo, BC - Cassidy Airport"],["YCD"]],
[["Nanisivik, NU"],["YSR"]],
[["Napanee, ON - Rail service"],["XIF"]],
[["Natashquan, QC"],["YNA"]],
[["Nemiscau, QC"],["YNS"]],
[["New Carlisle, QC - Rail service"],["XEL"]],
[["New Richmond, QC - Rail service"],["XEM"]],
[["Niagara Falls, ON - Rail service"],["XLV"]],
[["Noranda/Rouyn, QC"],["YUY"]],
[["Norman Wells, NT"],["YVQ"]],
[["North Bay, ON"],["YYB"]],
[["North Spirit Lake, ON"],["YNO"]],
[["Norway House, MB"],["YNE"]],
[["Ogoki, ON"],["YOG"]],
[["Old Crow, YT"],["YOC"]],
[["Opapamiska Lake, ON"],["YBS"]],
[["Oshawa, ON"],["YOO"]],
[["Ottawa, ON - Rail service"],["XDS"]],
[["Ottawa, ON - International"],["YOW"]],
[["Oxford House, MB"],["YOH"]],
[["Pakuashipi, QC"],["YIF"]],
[["Pangnirtung, NU"],["YXP"]],
[["Parent, QC - Rail service"],["XFE"]],
[["Parksville, BC - Rail service"],["XPB"]],
[["Paulatuk, NT"],["YPC"]],
[["Peace River, AB"],["YPE"]],
[["Peawanuck, ON"],["YPO"]],
[["Pembroke, ON"],["YTA"]],
[["Penticton, BC"],["YYF"]],
[["Perce, QC - Rail service"],["XFG"]],
[["Pickle Lake, ON"],["YPL"]],
[["Pikangikum, ON"],["YPM"]],
[["Pointe-aux-Trembles, QC - Rail service"],["XPX"]],
[["Points North Landing, SK"],["YNL"]],
[["Pond Inlet, NU"],["YIO"]],
[["Poplar Hill, ON"],["YHP"]],
[["Port Alberni, BC"],["YPB"]],
[["Port Hardy, BC"],["YZT"]],
[["Port Hope Simpson, NL"],["YHA"]],
[["Port Meiner, QC"],["YPN"]],
[["Postville, NL"],["YSO"]],
[["Povungnituk, QC"],["YPX"]],
[["Powell River, BC"],["YPW"]],
[["Prescott, ON - Rail service"],["XII"]],
[["Prince Albert, SK"],["YPA"]],
[["Prince George, BC - Rail service"],["XDV"]],
[["Prince George, BC"],["YXS"]],
[["Prince Rupert, BC - Rail service"],["XDW"]],
[["Prince Rupert, BC - Digby Island Airport"],["YPR"]],
[["Pukatawagan, MB -"],["XPK"]],
[["Qikiqtarjuaq, NU"],["YVM"]],
[["Qualicum, BC"],["XQU"]],
[["Quaqtaq, QC"],["YQC"]],
[["Quebec, QC - International Airport"],["YQB"]],
[["Quebec, QC - Charny Rail service"],["YFZ"]],
[["Quebec, QC - Levis Rail service"],["XLK"]],
[["Quebec, QC - Quebec Station Rail service"],["XLJ"]],
[["Quebec, QC - Sainte-Foy Rail service"],["XFY"]],
[["Quesnel, BC"],["YQZ"]],
[["Rae Lakes, NT"],["YRA"]],
[["Rainbow Lake, AB"],["YOP"]],
[["Rankin Inlet, NU"],["YRT"]],
[["Red Lake, ON"],["YRL"]],
[["Red Sucker Lake, MB"],["YRS"]],
[["Regina, SK"],["YQR"]],
[["Repulse Bay, NU"],["YUT"]],
[["Resolute, NU"],["YRB"]],
[["Rigolet, NL"],["YRG"]],
[["Rimouski, QC"],["YXK"]],
[["Riviere-a-Pierre, QC - Rail service"],["XRP"]],
[["Roberval, QC"],["YRJ"]],
[["Round Lake, ON"],["ZRJ"]],
[["Rouyn/Noranda, QC"],["YUY"]],
[["Sachigo Lake, ON"],["ZPB"]],
[["Sachs Harbour, NT"],["YSY"]],
[["Sackville, NB - Rail service"],["XKV"]],
[["Saint Hyacinthe, QC - Rail service"],["XIM"]],
[["Saint John, NB"],["YSJ"]],
[["Saint Johns, NL"],["YYT"]],
[["Saint Leonard, NB"],["YSL"]],
[["Salluit, QC"],["YZG"]],
[["Sandy Lake, ON"],["ZSJ"]],
[["Sanikiluaq, NU"],["YSK"]],
[["Sarnia, ON - Rail service"],["XDX"]],
[["Sarnia, ON"],["YZR"]],
[["Saskatoon, SK"],["YXE"]],
[["Sault Ste-Marie, ON"],["YAM"]],
[["Schefferville, QC"],["YKL"]],
[["Senneterre, QC - Rail service"],["XFK"]],
[["Sept-Iles, QC"],["YZV"]],
[["Shamattawa, MB"],["ZTM"]],
[["Shawinigan, QC - Rail service"],["XFL"]],
[["Shawnigan, BC - Rail service"],["XFM"]],
[["Sioux Lookout, ON"],["YXL"]],
[["Smith Falls, ON"],["YSH"]],
[["Smithers, BC"],["YYD"]],
[["Snare Lake, NT"],["YFJ"]],
[["South Indian Lake, MB"],["XSI"]],
[["St Anthony, NL"],["YAY"]],
[["St Catharines, ON"],["YCM"]],
[["St Marys, ON - Rail service"],["XIO"]],
[["Ste Therese Point, MB"],["YST"]],
[["Stephenville, NL"],["YJT"]],
[["Stony Rapids, SK"],["YSF"]],
[["Strathroy, ON - Rail service"],["XTY"]],
[["Sudbury, ON - Rail service"],["XDY"]],
[["Sudbury, ON"],["YSB"]],
[["Summer Beaver, ON"],["SUR"]],
[["Swan River, MB"],["ZJN"]],
[["Sydney, NS"],["YQY"]],
[["Tadoule Lake, MB"],["XTL"]],
[["Taloyoak, NU"],["YYH"]],
[["Tasiujuaq, QC"],["YTQ"]],
[["Terrace, BC"],["YXT"]],
[["Tete-a-La Baleine, QC"],["ZTB"]],
[["The Pas, MB - Rail service"],["XDZ"]],
[["The Pas, MB"],["YQD"]],
[["Thicket Portage, MB"],["YTD"]],
[["Thompson, MB"],["YTH"]],
[["Thunder Bay, ON"],["YQT"]],
[["Timmins, ON"],["YTS"]],
[["Tofino, BC,"],["YAZ"]],
[["Toronto, ON - Downtown Rail service"],["YBZ"]],
[["Toronto, ON - Guildwood Rail service"],["XLQ"]],
[["Toronto, ON - Toronto Island Airport"],["YTZ"]],
[["Toronto, ON - International"],["YYZ"]],
[["Truro, NS - Rail service"],["XLZ"]],
[["Tuktoyaktuk, NT"],["YUB"]],
[["Tulita/Fort Norman, NT"],["ZFN"]],
[["Umiujag, QC"],["YUD"]],
[["Uranium City, SK"],["YBE"]],
[["Val-d'Or, QC"],["YVO"]],
[["Vancouver, BC - Coal Harbour"],["CXH"]],
[["Vancouver, BC - Rail service"],["XEA"]],
[["Vancouver, BC - International"],["YVR"]],
[["Victoria, BC - Inner Harbor"],["YWH"]],
[["Victoria, BC - International"],["YYJ"]],
[["Wabush, NL"],["YWK"]],
[["Waskaganish, QC"],["YKQ"]],
[["Watford, ON - Rail service"],["XWA"]],
[["Webequie, ON"],["YWP"]],
[["Wemindji, QC"],["YNC"]],
[["Weymont, QC - Rail service"],["XFQ"]],
[["Wha Ti/Lac La Martre, NT"],["YLE"]],
[["Whale Cove, NU"],["YXN"]],
[["White River, ON"],["YWR"]],
[["Whitehorse, YT"],["YXY"]],
[["Williams Harbour, NL"],["YWM"]],
[["Williams Lake, BC"],["YWL"]],
[["Windsor, ON - Rail service"],["XEC"]],
[["Windsor, ON"],["YQG"]],
[["Winnipeg, MB - Rail service"],["XEF"]],
[["Winnipeg, MB - International"],["YWG"]],
[["Wollaston Lake, SK"],["ZWL"]],
[["Woodstock, ON - Rail service"],["XIP"]],
[["Wunnummin Lake, ON"],["WNN"]],
[["Wyoming, ON - Rail service"],["XWY"]],
[["Yarmouth, NS"],["YQI"]],
[["Yellowknife, NT"],["YZF"]],
[["York Landing, MB"],["ZAC"]]
];

const originInput = document.getElementById("originInput");
const destinationInput = document.getElementById("destinationInput");

const searchSelections = [
    document.getElementById("originInputOptCity"),
    document.getElementById("originInputOptCode"),
    document.getElementById("destinationInputOptCity"),
    document.getElementById("destinationInputOptCode")
]

originInput.addEventListener("input", (e) => {searchSelection("originInput")});
destinationInput.addEventListener("input", (e) => {searchSelection("destinationInput")});

var searchButton = document.getElementById("searchSubmit");
searchButton.addEventListener("mouseover", (e) => {searchHover()});
searchButton.addEventListener("mouseout", (e) => {searchUnHover()});
searchButton.addEventListener("click", generateFlights);

var originSelected = false;
var destinationSelected = false;

function generateFlights() {
    document.getElementById("inputError").innerHTML = "";
    if(originSelected && destinationSelected){

        for(var i = 0; i < 4; i++){
            const flight = document.getElementById("flight" + i);
            flight.style.display = "initial";
        }

        generateFlightNum();
        generateFlightTimes();

        var title = "Flights from: ";
        title += document.getElementById("originInput").value + " to ";
        title += document.getElementById("destinationInput").value;

        document.getElementById("bigSubtitle").innerHTML = title;
        
    } else {
        document.getElementById("inputError").innerHTML = "Error: Selection must be complete";
    }
}

function generateFlightNum(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i = 0; i < 4; i++){
        var tempFlightNum= "";
        for(var j = 0; j < 3; j++){
            const randNum = Math.floor(26 * Math.random());
            tempFlightNum += letters[randNum];
        }
        for(var j = 0; j < 3; j++){
            const randNum = Math.floor(10 * Math.random());
            tempFlightNum += randNum;
        }
        const flightNum = tempFlightNum;

        document.getElementById("flightNum" + i).innerHTML = "Flight #" + flightNum;

    }
}

function generateFlightTimes() {
    const currentDate = new Date ();
    const timeStamp = currentDate.getHours();
    var hours = [];

    for(var i = 0; i < 4; i++){
        var flightTime = document.getElementById("flightTime" + i);
        var onTime = Math.floor(Math.random() * 3);
        var departureHour;
        const departureMinute = Math.floor(11 * Math.random()) * 5;
        if(i == 0){//this block is fine, goes through first loop fine
            departureHour = timeStamp + 1;
            if(departureHour >= 24){
                departureHour -= 24;
            }
            hours[0] = departureHour;
        } else {
            const addHour = Math.floor(Math.random() * 3) + 1;
            departureHour = hours[i - 1] + addHour;
            if(departureHour >= 24){
                departureHour -= 24;
            }
            hours[i] = departureHour;
        }

        if(departureHour < 10){
            departureHour = "0" + departureHour; 
        }

        if(onTime == 0){
            onTime = " DELAYED ]";
            flightTime.style.color = "darkred";
        } else if (onTime == 1){
            onTime = " ON TIME ]";
            flightTime.style.color = "green";
        } else {
            onTime = " EARLY ]";
            flightTime.style.color = "rgb(153, 82, 0)";
        }

        if(departureMinute == 5)
            flightTime.innerHTML = departureHour + ":0" + departureMinute;
        else if(departureMinute == 0)
            flightTime.innerHTML = departureHour + ":00";
        else
            flightTime.innerHTML = departureHour + ":" + departureMinute;
        
        flightTime.innerHTML += " - - - - - - - - - - [ " + onTime;
    }
}


function searchHover(){
    searchButton.style.boxShadow = "1px 1px 2px rgb(64, 58, 58)";
    searchButton.style.backgroundColor = "rgb(120, 102, 98)";
}

function searchUnHover(){
    searchButton.style.boxShadow = "none";
    searchButton.style.backgroundColor = "rgb(153, 137, 137)";

}

function searchSelection (selection) {
    const airportInput = document.getElementById(selection).value;
    var originBooleen;
    if(selection == "originInput")
        originBooleen = true;

    if(airportInput == ""){
        if(originBooleen){
            searchSelections[0].style.display = "none";
            searchSelections[1].style.display = "none";
        } else{
            searchSelections[2].style.display = "none";
            searchSelections[3].style.display = "none";
        }
    } else {

        if(originBooleen){
            searchSelections[0].style.display = "block";
            searchSelections[1].style.display = "block";
            searchSelections[0].addEventListener("mouseover", (e) => {searchSelectionHover("originInputOptCity")});
            searchSelections[1].addEventListener("mouseover", (e) => {searchSelectionHover("originInputOptCode")});
            searchSelections[0].addEventListener("mouseout", (e) => {searchSelectionUnHover("originInputOptCity")});
            searchSelections[1].addEventListener("mouseout", (e) => {searchSelectionUnHover("originInputOptCode")});
            searchSelections[0].addEventListener("click", (e) => {selected("originInputOptCity", "origin")});
            searchSelections[1].addEventListener("click", (e) => {selected("originInputOptCode", "origin")});
        } else{
            searchSelections[2].style.display = "block";
            searchSelections[3].style.display = "block";
            searchSelections[2].addEventListener("mouseover", (e) => {searchSelectionHover("destinationInputOptCity")});
            searchSelections[3].addEventListener("mouseover", (e) => {searchSelectionHover("destinationInputOptCode")});
            searchSelections[2].addEventListener("mouseout", (e) => {searchSelectionUnHover("destinationInputOptCity")});
            searchSelections[3].addEventListener("mouseout", (e) => {searchSelectionUnHover("destinationInputOptCode")});
            searchSelections[2].addEventListener("click", (e) => {selected("destinationInputOptCity", "destination")});
            searchSelections[3].addEventListener("click", (e) => {selected("destinationInputOptCode", "destination")});
        }

        searchByCity(selection, airports, airportInput);
        searchByCode(selection, airports, airportInput);
    }
}

function searchSelectionHover(selection){
    document.getElementById(selection).style.background = "rgb(209, 199, 199)";
}

function searchSelectionUnHover(selection){
    document.getElementById(selection).style.background = "rgb(236, 234, 234)";
}

function selected(selection, inputSpot){
    if (inputSpot == "origin"){
        if (selection == "originInputOptCity"){
            document.getElementById("originInput").value = document.getElementById("originInputOptCity").innerHTML;
        } else {
            document.getElementById("originInput").value = document.getElementById("originInputOptCode").innerHTML;
        }
        originSelected = true;
        document.getElementById("originInput").style.background = "rgb(189, 217, 182)";
    } else {
        var destinationInput = document.getElementById("destinationInput");
        var originInput = document.getElementById("originInput").value;
        if (selection == "destinationInputOptCity"){
            destinationInput.value = document.getElementById("destinationInputOptCity").innerHTML;
        } else {
            destinationInput.value = document.getElementById("destinationInputOptCode").innerHTML;
        }
        if(destinationInput.value != originInput){
            destinationSelected = true;
            document.getElementById("destinationInput").style.background = "rgb(189, 217, 182)";
        } else {
            document.getElementById("inputError").innerHTML = "Error: Origin cannot be the same as Destination";
        }
    }
}

function searchByCity(selection, airports, airportInput){
    for(var i = 0; i < airports.length; i++){
        //if length does not exceed input AND the first letters are equal to the input
        if((airports[i][0] + "").length >= airportInput.length){
            const checkString = (airports[i][0] + "").substring(0, airportInput.length);
            //convert both strings to lower case to check if they're the same, check first letter to make to make it more efficient
            if(checkString.toLowerCase().substring(0, 1) == airportInput.substring(0, 1) && checkString.toLowerCase() == airportInput.toLowerCase()){
                const airportSelection = airports[i][0] + " (" + airports[i][1] + ")";
                document.getElementById(selection + "OptCity").innerHTML = airportSelection;
                i = airports.length;
            }
        } else{
            document.getElementById(selection + "OptCity").innerHTML = "";
        }

    }

}

function searchByCode (selection, airports, airportInput){

    for(var i = 0; i < airports.length; i++){
        //if length does not exceed input AND the first letters are equal to the input
        if((airports[i][1] + "").length >= airportInput.length){
            const checkString = (airports[i][1] + "").substring(0, airportInput.length);
            //convert both strings to lower case to check if they're the same, check first letter to make to make it more efficient
            if(checkString.toLowerCase().substring(0, 1) == airportInput.substring(0, 1) && checkString.toLowerCase() == airportInput.toLowerCase()){
                const airportSelection = airports[i][0] + " (" + airports[i][1] + ")";
                document.getElementById(selection + "OptCode").innerHTML = airportSelection;
                i = airports.length;
            }
        } else{
            document.getElementById(selection + "OptCode").innerHTML = "";
        }

}
}