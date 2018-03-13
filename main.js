var kills = 0;
var coins = 0;
var killNum = 1;
function kill(){
    kills = kills + killNum;
    coins = coins + killNum;
    document.getElementById("kills").innerHTML = kills;
    document.getElementById("coins").innerHTML = coins;
	
};
function autokill(number){
    kills = kills + number;
    coins = coins + number;
    document.getElementById("kills").innerHTML = kills;
    document.getElementById("coins").innerHTML = coins;
	
};

var swords = 0;

function buySword(){
    var swordCost = Math.floor(10 * Math.pow(1.1,swords));     //works out the cost of this cursor
    if(coins >= swordCost){                                   //checks that the player can afford the cursor
        swords = swords + 1;                                   //increases number of cursors
    	coins = coins - swordCost;                          //removes the cookies spent
        document.getElementById('swords').innerHTML = swords;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,swords));       //works out the cost of the next cursor
    document.getElementById('swordCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var magic = 0;

function buyMagic(){
    var magicCost = Math.floor(100 * Math.pow(1.1,magic));     //works out the cost of this cursor
    if(coins >= magicCost){                                   //checks that the player can afford the cursor
        magic = magic + 1;                                   //increases number of cursors
    	coins = coins - magicCost;                          //removes the cookies spent
        document.getElementById('magic').innerHTML = magic;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,magic));       //works out the cost of the next cursor
    document.getElementById('magicCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
var cannons = 0;

function buyCannon(){
    var cannonCost = Math.floor(500 * Math.pow(1.1,cannons));     //works out the cost of this cursor
    if(coins >= cannonCost){                                   //checks that the player can afford the cursor
        cannons = cannons + 1;                                   //increases number of cursors
    	coins = coins - cannonCost;                          //removes the cookies spent
        document.getElementById('cannons').innerHTML = cannons;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(500 * Math.pow(1.1,cannons));       //works out the cost of the next cursor
    document.getElementById('cannonCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
var towers = 0;

function buyTower(){
    var towerCost = Math.floor(5000 * Math.pow(1.1,towers));     //works out the cost of this cursor
    if(coins >= towerCost){                                   //checks that the player can afford the cursor
        towers = towers + 1;                                   //increases number of cursors
    	coins = coins - towerCost;                          //removes the cookies spent
        document.getElementById('towers').innerHTML = towers;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(5000 * Math.pow(1.1,towers));       //works out the cost of the next cursor
    document.getElementById('towerCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
var kills = 0;
var coins = 0;

function kill(number){
    kills = kills + number;
    coins = coins + number;
    document.getElementById("kills").innerHTML = kills;
    document.getElementById("coins").innerHTML = coins;
	
};

var swords = 0;

function buySword(){
    var swordCost = Math.floor(10 * Math.pow(1.1,swords));     //works out the cost of this cursor
    if(coins >= swordCost){                                   //checks that the player can afford the cursor
        swords = swords + 1;                                   //increases number of cursors
    	coins = coins - swordCost;                          //removes the cookies spent
        document.getElementById('swords').innerHTML = swords;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,swords));       //works out the cost of the next cursor
    document.getElementById('swordCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var magic = 0;

function buyMagic(){
    var magicCost = Math.floor(100 * Math.pow(1.1,magic));     //works out the cost of this cursor
    if(coins >= magicCost){                                   //checks that the player can afford the cursor
        magic = magic + 1;                                   //increases number of cursors
    	coins = coins - magicCost;                          //removes the cookies spent
        document.getElementById('magic').innerHTML = magic;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,magic));       //works out the cost of the next cursor
    document.getElementById('magicCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
var cannons = 0;

function buyCannon(){
    var cannonCost = Math.floor(500 * Math.pow(1.1,cannons));     //works out the cost of this cursor
    if(coins >= cannonCost){                                   //checks that the player can afford the cursor
        cannons = cannons + 1;                                   //increases number of cursors
    	coins = coins - cannonCost;                          //removes the cookies spent
        document.getElementById('cannons').innerHTML = cannons;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(500 * Math.pow(1.1,cannons));       //works out the cost of the next cursor
    document.getElementById('cannonCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
var towers = 0;

function buyTower(){
    var towerCost = Math.floor(5000 * Math.pow(1.1,towers));     //works out the cost of this cursor
    if(coins >= towerCost){                                   //checks that the player can afford the cursor
        towers = towers + 1;                                   //increases number of cursors
    	coins = coins - towerCost;                          //removes the cookies spent
        document.getElementById('towers').innerHTML = towers;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(5000 * Math.pow(1.1,towers));       //works out the cost of the next cursor
    document.getElementById('towerCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var ancientMagic = 0;

function buyAMagic(){
    var aMagicCost = Math.floor(15000 * Math.pow(1.1,ancientMagic));     //works out the cost of this cursor
    if(coins >= aMagicCost){                                   //checks that the player can afford the cursor
        ancientMagic = ancientMagic + 1;                                   //increases number of cursors
    	coins = coins - aMagicCost;                          //removes the cookies spent
        document.getElementById('ancientMagic').innerHTML = ancientMagic;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(15000 * Math.pow(1.1,ancientMagic));       //works out the cost of the next cursor
    document.getElementById('aMagicCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	autokill(swords);
	
}, 2000);
window.setInterval(function(){
	
	autokill(magic);

}, 1000);
window.setInterval(function(){
	
	autokill(cannons);

}, 500);
window.setInterval(function(){
	
	autokill(towers);

}, 250);
window.setInterval(function(){
	
	autokill(ancientMagic);

}, 28.55);

var dblKills = 0;
function buyDblKill(){
 var dblKillCost = Math.floor(100 * Math.pow(1.1,dblKills));     //works out the cost of this cursor
function dblKill(){
	killNum = killNum * 2;	
};
if(coins >= dblKillCost){                                   //checks that the player can afford the cursor
        dblKills = dblKills + 1;                                   //increases number of cursors
    	coins = coins - dblKillCost;                          //removes the cookies spent
        document.getElementById('coins').innerHTML = coins; //updates the number of cookies for the user
	    dblKill(1);
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,dblKills));       //works out the cost of the next cursor
    document.getElementById('dblKillCost').innerHTML = nextCost;  //updates the cursor cost for the user	
};
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
