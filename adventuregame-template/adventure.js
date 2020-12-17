var gameContainer = document.getElementById("game-container")
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryItem = document.getElementById("inventoryItem");
var element = document.getElementById("gameContainer");


function setButton(textButton1, eventHandler1, textButton2, eventHandler2, textButton3, eventHandler3){
	if(textButton1 != null){
		button1.innerHTML = textButton1;
		button1.style.display = "flex";
		button1.onclick = eventHandler1;
	}else{
		button1.style.display = "none";
	}

	if(textButton2 != null){
		button2.innerHTML = textButton2;
		button2.style.display = "flex";
		button2.onclick = eventHandler2;
	}else{
		button2.style.display = "none";
	}

	if(textButton3 != null){
		button3.innerHTML = textButton3;
		button3.style.display = "flex";
		button3.onclick = eventHandler3;
	}else{
		button3.style.display = "none";
	}
}

start();

function start(){
	inventoryItem.style.display = "none";
	description.style.display = "flex"; 
	
	setButton(null, null, "start", level1, null, null);
}


function level1(){//team kiezen
	description.style.display = "flex";
	description.innerHTML = "kies een team";
	
	setButton("barcelona", level7, "ajax", level2, "feyenoord", level14);
}

function level2(){//ajax kant positie
	gameContainer.style.backgroundImage = "url('img/positie.png')";
	description.innerHTML = "welke positie wilt uw staan?";
	description.style.display = "flex";
	
	setButton("verdediger", level3, "middenveld", level4, "spits", level5);
}

function level3(){//verdediger
	gameContainer.style.backgroundImage = "url('img/ajax-kleedkamer.jpg')";
	inventoryItem.style.display = "flex";
	inventoryItem.onclick = balGevonden;
	description.innerHTML = "je bent in de ajax kleedkamer maar mist de bal die gaan we zoeken";
	description.style.color = "white";
	description.style.display = "flex";
	
	setButton(null, null, "naar het veld", null, null, null);
}

function balGevonden(){
	alert("goed je heb de bal gevonden nu snel naar het veld");
	button2.onclick = level6;
	inventoryItem.style.display = "none";
}

function level4(){//middenveld
	gameContainer.style.backgroundImage = "url('img/ajax-kleedkamer.jpg')";
	inventoryItem.style.display = "flex";
	inventoryItem.onclick = balGevonden;
	description.innerHTML = "je bent in de ajax kleedkamer maar mist de bal die gaan we zoeken";
	description.style.color = "white";
	description.style.display = "flex";
	
	setButton(null, null, "naar het veld", null, null, null);
}

function level5(){//spits
	gameContainer.style.backgroundImage = "url('img/ajax-kleedkamer.jpg')";
	inventoryItem.style.display = "flex";
	inventoryItem.onclick = balGevonden;
	description.innerHTML = "je bent in de ajax kleedkamer maar mist de bal die gaan we zoeken";
	description.style.color = "white";
	description.style.display = "flex";
	
	setButton(null, null, "naar het veld", null, null, null);
}

function level6(){//penalty
	gameContainer.style.backgroundImage = "url('img/penalty.jpg')";
	description.innerHTML = "in de 92ste minuut krijg je een penalty als je scoor win je het kampioenschap maar welke kant kies je?";
	description.style.display = "flex";
	description.style.color = "black";
	
	setButton("links", penaltyMis, "midden", penaltyMis, "rechts", penaltyRaak);
}

function penaltyRaak(){
	alert("JAAA GOALL UW HEEFT GEWONNEN");
	gameContainer.style.backgroundImage = "url('img/ajax-kampioen.jpg')";
	description.style.display = "none";
	
	setButton(null, null, null, null, null, null);
}

function penaltyMis(){
	alert("NEE MISS DAAR GAAT HET KAMPIOENSCHAP");
	gameContainer.style.backgroundImage = "url('img/ajax-huilen.jpg')";
	description.style.display = "none";
	
	setButton(null, null, null, null, null, null);
}

function level7(){//barcelona huis
	gameContainer.style.backgroundImage = "url('img/barcelona-huis.jpg')";
	inventoryItem.style.display = "flex";
	inventoryItem.onclick = schoenGevonden;
	document.getElementById("inventoryItem").src = "img/voetbalschoen.jpg";
    var element = document.getElementById("inventoryItem");
    element.id = "voetbalschoen";
	description.style.display = "flex";
	description.innerHTML = "je bent thuis en moet naar het stadion vergeet je voetbalschoenen niet";

	setButton(null, null, "naar de auto", null, null, null);
}

function schoenGevonden(){
	alert("goed je heb de schoen gevonden stap nu snel in de auto");
	inventoryItem.style.display = "none";
	button2.onclick = level8;
}

function level8(){//barcelona auto
	gameContainer.style.backgroundImage = "url('img/barcelona-auto.jpg')";
	description.style.display = "flex";
	description.style.color = "white";
	description.innerHTML = "we gaan nu onderweg naar het stadion maar hoe gaan we richting het stadion?";

	setButton("over de snelweg", level9, null, null, "door de stad", level11);
}

function level9(){//snelweg
	gameContainer.style.backgroundImage = "url('img/snelweg.jpg')";
	description.style.display = "flex";
	description.innerHTML = "we kunnen wel rustig 100 rijden maar met de mercedes kunnen we ook 180 linkerbaan";
	description.style.color = "black";

	setButton("rustig 100", level11, null, null, "180 linkerbaan", level10);
}

function level10(){//aanhouding
	gameContainer.style.backgroundImage = "url('img/aanhouding.jpg')";
	description.style.display = "none";
	alert("gefaald je komt een nacht vast te zitten");

	setButton(null, null, null, null, null, null);
}

function level11(){//stadion
	gameContainer.style.backgroundImage = "url('img/stadion.jpeg')";
	description.style.display = "flex";
	description.innerHTML = "we hebben de wedstrijd verloren en het kampioenschap transfer maken naar ajax maar je kan ook blijven";
	description.style.color = "purple";

	setButton("blijven", level12, null, null, "naar ajax", level13);
}

function level12(){//barcelona kampioen
	gameContainer.style.backgroundImage = "url('img/barcelona-kampioen.jpg')";
	alert("goede keuze gemaakt om te blijven nu ben je kampioen");
	description.style.display = "none";

	setButton(null, null, null, null, null, null);
}

function level13(){//ajax geen kampioen
	gameContainer.style.backgroundImage = "url('img/ajax-geen-kampioen.jpg')";
	alert("foute keuze gemaakt bij ajax word je geen kampioen");
	description.style.display = "none";

	setButton(null, null, null, null, null, null);
}

function level14(){//feyenoord
	alert("gefaald je mag geen amateur team kiezen");
	gameContainer.style.backgroundImage = "url('img/failed.gif')";
	description.style.display = "none";
	
	setButton(null, null, null, null, null, null);
}

