var bars = 1000;

function barClick(number){
    bars = bars + number;
    document.getElementById("bars").innerHTML = bars;
};

var Workers = 0;
var Managers = 0;
var Store = 0;
var Branch = 0;
var Board = 0;
var Enterprise = 0;
var Empire = 0;

var Bankers = 0;
var Trucks = 0;
var Bank = 0;
var Shipment = 0;
var Printer = 0;
var Factory = 0;
var Govt = 0;

var Miners = 0;
var Mould=0;
var Carts=0;
var Quarry=0;
var Cranes=0;
var Alchemy=0;
var Refinery=0;

function buyWorker(){
    var WorkerCost = Math.floor(15 * Math.pow(1.15,Workers));     //works out the cost of this Worker
    if(bars >= WorkerCost){                                   //checks that the player can afford the Worker
        Workers = Workers + 1;                                   //increases number of Workers
    	bars = bars - WorkerCost;                          //removes the coins spent
        document.getElementById('Workers').innerHTML = Workers;  //updates the number of Workers for the user
        document.getElementById('bars').innerHTML = bars;  //updates the number of coins for the user
    };
    var nextCost = Math.floor(15 * Math.pow(1.15,Workers));       //works out the cost of the next Worker
    document.getElementById('WorkerCost').innerHTML = nextCost;  //updates the Worker cost for the user
	document.getElementByID("Workers").innerHTML = Workers;
};

window.setInterval(function(){
	
	barClick(Workers*.5);
	
	document.getElementByID('bars').innerHTML = bars;
	
}, 1000);