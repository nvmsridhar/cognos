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
	$(".clsCCHLDatePickerButton").css("padding-left", (!conf.space ? "0px" : conf.space));
	$("table").find("[specname='selectDate']").find(".clsCCHLTextWidget").css({minWwidth: "", width: "80px !important", minHeight: "20px", fontSize: "8pt"});
	$("table").find("img").find(".clsCCHLDatePickerButton").css({width: "18px", height: "18px", cursor: "pointer"});
	$(".clsListViewReportView").css("line-height", (!conf.lineHeight ? "15px" : conf.lineHeight));
};

return CalendarSpace;
});
