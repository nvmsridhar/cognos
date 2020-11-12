define(["jquery"], function($) {
"use strict";

function CalendarSpace()
{
};

CalendarSpace.prototype.draw = function( oControlHost ) {
	$("table").find("[specname='selectDate']").css("width", "auto");
	$(".clsCCHLDatePickerButton").css("padding-left", "0px");
};

return CalendarSpace;
});
