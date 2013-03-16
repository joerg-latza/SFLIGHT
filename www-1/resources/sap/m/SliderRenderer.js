/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.SliderRenderer");

/**
 * @class Slider renderer.
 * @static
 */
sap.m.SliderRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oSld an object representation of the slider that should be rendered
 */
sap.m.SliderRenderer.render = function(oRm, oSld) {
	var fMin = oSld.getMin(),
		fMax = oSld.getMax(),
		fStep = oSld.getStep(),
		sName = oSld.getName(),
		bEnabled = oSld.getEnabled();

	// avoid render when not visible
	if (!oSld.getVisible()) {
		return;
	}

	oRm.write("<div");
	oRm.addClass("sapMSliCont");

	if (!bEnabled) {
		oRm.addClass("sapMSliContDisabled");
	}

	oRm.addStyle("width", oSld.getWidth());
	oRm.writeClasses();
	oRm.writeStyles();
	oRm.writeControlData(oSld);
	oRm.write(">");

		oRm.write('<div');
			oRm.addClass("sapMSli");

			if (!bEnabled) {
				oRm.addClass("sapMSliDisabled");
			}

			if (oSld.getProgress()) {
				oRm.addClass("sapMSliProgress");
				oRm.addStyle("-webkit-background-size", oSld._fProgressValue + "% 100%, cover");
			}

			oRm.writeClasses();
			oRm.writeStyles();

			oRm.write(">");

			// start render slider handle
			oRm.write('<span class="sapMSliHandle"');
				oRm.addStyle("left", oSld._fProgressValue + "%");
				oRm.writeStyles();
			oRm.write('><span class="sapMSliHandleInner"></span></span>');
			// end render slider handle
		oRm.write("</div>");

		// start render input range for screen readers
		oRm.write('<input type="range" class="sapMSliInput"');

			if (!bEnabled) {
				oRm.write("disabled");
			}

			if (sName !== "") {
				oRm.writeAttributeEscaped("name", sName);
			}

			oRm.writeAttribute("min", fMin);
			oRm.writeAttribute("max", fMax);
			oRm.writeAttribute("step", fStep);
			oRm.writeAttribute("value", oSld.getValue());
		oRm.write("/>");
		// end render input range for screen readers

	oRm.write("</div>");
};