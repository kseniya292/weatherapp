$(document).ready(function(){
 /* $(".fb-album-container").FacebookAlbumBrowser({
    account: "Montezuma-Half-Marathon-5K-970747939609605"
  });*/

/*$("").hover(function () {
	$(this).find("img").animate({
		"opacity" : 0.6,
	}); //animate on
}, function () {
	$(this).find("img").animate({
		"opacity" : 1.0, 
	}); // animate off
}); // complete hover*/

$(".mainphoto").hover(function () {

	$(this).find("img").animate({
		"opacity" : 0.6,
	}); //animate on

}, function () {
	$(this).find("img").animate({
		"opacity" : 1.0, 
	}); // animate off

}); // complete hover

var endtime = "2016-06-26T08:15:00-05:00";

// calculate time remaining
function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.now(); //date.parse is native function that converts time string into a value in milliseconds
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24);
	var days = Math.floor( t/(1000*60*60*24));

return {
	"total" : t,
	"days" : days,
	"hours" : hours,
	"minutes" : minutes,
	"seconds" : seconds,


}; //return- output clock data as a reusable object

} //get time remaining

//console.log(getTimeRemaining(endtime).days);

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
		var daysSpan = clock.querySelector(".days");
		var hoursSpan = clock.querySelector(".hours");
		var minutesSpan = clock.querySelector(".minutes");
		var secondsSpan = clock.querySelector(".seconds");

	function updateClock() {
		var t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
		    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if(t.total<=0) {
			clearInterval(timeInterval);
		}		

	} //update clock

updateClock();
var timeInterval = setInterval(updateClock, 1000);
} //initialize Clock

/*var endtime = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);*/

initializeClock("clockdiv", endtime);



}); //ready method end