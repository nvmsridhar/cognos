define(function () {
	"use strict";

	function validatePromptValue() {
	};


	validatePromptValue.prototype.draw = function (oControlHost) {

		var el = oControlHost.container;
		el.innerHTML =
		'<div><style>' +
			'.myButtonDemo { border-radius: 20px;height: 28px;width: 65px;cursor: pointer;/* margin-left: 10px; */color: white;font-size: 14px;/* padding: 6px 12px 6px 12px; */background-color: #336699;border: 0px solid; }' + '.myButtonDemo:hover { color: grey;background-color: #132777; }' +
		'</style>' +
		'<button class="myButtonDemo btnFinish" type="button">Go</button><br><br>' +
		'<button class="myButtonDemo btnClear" type="button">Reset</button></div>';
		
		el.querySelector(".btnFinish").onclick = this.finishButtonClick.bind(this, oControlHost);
		el.querySelector(".btnClear").onclick = this.f_clearButtonClick.bind(this, oControlHost);
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
