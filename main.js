var kills = 0;

function cookieClick(number){
    kills = kills + number;
    document.getElementById("kills").innerHTML = kills;
};

var swords = 0;

function buyCursor(){
    var swordCost = Math.floor(10 * Math.pow(1.1,swords));     //works out the cost of this cursor
    if(kills >= swordCost){                                   //checks that the player can afford the cursor
        swords = swords + 1;                                   //increases number of cursors
    	kills = kills - swordCost;                          //removes the cookies spent
        document.getElementById('swords').innerHTML = swords;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,swords));       //works out the cost of the next cursor
    document.getElementById('swordCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var magic = 0;

function buyMagic(){
    var magicCost = Math.floor(25 * Math.pow(1.1,magic));     //works out the cost of this cursor
    if(cookies >= magicCost){                                   //checks that the player can afford the cursor
        magic = magic + 1;                                   //increases number of cursors
    	cookies = cookies - magicCost;                          //removes the cookies spent
        document.getElementById('magic').innerHTML = magic;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(25 * Math.pow(1.1,magic));       //works out the cost of the next cursor
    document.getElementById('magicCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 1000);
window.setInterval(function(){
	
	cookieClick(magic);

}, 400);
//save and load are, you guessed it, for saving and loading.
function save(){                                               
var save = {
    kills: kills,
    swords: swords,
    magic: magic,
};
localStorage.setItem("save",JSON.stringify(save));
};
function load(){

	function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}
	var savegame = JSON.parse(localStorage.getItem("save"));
	
	if (typeof savegame.kills !== "undefined") cookies = savegame.kills;
	document.getElementById('kills').innerHTML = prettify(kills);
	if (typeof savegame.swords !== "undefined") cookies = savegame.swords;
	document.getElementById('swords').innerHTML = prettify(sword);
	if (typeof savegame.magic !== "undefined") cookies = savegame.magic;
	document.getElementById('magic').innerHTML = prettify(magic);
}

