var audio = document.getElementById("audio");

function toggleVolume() {
	if(audio.volume == true) {
		document.getElementById("volume-on").style.display = "none";
		document.getElementById("volume-off").style.display = "inline-block";
		audio.volume = false;
	} else {
		document.getElementById("volume-off").style.display = "none";
		document.getElementById("volume-on").style.display = "inline-block";
		audio.volume = true;
	}
}

function toggleNav() {
	if(document.getElementById("nav").style.height == "100%") {		
		document.getElementById("nav").style.height = "0%";
		document.getElementById("nav-button").style.transform = "rotateX(0deg)";
	} else {
		document.getElementById("nav").style.height = "100%";
		document.getElementById("nav-button").style.transform = "rotateX(180deg)";
	}
}

function setting() {
	document.getElementById("content").style.top = "0%";
	setTimeout(function() {document.getElementById("arrow-down").style.opacity = "1";document.getElementById("arrow-down").style.cursor = "pointer";},3000);
}

var partHeader = document.getElementsByClassName("part-header");
var partText = document.getElementsByClassName("part-text");

function up1() {
	document.getElementById("arrow-up").style.cursor = "default";
	document.getElementById("arrow-up").style.opacity = "0";
	document.getElementById("content").style.top = "0%";
	document.getElementById("arrow-up").onclick = function () { up1(); };
	document.getElementById("arrow-down").onclick = function () { down1(); };
	for (var i = 0; i < partHeader.length; i++) {
		if (partHeader[i].style.display == "none") {
			toggleText();
		}
	}	
}
function up2() {

	document.getElementById("content").style.top = "-100%";
	document.getElementById("arrow-up").onclick = function () { up1(); };
	document.getElementById("arrow-down").onclick = function () { down2(); };
	for (var i = 0; i < partHeader.length; i++) {
		if (partHeader[i].style.display == "none") {
			toggleText();
		}
	}	
}
function up3() {
	document.getElementById("arrow-down").style.cursor = "pointer";
	document.getElementById("arrow-down").style.opacity = "1";
	document.getElementById("content").style.top = "-200%";
	document.getElementById("arrow-up").onclick = function () { up2(); };
	document.getElementById("arrow-down").onclick = function () { down3(); };
	for (var i = 0; i < partHeader.length; i++) {
		if (partHeader[i].style.display == "none") {
			toggleText();
		}
	}	
}
function down1() {
	document.getElementById("arrow-up").style.cursor = "pointer";
	document.getElementById("arrow-up").style.opacity = "1";	
	document.getElementById("content").style.top = "-100%";
	document.getElementById("arrow-down").onclick = function () { down2(); };
	document.getElementById("arrow-up").onclick = function () { up1(); };
	for (var i = 0; i < partHeader.length; i++) {
		if (partHeader[i].style.display == "none") {
			toggleText();
		}
	}
}
function down2() {	
	document.getElementById("content").style.top = "-200%";
	document.getElementById("arrow-down").onclick = function () { down3(); };
	document.getElementById("arrow-up").onclick = function () { up2(); };
	for (var i = 0; i < partHeader.length; i++) {
		if (partHeader[i].style.display == "none") {
			toggleText();
		}
	}
}
function down3() {
	document.getElementById("arrow-down").style.cursor = "default";
	document.getElementById("arrow-down").style.opacity = "0";	
	document.getElementById("content").style.top = "-300%";
	document.getElementById("arrow-down").onclick = function () { down3(); };
	document.getElementById("arrow-up").onclick = function () { up3(); };
	for (var i = 0; i < partHeader.length; i++) {
		if (partHeader[i].style.display == "none") {
			toggleText();
		}
	}
}

function toggleText() {
	textFadeout();
	setTimeout(textDisplay, 490);
	setTimeout(textFadein, 510);
}

function textDisplay() {
	for (var i = 0; i < partHeader.length; i++) {
		if (partHeader[i].style.display == "none") {
			partHeader[i].style.display = "block";
			partText[i].style.display = "none";
		} else {
			partText[i].style.display = "block";
			partHeader[i].style.display = "none";
		}
	}
}

function textFadeout() {
	for (var i = 0; i < partHeader.length; i++) {
		if (partHeader[i].style.display == "none") {
			partText[i].style.opacity = "0";
		} else {
			partHeader[i].style.opacity = "0";
		}
	}
}

function textFadein() {
	for (var i = 0; i < partHeader.length; i++) {
		if (partHeader[i].style.display == "none") {
			partText[i].style.opacity = "1";
		} else {
			partHeader[i].style.opacity = "1";
		}
	}
}