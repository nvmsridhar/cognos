define(function () {
	"use strict";

	function CustomGoReset() {
	};


	CustomGoReset.prototype.draw = function (oControlHost) {

		var el = oControlHost.container;
		el.innerHTML =
		'<div><style>' +
			'.myButtonDemo { border-radius: 20px;height: 20px;width: 50px;cursor: pointer;color: White;font-size: 8pt;background-color: #336699;border: 0px solid; }' + '.myButtonDemo:hover { color: White;background-color: #132777; }' + '.btnFinish { margin-top: 5px; }' + '.btnClear { margin-top: 15px; }' +
		'</style>' +
		'<button class="myButtonDemo btnFinish" type="button">Go</button><br>' +
		'<button class="myButtonDemo btnClear" type="button">Reset</button></div>';
		
		el.querySelector(".btnFinish").onclick = this.finishButtonClick.bind(this, oControlHost);
		el.querySelector(".btnClear").onclick = this.f_clearButtonClick.bind(this, oControlHost);
	};


	CustomGoReset.prototype.finishButtonClick = function (oControlHost) {

		oControlHost.finish();

	};


	CustomGoReset.prototype.f_clearButtonClick = function (oControlHost) {

		var aControls = oControlHost.page.getAllPromptControls();

		for (var i = 0; i < aControls.length; i++) {
			var oControl = aControls[i];
			oControl.clearValues();
		}


	};

	return CustomGoReset;
});
