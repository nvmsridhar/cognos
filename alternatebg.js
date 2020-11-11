define(["jquery"], function($) {
"use strict";

function AlternateBg()
{
};

AlternateBg.prototype.draw = function( oControlHost ) {
	var conf = oControlHost.configuration;
	
	if(!conf){
		throw new scriptableReportError("jhgjh", "dsfgfs", "bkjhjk");
	}
	
	if(!(conf.hasOwnProperty("isCrosstab") && conf.hasOwnProperty("controlName"))){
		throw new scriptableReportError("sdfgds", "sfdgfs", "sgsf");
	}
	
	if(conf.isCrosstab) {
		$("[lid='" + conf.controlName + "']").find("tr:odd > td.mv").css("background-color", (!conf.firstColor ? "#EFF0F1" : conf.firstColor));
		$("[lid='" + conf.controlName + "']").find("tr:even > td.mv").css("background-color", (!conf.secondColor ? "#FFF" : conf.secondColor));
	}
	else {
		$("[lid='" + conf.controlName + "']").find("tr:odd > td.lc, tr:odd > td.lm").css("background-color", (!conf.firstColor ? "#EFF0F1" : conf.firstColor));
		$("[lid='" + conf.controlName + "']").find("tr:even > td.lc, tr.even > td.lm").css("background-color", (!conf.secondColor ? "#FFF" : conf.secondColor));
	}
};

return AlternateBg;
});