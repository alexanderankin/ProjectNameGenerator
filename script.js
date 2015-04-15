var v1 = ["PROJECT","OPERATION","MISSION", "THE"];
var v2 = ["ATOMIC","CRAZY","ACIDIC", "SHITTY", "RED", "BLACK", "WHITE", "DIZZY", "HIGH", 
"TRIPPY", "NEATLY-FOLDED", "BACKLIT", "GREASY", "TROUBLED", "BLIND", "DRUNK",
"INDEPENDENT", "FORGOTTEN", "DEPRESSED", "MISGUIDED", "WAITING","HOT", "MINIATURE", "DANK",
"SICK", "NULL", "SALTY", "PIMPIN", "LEGAL", "ILLEGAL","IMPRESSIVE", "PSYCHOTIC", "G", "BAKED", "STONED"];
var v3 = ["PENGUIN","INTEGRAL","PARADOX", "NODE", "TREE", "BEAR", "IMAC", "GRAPHING-CALCULATOR",
 "TOUR-BUS", "PHONE-CASE", "LABRADOR", "CAT", "FIRE-HYDRANT", "LAPTOP", "KUSH", "BIG-TOE",
 "NULLPOINTER", "EXCEPTION", "CHILD", "MAN", "BIKE", "EX-GIRLFRIEND", "GORILLA", "POP-SINGER"];

var n1 = "";
var n2 = "";
var n3 = "";

function randomize(){
	n1 = v1[Math.floor((v1.length) * Math.random())];
	n2 = v2[Math.floor((v2.length) * Math.random())];
	n3 = v3[Math.floor((v3.length) * Math.random())];
}

function alt(){
	randomize();
	document.getElementById('name').innerHTML = n1 + " " + n2 + " " + n3;
}
