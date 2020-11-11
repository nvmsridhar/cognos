define(function () {
	"use strict";

function CalendarSpace()
{
};

CalendarSpace.prototype.draw = function( oControlHost ) {
	var tableElements = document.getElementsByTagName("table");

	for( i=0; i<tableElements.length;i++){
	    element= tableElements[i].getAttributeNode("specname");
		if(element!=null){
			if(element.value=="selectDate"){
				tableElements[i].style.width="auto";
			}
		}
	}
};

return CalendarSpace;
});
