// JavaScript Document

//initial time
var months_current = -1;
var days_current = -1;
var hours_current = -1;
var minutes_current = -1;
var seconds_current = -1;

var destDate = new Date(2011, 4, 26, 12, 0, 0);

function flipOne(id, changeNumber, suffix, pathUpper, pathLower) {
	var upperId = id + 'Up' + suffix;
	var lowerId = id + 'Down' + suffix;
	var upperBackId = upperId+"Back";
	$(upperId).src = $(upperBackId).src;
	$(upperId).setStyle("height", "64px");
	$(upperId).setStyle("visibility", "visible");
	$(upperBackId).src = pathUpper+parseInt(changeNumber)+".png";
	
	$(lowerId).src = pathLower+parseInt(changeNumber)+".png";
	$(lowerId).setStyle("height", "0px");
	$(lowerId).setStyle("visibility", "visible");
	
	var flipUpper = new Fx.Tween(upperId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
	flipUpper.addEvents({
		'complete': function(){
			var flipLower = new Fx.Tween(lowerId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
				flipLower.addEvents({
					'complete': function(){	
						lowerBackId = lowerId+"Back";
						$(lowerBackId).src = $(lowerId).src;
						$(lowerId).setStyle("visibility", "hidden");
						$(upperId).setStyle("visibility", "hidden");
					}				});					
				flipLower.start('height', 64);
				
		}
						});
	flipUpper.start('height', 0);
}

function flipBoth(id, changeNumber) {
	flipOne(id, changeNumber / 10, 'Left', 'Double/Up/Left/', 'Double/Down/Left/');
	flipOne(id, changeNumber % 10, 'Right', 'Double/Up/Right/', 'Double/Down/Right/');
}

function retroClock(){
	var timeRemaining = Math.round((destDate.getTime() - (new Date()).getTime()) / 1000.0);
	
	var months = Math.floor(timeRemaining / (60 * 60 * 24 * 30));
	timeRemaining %= (60 * 60 * 24 * 30);
	var days = Math.floor(timeRemaining / (60 * 60 * 24));
	timeRemaining %= (60 * 60 * 24);
	var hours = Math.floor(timeRemaining / (60 * 60));
	timeRemaining %= (60 * 60);
	var minutes = Math.floor(timeRemaining / 60);
	timeRemaining %= 60;
	var seconds = timeRemaining;
		
	if (months != months_current) {
		flipOne('months', months, '', 'Single/Up/AM/', 'Single/Down/AM/' );
		months_current = months;
	}
	
	if (days != days_current) {
		flipBoth('days', days);
		days_current = days;
	}
	
	if (hours != hours_current) {
		flipBoth('hours', hours);
		hours_current = hours;
	}
	
	if (minutes != minutes_current) {
		flipBoth('minutes', minutes);
		minutes_current = minutes;
	}
	
	if (seconds != seconds_current) {
		flipBoth('seconds', seconds);
		seconds_current = seconds;
	}
}

setInterval('retroClock()', 1000);
