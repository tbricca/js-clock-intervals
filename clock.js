var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById ('second');

function secHand(){
    var counter = 0;
    setInterval(function(){
        counter++;
        secondHand.style.transform = "rotate(" + counter + "deg)";
    }, 1000);
}

function minHand(){
	var counter = 0;
	setInterval(function(){
		counter+=60;
		minHand.style.transform = "rotate(" + counter + "deg)";
	}, 60000);
}

function hrHand(){
	var counter = 0;
	setInterval(function(){
		counter+=30;
		hourHand.style.transform = "rotate(" + counter + "deg)";
	}, 360000000);
}

secHand();
minHand(); 
hrHand();



