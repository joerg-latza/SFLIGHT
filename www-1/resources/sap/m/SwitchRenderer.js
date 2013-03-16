/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.SwitchRenderer");

/**
 * @class Switch renderer.
 * @static
 */
sap.m.SwitchRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oSwt an object representation of the control that should be rendered
 */
sap.m.SwitchRenderer.render = function(oRm, oSwt) {
	var bState = oSwt.getState(),
		sState = bState ? oSwt._sOn : oSwt._sOff,
		bEnabled = oSwt.getEnabled();

	// avoid render when not visible
	if (!oSwt.getVisible()) {
		return;
	}

	oRm.write('<div');
	oRm.addClass("sapMSwtCont");

	if (!bEnabled) {
		oRm.addClass("sapMSwtContDisabled");
	}

	oRm.writeClasses();
	oRm.writeControlData(oSwt);
	oRm.write(">");

		oRm.write("<div");
		oRm.addClass("sapMSwt");

		bState ? oRm.addClass("sapMSwtOn") : oRm.addClass("sapMSwtOff");

		if (!bEnabled) {
			oRm.addClass("sapMSwtDisabled");
		}

		oRm.writeClasses();
		oRm.write('>');

			// start: render some extra HTML for iOS
			if (jQuery.os.ios) {
				oRm.write('<div class="sapMSwtTextOn">');
					oRm.write("<span>");
						oRm.writeEscaped(oSwt._sOn);
					oRm.write("</span>");
				oRm.write("</div>");

				oRm.write('<div class="sapMSwtTextOff">');
					oRm.write("<span>");
						oRm.writeEscaped(oSwt._sOff);
					oRm.write("</span>");
				oRm.write("</div>");
			}
			// end: render some extra HTML for iOS

			oRm.write('<input type="checkbox"');

			if (oSwt.getName() !== "") {
				oRm.writeAttributeEscaped("name", oSwt.getName());
			}

			oRm.writeAttribute("id", oSwt.getId() + "-input");

			if (bState) {
				oRm.writeAttribute("checked", "checked");
			}

			if (!bEnabled) {
				oRm.writeAttribute("disabled", "disabled");
			}

			oRm.writeAttribute("value", sState);
			oRm.write("/>");
			oRm.write('<div class="sapMSwtBtn"');

			if (sap.m.Switch._bAndroidStyle) {
				oRm.writeAttribute("data-sap-ui-swt", sState);
			}

			oRm.write("></div>");

		oRm.write("</div>");
	oRm.write("</div>");
};