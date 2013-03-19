/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Switch.
jQuery.sap.declare("sap.m.Switch");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Switch.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getState state} : boolean (default: false)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getName name} : string (default: "")</li>
 * <li>{@link #getCustomTextOn customTextOn} : string</li>
 * <li>{@link #getCustomTextOff customTextOff} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Switch#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A switch is a user interface control on mobile devices that is used for change between binary states. The user can also drag the button handle or tap to change the state.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.11.0
 *
 * @constructor   
 * @public
 * @name sap.m.Switch
 */
sap.ui.core.Control.extend("sap.m.Switch", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"state" : {type : "boolean", group : "Misc", defaultValue : false},
		"enabled" : {type : "boolean", group : "Data", defaultValue : true},
		"name" : {type : "string", group : "Misc", defaultValue : ""},
		"customTextOn" : {type : "string", group : "Misc", defaultValue : null},
		"customTextOff" : {type : "string", group : "Misc", defaultValue : null}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Switch with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.m.Switch.extend
 * @function
 */

sap.m.Switch.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>visible</code>.
 * Invisible switches are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Switch#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setVisible
 * @function
 */

/**
 * Getter for property <code>state</code>.
 * The state of the switch, true for the "ON" state or false for the "OFF" state translated to the current language.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>state</code>
 * @public
 * @name sap.m.Switch#getState
 * @function
 */


/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bState  new value for property <code>state</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setState
 * @function
 */

/**
 * Getter for property <code>enabled</code>.
 * Whether the switch is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Switch#getEnabled
 * @function
 */


/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setEnabled
 * @function
 */

/**
 * Getter for property <code>name</code>.
 * The name to be used in the HTML code for the switch (e.g. for HTML forms that send data to the server via submit).
 *
 * Default value is <code>""</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.m.Switch#getName
 * @function
 */


/**
 * Setter for property <code>name</code>.
 *
 * Default value is <code>""</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setName
 * @function
 */

/**
 * Getter for property <code>customTextOn</code>.
 * Custom text for the "ON" state.
 * 
 * "ON" translated to the current language is the default value.
 * 
 * Beware that the given text will be cut off after three characters.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>customTextOn</code>
 * @public
 * @name sap.m.Switch#getCustomTextOn
 * @function
 */


/**
 * Setter for property <code>customTextOn</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCustomTextOn  new value for property <code>customTextOn</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setCustomTextOn
 * @function
 */

/**
 * Getter for property <code>customTextOff</code>.
 * Custom text for the "OFF" state.
 * 
 * "OFF" translated to the current language is the default value.
 * 
 * Beware that the given text will be cut off after three characters.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>customTextOff</code>
 * @public
 * @name sap.m.Switch#getCustomTextOff
 * @function
 */


/**
 * Setter for property <code>customTextOff</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCustomTextOff  new value for property <code>customTextOff</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setCustomTextOff
 * @function
 */

/**
 * Triggered when a switch changes the state. 
 *
 * @name sap.m.Switch#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.state The new state of the switch.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Switch</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Switch</code>.<br/> itself. 
 *  
 * Triggered when a switch changes the state. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Switch</code>.<br/> itself.
 *
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#attachChange
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Switch</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#detachChange
 * @function
 */


/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'state' of type <code>boolean</code> The new state of the switch.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Switch#fireChange
 * @function
 */

// Start of sap/m/Switch.js
//	the milliseconds it takes the transition from one state to another
sap.m.Switch._iTransTime = 175;

//	a boolean property to indicate android and blackberry style.
sap.m.Switch._bAndroidStyle = !!(jQuery.os.android || jQuery.os.blackberry);

sap.m.Switch._aEvents = (function() {
	var aEvents = ["ontouchstart", "ontouchmove", "ontouchend", "ontouchcancel"];

	if (sap.m.Switch._bAndroidStyle) {
		aEvents.push("onswiperight", "onswipeleft");
	}

	return aEvents;
})();

sap.m.Switch._aVEvents = (function() {
	return jQuery.map(sap.m.Switch._aEvents, function(sEvent) {
		return "_" + sEvent;
	});
})();

//	a boolean property to indicate if transition or not.
sap.m.Switch._bTransition = !!(jQuery.os.ios);

sap.m.Switch._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.m");

/* =========================================================== */
/*                   begin: lifecycle methods                  */
/* =========================================================== */

/**
 * Required adaptations before rendering.
 *
 * @private
 */
sap.m.Switch.prototype.onBeforeRendering = function() {
	var Swt = sap.m.Switch;

	if (this.getCustomTextOn() === "") {
		this._sOn = Swt._oRb.getText("SWITCH_ON");
	} else if (this.getCustomTextOn().length <= 3) {
		this._sOn = this.getCustomTextOn();
	} else {
		this._sOn = this.getCustomTextOn().substring(0, 3) + "...";
	}

	if (this.getCustomTextOff() === "") {
		this._sOff = Swt._oRb.getText("SWITCH_OFF");
	} else if (this.getCustomTextOff().length <= 3) {
		this._sOff = this.getCustomTextOff();
	} else {
		this._sOff = this.getCustomTextOff().substring(0, 3) + "...";
	}
};

/**
 * Required adaptations after rendering.
 *
 * @private
 */
sap.m.Switch.prototype.onAfterRendering = function() {
	var fnOnAfterRendering = this["_onAfterRendering" + jQuery.os.os];

	//	bind only if the switch is enabled
	this.getEnabled() ?	this._bindEvents()
						: this._unbindEvents();

	// switch control container jQuery reference
	this._$SwtCont = this.$();

	//	switch jQuery DOM reference
	this._$Swt = this._$SwtCont.children(".sapMSwt");

	//	switch width
	this._iSwtWidth = this._$Swt.width();

	//	switch button jQuery DOM reference
	this._$Btn = this._$Swt.children(".sapMSwtBtn");

	//	switch button outerWidth
	this._fBtnOuterWidth = this._$Btn.outerWidth(true);

	//	switch button width
	this._fBtnWidth = this._$Btn.width();

	//	checkbox jQuery DOM reference
	this._$Checkbox = this._$Swt.children("input[type=checkbox]");

	//	call the specific onAfterRendering method
	if (typeof fnOnAfterRendering === "function") {
		fnOnAfterRendering.call(this);
	}

	//	the minimum left position for the switch button
	this._iBtnMinLeft = -this._iOffsetX;

	//	the maximum left position for the switch button
	this._iBtnMaxLeft = (this._iSwtWidth - this._fBtnOuterWidth) + this._iOffsetX;

	//	after all calculations, make visible the control
	this._$SwtCont.addClass("sapMSwtVisible");
};

/**
 * Required adaptations after rendering for iOS.
 *
 * @private
 */
sap.m.Switch.prototype._onAfterRenderingios = function() {
	var fSpanOnWidth;

	//	the maximum offset in x-axis for the switch children elements
	this._iOffsetX = 1;

	//	DIV ON jQuery DOM reference
	this._$TextOn = this._$Swt.children('.sapMSwtTextOn');

	//	SPAN ON width
	fSpanOnWidth = this._$TextOn.children("span").width();

	//	DIV ON text indent
	this._fTextIndentOn = (this._iSwtWidth - fSpanOnWidth - this._fBtnWidth) / 2;

	//	DIV OFF jQuery DOM reference
	this._$TextOff = this._$Swt.children('.sapMSwtTextOff');

	//	DIV OFF text indent
	this._fTextIndentOff = (this._iSwtWidth - this._$TextOff.children("span").width() + this._fBtnWidth) / 2;

	//	the minimum text indent for the OFF state
	this._fTextOnIndentMin = -(fSpanOnWidth + this._fTextIndentOn);

	//	center the texts
	this._centerTextIos();
};

/**
 * Required adaptations after rendering for android.
 *
 * @private
 */
sap.m.Switch.prototype._onAfterRenderingandroid = function() {

	//	the maximum offset in x-axis for the switch children elements
	this._iOffsetX = 7;
};

/**
 * Required adaptations after rendering for blackberry.
 *
 * @private
 */
sap.m.Switch.prototype._onAfterRenderingblackberry = sap.m.Switch.prototype._onAfterRenderingandroid;

/* =========================================================== */
/*                   end: lifecycle methods                    */
/* =========================================================== */


/* =========================================================== */
/*                      begin: event handlers                  */
/* =========================================================== */

/**
 * Handle the swipe right event happening on the switch.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Switch.prototype._onswiperight = function(oEvent) {
	this.setState(true, true);
};

/**
 * Handle the swipe left event happening on the switch.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Switch.prototype._onswipeleft = function(oEvent) {
	this.setState(false, true);
};

/**
 * Handle the touch start event happening on the switch.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Switch.prototype._ontouchstart = function(oEvent) {
	var oTargetTouch = oEvent.targetTouches[0];

	//	For control who need to know if they should handle
	//	events from the switch control.
	oEvent.originalEvent._sapui_handledByControl = true;

	//	Only process single touches. If there is already a touch happening
	//	or two simultaneous touches, then just ignore them.
	//
	//	Important to note that oEvent.targetTouches.length is related
	//	to the current target DOM element, it could be the control
	//	container or its children elements.
	//
	//	Also note that oEvent.touches.length is related to
	//	the UI-Area because event delegation.
	if (sap.m.touch.countContained(oEvent.touches, this.getId()) > 1) {
		return;
	}

	this._iActiveTouch = oTargetTouch.identifier;

	//	add active state
	this._$Swt.addClass("sapMSwtPressed");

	this._bTempState = this.getState();
	this._iStarPageX = oTargetTouch.pageX;
	this._iCurrentPageX = this._iStarPageX;
	this._iDiffX = this._iStarPageX - this._$Btn.position().left;
	this._bTargetBtn = jQuery(oEvent.target).is(this._$Btn);
	this._bDrag = false;

	if (sap.m.Switch._bTransition) {
		this._$Swt.removeClass("sapMSwtTrans");
	}
};

/**
 * Handle the touch move event on the switch.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Switch.prototype._ontouchmove = function(oEvent) {
	var oTouch,
		iPageX,
		iDragDist,
		iLeftPos,
		iBtnCen,
		Swt = sap.m.Switch,
		fnTouch = sap.m.touch;

	//	the active touch should always be in the list of touches
	jQuery.sap.assert(fnTouch.find(oEvent.touches, this._iActiveTouch), 'sap.m.Switch.prototype._ontouchmove(): missing touchEnd');

	//	find the active touch
	oTouch = fnTouch.find(oEvent.changedTouches, this._iActiveTouch);

	//	Only respond to the active touch.
	//
	//	In android, only the handle is draggable, not the whole switch inner area.
	if (!oTouch || (Swt._bAndroidStyle && !this._bTargetBtn)) {
		return;
	}

	iPageX = oTouch.pageX;
	iDragDist = iPageX - this._iCurrentPageX;
	iLeftPos = this._bTargetBtn && Swt._bAndroidStyle ? iPageX - this._iDiffX
														: iDragDist + this._$Btn.position().left;
	iBtnCen = iLeftPos + (this._fBtnOuterWidth / 2);

	this._bDrag = true;
	this._iCurrentPageX = iPageX;

	this._updateUI(iDragDist, iLeftPos, iBtnCen);
};

/**
 * Handle the touch end event on the switch.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Switch.prototype._ontouchend = function(oEvent) {
	var aProp = ["_bTempState", "_iStarPageX", "_iCurrentPageX", "_iDiffX", "_bTargetBtn", "_bDrag", "_iActiveTouch"],
		iLen = aProp.length,
		fnTouch = sap.m.touch,
		assert = jQuery.sap.assert,
		i;

	assert(typeof this._iActiveTouch !== "undefined", 'sap.m.Switch.prototype._ontouchend(): expect to already be touching');

	//	if the touch we're tracking isn't changing here, ignore this touch end event
	if (!fnTouch.find(oEvent.changedTouches, this._iActiveTouch)) {

		//	In most cases, our active touch will be in the touches collection,
		//	but we can't assert that because occasionally two touch end events can
		// 	occur at almost the same time with both having empty touches lists.
		return;
	}

	//	this is touch end for the touch we're monitoring
	assert(!fnTouch.find(oEvent.touches, this._iActiveTouch), 'sap.m.Switch.prototype._ontouchend(): touch ended also still active');

	//	remove active state
	this._$Swt.removeClass("sapMSwtPressed");

	//	change the state
	this._bDrag ? this.setState(this._bTempState, true)
				: this.setState(!this._bTempState, true);

	//	remove unused properties
	for (i = 0; i < iLen; i++) {
		if (this.hasOwnProperty(aProp[i])) {
			delete this[aProp[i]];
		}
	}
};

/**
 * Handle the touch cancel event on the switch.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Switch.prototype._ontouchcancel = sap.m.Switch.prototype._ontouchend;

/* ============================================================ */
/*                      end: event handlers						*/
/* ============================================================ */


/* =========================================================== */
/*                      begin: internal methods                */
/* =========================================================== */

/**
 * Update the switch UI during the dragging process.
 *
 * @private
 */
sap.m.Switch.prototype._updateUI = function(iDragDist, iLeftPos, iBtnCen) {
	var fnUpdateUI = this["_updateUI" + jQuery.os.os];

	//	restrict the switch handle button to a maximal and minimal left position during the dragging
	iLeftPos = iLeftPos > this._iBtnMaxLeft ? this._iBtnMaxLeft
											: iLeftPos < this._iBtnMinLeft ? this._iBtnMinLeft : iLeftPos;

	if (this._iCurrentLeft === iLeftPos) {
		return;
	}

	this._iCurrentLeft = iLeftPos;

	this._$Btn.css("left", iLeftPos);

	this._setTempState(iBtnCen >= this._iSwtWidth / 2);

	//	call the specific _updateUI method
	if (typeof fnUpdateUI === "function") {
		fnUpdateUI.call(this, iDragDist, iLeftPos);
	}
};

sap.m.Switch.prototype._setTempState = function(b) {
	var fnSetTempState = this["_setTempState" + jQuery.os.os];

	if (this._bTempState === b) {
		return;
	}

	this._bTempState = b;

	if (typeof fnSetTempState === "function") {
		fnSetTempState.call(this, b);
	}
};

sap.m.Switch.prototype._setTempStateandroid = function(b) {
	this._$Btn.attr("data-sap-ui-swt", b ? this._sOn : this._sOff);
};

sap.m.Switch.prototype._setTempStateblackberry = sap.m.Switch.prototype._setTempStateandroid;

/**
 * Update the switch UI during the dragging process on iOS.
 *
 * @private
 */
sap.m.Switch.prototype._updateUIios = function(iDragDist, iLeftPos) {
	var fTextIndentOn = parseFloat(this._$TextOn.css("text-indent")) + iDragDist;

	//	restrict the switch text-indent
	fTextIndentOn = fTextIndentOn > this._fTextIndentOn ? this._fTextIndentOn
														: fTextIndentOn < this._fTextOnIndentMin ? this._fTextOnIndentMin : fTextIndentOn;

	this._$TextOn.css({
		width: iLeftPos + this._fBtnWidth + this._iOffsetX,
		textIndent: fTextIndentOn
	});

	this._$TextOff.width(this._iSwtWidth - (iLeftPos + this._iOffsetX));
};

/**
 * Bind events.
 *
 * @private
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 */
sap.m.Switch.prototype._bindEvents = function() {
	var i,
		Swt = sap.m.Switch;

	for (i = 0; i < Swt._aVEvents.length; i++) {
		this[Swt._aEvents[i]] = this[Swt._aVEvents[i]];
	}

	return this;
};

/**
 * Unbind events.
 *
 * @private
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 */
sap.m.Switch.prototype._unbindEvents = function() {
	var i,
		Swt = sap.m.Switch;

	for (i = 0; i < Swt._aVEvents.length; i++) {
		this[Swt._aEvents[i]] = null;
	}

	return this;
};

sap.m.Switch.prototype._centerTextIos = function() {
	this._$TextOn.css("text-indent", this.getState() ? this._fTextIndentOn : this._fTextOnIndentMin);
	this._$TextOff.css("text-indent", this._fTextIndentOff);
};

sap.m.Switch.prototype._setStateandroid = function(sState) {
	this._$Btn.attr("data-sap-ui-swt", sState);
};

sap.m.Switch.prototype._setStateblackberry = this._setStateandroid;

/* =========================================================== */
/*                      end: internal methods                  */
/* =========================================================== */


/* =========================================================== */
/*                   begin: API method                         */
/* =========================================================== */

/**
 * Change the switch state between on and off.
 *
 * @param {boolean} bState
 * @public
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 */
sap.m.Switch.prototype.setState = function(bState, bTriggerEvent) {
	var bState,
		sState,
		bNewState,
		Swt = sap.m.Switch,
		fnSetState = this["_setState" + jQuery.os.os],
		a,
		i;

	if (!this.getEnabled() && bTriggerEvent) {
		return this;
	}

	bNewState = !(this.getState() === bState);

	if (bNewState) {
		this.setProperty("state", bState, true); //	validation and suppress re-rendering
	}

	if (!(this._$Swt instanceof jQuery)) {
		return this;
	}

	bState = this.getState();
	sState = bState ? this._sOn : this._sOff;

	if (bNewState) {
		if (typeof fnSetState === "function") {
			fnSetState.call(this, sState);
		}

		this._$Checkbox.attr({
			checked: bState,
			value: sState
		});

		bState ? this._$Swt.removeClass("sapMSwtOff").addClass("sapMSwtOn")
				: this._$Swt.removeClass("sapMSwtOn").addClass("sapMSwtOff");

		if (bTriggerEvent) {
			if (Swt._bTransition) {
				jQuery.sap.delayedCall(Swt._iTransTime, this, function _fireChangeDelay(bState) {
					this.fireChange({state:bState});
				}, [bState]);
			} else {
				this.fireChange({state:bState});
			}
		}
	}

	if (Swt._bTransition) {
		this._$Swt.addClass("sapMSwtTrans");
	}

	//	remove all inline style on the switch
	a = [this._$Btn];
	if (jQuery.os.ios) {
		a.push(this._$TextOn, this._$TextOff);
	}

	for (i = 0; i < a.length; i++) {
		a[i].removeAttr("style");
	}

	if (jQuery.os.ios) {
		this._centerTextIos();
	}

	return this;
};

/* =========================================================== */
/*                     end: API method                         */
/* =========================================================== */