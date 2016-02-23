var reset = document.getElementById('reset');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var intervalId;
var seconds = 0;

var timeElapsed = document.createElement("p"); //create a new paragraph which contains the time

reset.addEventListener('click',function(){
	clearInterval(intervalId);
	seconds = 0; //setting the time to zero
	document.getElementById('timer').innerHTML = "Timer Stopped"
});

start.addEventListener('click',function () {
	intervalId = setInterval (function () {
		updateTime()
	}, 1000 );
});

function updateTime() {
	seconds ++; 
	document.getElementById('timer').innerHTML = "Time Elapsed: " + seconds;
}


pause.addEventListener('click',function(){
	clearInterval(intervalId);
});


