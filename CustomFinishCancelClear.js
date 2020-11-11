define(function () {
	"use strict";

	function validatePromptValue() {
	};


	validatePromptValue.prototype.draw = function (oControlHost) {

		var el = oControlHost.container;
		el.innerHTML =
		'<div><style>' +
			'.myButton { height:32px; width:120px; cursor:pointer; margin-left:10px; color:#4178BE; font-size:14px; padding:6px 12px 6px 12px; background-color:white; border:1px solid #4178BE; }' +
			'.myButton:hover { background-color:#4178BE; color:white; border:1px solid #4178BE; }' +
		'</style>' +
		'<button class="myButton btnFinish" type="button">Go</button><br><br>' +
		'<button class="myButton btnClear" type="button">Reset</button></div>';

		el.querySelector(".btnClear").onclick = this.f_clearButtonClick.bind(this, oControlHost);
		el.querySelector(".btnFinish").onclick = this.finishButtonClick.bind(this, oControlHost);
	};


	validatePromptValue.prototype.finishButtonClick = function (oControlHost) {

		oControlHost.finish();

	};


	validatePromptValue.prototype.f_clearButtonClick = function (oControlHost) {

		var aControls = oControlHost.page.getAllPromptControls();

		for (var i = 0; i < aControls.length; i++) {
			var oControl = aControls[i];
			oControl.clearValues();
		}


	};

	return validatePromptValue;
});
