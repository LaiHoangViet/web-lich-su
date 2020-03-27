jQuery("#timeline-events").draggable({ 
	cursor: "move", 
	containment: "parent",
	stop: function() {
		if(jQuery("#timeline-events").position().left < 1)
			jQuery("#timeline-events").css("left", "720px");
	}
});
