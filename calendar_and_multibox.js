define(["jquery"], function($) {
"use strict";

function CalendarSpace()
{
};

CalendarSpace.prototype.draw = function( oControlHost ) {
	var conf= oControlHost.configuration;
	if(!conf){
		conf = {}
	}
	$("table").find("[specname='selectDate']").css("width", "auto");
	$(".clsCCHLDatePickerButton").css("padding-left", "0px");
	$(".clsListViewReportView").css("line-height", (!conf.lineHeight ? "15px" : conf.lineHeight));
};

return CalendarSpace;
});