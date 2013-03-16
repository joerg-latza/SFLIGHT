/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.GrowingList.
jQuery.sap.declare("sap.m.GrowingList");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.List");

/**
 * Constructor for a new GrowingList.
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
 * <li>{@link #getThreshold threshold} : int (default: 20)</li>
 * <li>{@link #getTriggerText triggerText} : string</li>
 * <li>{@link #getScrollToLoad scrollToLoad} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.List#constructor sap.m.List}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * sap.m.GrowingList control is the container for all list items and inherits from sap.m.List control. Everything like the selection, deletion, unread states and inset style are also maintained here. In addition the control provides a loading mechanism to request data from the model and append the list items to the list. The request is started manually by tapping on the trigger at the end of the list.
 * @extends sap.m.List
 *
 * @author SAP AG 
 * @version 1.11.0
 *
 * @constructor   
 * @public
 * @experimental Since version 1.8. 
 * API is not yet finished and might change completely
 * @name sap.m.GrowingList
 */
sap.m.List.extend("sap.m.GrowingList", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"threshold" : {type : "int", group : "Misc", defaultValue : 20},
		"triggerText" : {type : "string", group : "Appearance", defaultValue : null},
		"scrollToLoad" : {type : "boolean", group : "Misc", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.m.GrowingList with name <code>sClassName</code> 
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
 * @name sap.m.GrowingList.extend
 * @function
 */


/**
 * Getter for property <code>threshold</code>.
 * Number of list items requested from the server and added to the list.
 *
 * Default value is <code>20</code>
 *
 * @return {int} the value of property <code>threshold</code>
 * @public
 * @name sap.m.GrowingList#getThreshold
 * @function
 */


/**
 * Setter for property <code>threshold</code>.
 *
 * Default value is <code>20</code> 
 *
 * @param {int} iThreshold  new value for property <code>threshold</code>
 * @return {sap.m.GrowingList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.GrowingList#setThreshold
 * @function
 */

/**
 * Getter for property <code>triggerText</code>.
 * Text which is displayed on the trigger at the end of the list. The default is a translated text ("Load more data") coming from the messagebundle properties.
 * This property can be used only if scrollToLoad property is set false.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>triggerText</code>
 * @public
 * @name sap.m.GrowingList#getTriggerText
 * @function
 */


/**
 * Setter for property <code>triggerText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTriggerText  new value for property <code>triggerText</code>
 * @return {sap.m.GrowingList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.GrowingList#setTriggerText
 * @function
 */

/**
 * Getter for property <code>scrollToLoad</code>.
 * If you set this property to true then user needs to scroll end to trigger loading a new page. Default value is false which means user needs to scroll end and then click button to load new page.
 * 
 * NOTE: This property can be set true, if you only have one instance of GrowingList inside the scroll container(e.g Page).
 * In
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>scrollToLoad</code>
 * @public
 * @since 1.11
 * @name sap.m.GrowingList#getScrollToLoad
 * @function
 */


/**
 * Setter for property <code>scrollToLoad</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bScrollToLoad  new value for property <code>scrollToLoad</code>
 * @return {sap.m.GrowingList} <code>this</code> to allow method chaining
 * @public
 * @since 1.11
 * @name sap.m.GrowingList#setScrollToLoad
 * @function
 */

// Start of sap/m/GrowingList.js


/**
 * Function is called to define the behavior for the control.
 */
sap.m.GrowingList.prototype.init = function() {
	if (sap.m.List.prototype.init) {
		sap.m.List.prototype.init.apply(this, arguments);
	}

	this._iCurrentNumberOfItems = 0;
	this._bPullTriggered = false;
	this._iListItemCount = 0;
	this._sLastListItemId = "";
	this._trigger = null;
	this._loading = null;
	this._loadingByScroll = false;
};


/**
 * Function is called after rendering the control.
 *
 * @private
 */
sap.m.GrowingList.prototype.onAfterRendering = function() {
	if (sap.m.List.prototype.onAfterRendering) {
		sap.m.List.prototype.onAfterRendering.apply(this, arguments);
	}

	var sId = this.getId() + "-listUl";
	if (jQuery.sap.domById(sId) != undefined) {
		this._loadNewItems();
	}

	if (this.getScrollToLoad()) {
		var oScrollDelegate = sap.m.getScrollDelegate(this);
		if (oScrollDelegate) {
			oScrollDelegate.setGrowingList(this);
		}
	}
};


/**
 * Remove the callback from iScroll if user disable scroll to load
 */
sap.m.GrowingList.prototype.setScrollToLoad = function(bScrollToLoad) {
	if (this.getScrollToLoad() && !bScrollToLoad) {
		var oScrollDelegate = sap.m.getScrollDelegate(this);
		if (oScrollDelegate) {
			oScrollDelegate.setGrowingList(null);
		}
	}

	return this.setProperty("scrollToLoad", bScrollToLoad);
};


/**
 * Function is called when exiting the control.
 *
 * @private
*/
sap.m.GrowingList.prototype.exit = function() {
	if (sap.m.List.prototype.exit) {
		sap.m.List.prototype.exit.apply(this, arguments);
	}

	if (this._busyIndicator) {
		this._busyIndicator.destroy();
	}
	if (this._trigger) {
		this._trigger.destroy();
	}
};


/**
 * Function is called to create or return the trigger control.
 *
 * @private
 */
sap.m.GrowingList.prototype._getTrigger = function(sId) {
	var that = this;

	// set default text, check and set custom text
	var sTriggerText = sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("LOAD_MORE_DATA");
	if (this.getTriggerText()) {
		sTriggerText = this.getTriggerText();
	}

	return this._trigger || (this._trigger = new sap.m.CustomListItem({
		id : sId,
		content : new sap.ui.core.HTML({
			content :	"<div class='sapMSLIDiv sapMGrowingListTrigger'>" +
							"<div class='sapMGrowingListBusyIndicator' id='" + sId + "-busyIndicator'></div>" +
							"<div class='sapMSLITitleDiv sapMGrowingListTitel'>" +
								"<h1 class='sapMSLITitle'>" + sTriggerText + "</h1>" +
							"</div>" +
							"<div class='sapMGrowingListDescription'>" +
								"<p class='sapMSLIDescription' id='" + sId + "-itemInfo'>" + that._getListItemInfo() + "</p>" +
							"</div>" +
						"</div>",
			afterRendering : function(e) {
				var oBusyIndicator = that._getBusyIndicator();
				var rm = sap.ui.getCore().createRenderManager();
				rm.render(oBusyIndicator, this.getDomRef().firstChild);
				rm.destroy();
			}
		}),
		type : sap.m.ListType.Active
	}).setParent(this, null, true).attachTap(this._tap));
};

/**
 * Function is called to create or return the loading control.
 *
 * @private
 */
sap.m.GrowingList.prototype._getLoading = function(sId) {
	var that = this;

	return this._loading || (this._loading = new sap.m.CustomListItem({
		id : sId,
		content : new sap.ui.core.HTML({
			content :	"<div class='sapMSLIDiv sapMGrowingListLoading'>" +
							"<div class='sapMGrowingListBusyIndicator' id='" + sId + "-busyIndicator'></div>" +
						"</div>",
			afterRendering : function(e) {
				var oBusyIndicator = that._getBusyIndicator();
				var rm = sap.ui.getCore().createRenderManager();
				rm.render(oBusyIndicator, this.getDomRef().firstChild);
				rm.destroy();
			}
		})
	}).setParent(this, null, true));
};


/**
 * Function is called to create or return the busy indicator control.
 *
 * @private
*/
sap.m.GrowingList.prototype._getBusyIndicator = function() {
	return this._busyIndicator || (this._busyIndicator = new sap.m.BusyIndicator({
		size : "2.0em"
	}));
};


/**
 * Returns the information about the list items.
 * -> how many items are displayed
 * -> maximum items to be displayed
 *
 * @private
*/
sap.m.GrowingList.prototype._getListItemInfo = function() {
	return ("[ " + this._iCurrentNumberOfItems + " / " + this._getListItemCount() + " ]");
};


/**
 * Calls the  method "_loadNewItems" of the list to append the loaded list items when trigger is tapped
 *
 * @private
*/
sap.m.GrowingList.prototype._tap = function(oEvent) {
	var that = this;
	// show busy indicator
	jQuery.sap.byId(this.getId() + '-busyIndicator').toggleClass('sapMGrowingListBusyIndicatorVisible', true);
	// load new items - add new rows
	window.setTimeout(function() {
		that.oParent._loadNewItems();
	}, 0);
};


/**
 * Function is called to add single list item to the existing list.
 *
 * @private
 */
sap.m.List.prototype.addListItem = function(oItem) {
	oItem._mode = this.getMode();
	oItem._includeItemInSelection = this.getIncludeItemInSelection();
	oItem._select = this._select;
	oItem._delete = this._delete;
	oItem._listId = this.getId();
	oItem._showUnread = this.getShowUnread();
	this.addAggregation("items", oItem, true);
	var rm = sap.ui.getCore().createRenderManager();
	var sListId = this.getId() + "-listUl";
	rm.render(oItem, jQuery.sap.domById(sListId));
	rm.destroy();
	return this;
};


/**
 * Returns the row count. If aggregation rows is bound the count will be the length of the binding,
 * otherwise the count of the list items aggregation will be returned
 *
 * @private
*/
sap.m.GrowingList.prototype._getListItemCount = function() {
	var oBinding = this.getBinding("items");
	if (oBinding) {
		return oBinding.getLength();
	} else {
		return this.getItems().length;
	}
};


/**
 * Calculate the data needs to be pulled depending on the "threshold" property.
 *
 * @private
*/
sap.m.GrowingList.prototype._loadNewItems =  function() {
	// collect the relevant informations
	var oBindingInfo = this.getBindingInfo("items"),
		fnFactory = oBindingInfo.factory,
		oBinding = oBindingInfo.binding,
		iCurrentNumberOfItems = this._iCurrentNumberOfItems,
		iListItemCount = this._getListItemCount(),
		iNewListItemCount = Math.min(iListItemCount, this.getThreshold()),
		iThreshold = this.getThreshold(),
		aContexts = oBinding ? oBinding.getContexts(iCurrentNumberOfItems, iNewListItemCount, iThreshold) : [];

	if (iCurrentNumberOfItems === oBinding.iLength) {
		this._hideIndicator();
		return;
	}

	console.log("---------> _loadNewItems " + aContexts.length);

	  if (oBinding && iCurrentNumberOfItems !== oBinding.iLength) {
		var sListId = this.getId() + "-listUl";
		if ((aContexts.length > 0) && (jQuery.sap.domById(sListId) != undefined)) {
			for ( var i = 0, l = aContexts.length; i < l; i++) {
				var sId = this.getId() + "-id" + (iCurrentNumberOfItems + i), oClone = fnFactory(sId, aContexts[i]);
				oClone.setBindingContext(aContexts[i], oBindingInfo.model);
				this.addListItem(oClone);
			}
			this._iCurrentNumberOfItems = (iCurrentNumberOfItems + iThreshold);
			if (this._iCurrentNumberOfItems > iListItemCount) {
				this._iCurrentNumberOfItems = iListItemCount;
			}
			// refresh scroller and scroll last list item to top
			/*
			if ((this.oParent._oScroller._scroller) && (this._sLastListItemId)) {
				this.oParent._oScroller._scroller.refresh();
				this.oParent._oScroller._scroller.scrollToElement(jQuery.sap.domById(this._sLastListItemId), 1000);
			}
			*/
			// remember last list item id
			this._sLastListItemId = oClone.sId;
		}
	}

	// hide busy indicator and update item information
	//this._hideIndicator();

	// set trigger check
	if (aContexts.length == 0) {
		this._bPullTriggered = true;
	}

	this._iListItemCount = iListItemCount;
};


/**
 * Update loaded items ... called from the model.
 *
 * @private
*/
sap.m.GrowingList.prototype.updateItems =  function() {
	// collect the relevant informations
	var oBindingInfo = this.getBindingInfo("items"),
		fnFactory = oBindingInfo.factory,
		oBinding = oBindingInfo.binding,
		iCurrentNumberOfItems = this._iCurrentNumberOfItems,
		iListItemCount = this._getListItemCount(),
		iNewListItemCount = Math.min(iListItemCount, this.getThreshold()),
		iThreshold = this.getThreshold(),
		aContexts = oBinding ? oBinding.getContexts(iCurrentNumberOfItems, iNewListItemCount, iThreshold) : [];

	console.log("---------> updateItems " + aContexts.length);
	console.log("---------> calculation " + iCurrentNumberOfItems + " / " + iNewListItemCount + " / " + iListItemCount);

	if (this._iListItemCount > 0 && this._iListItemCount != iListItemCount) {

		aContexts = oBinding ? oBinding.getContexts(0, iNewListItemCount, iThreshold) : [];

		// show busy indicator
		//jQuery.sap.byId(this.getId() + '-busyIndicator').toggleClass('sapMGrowingListBusyIndicatorVisible', true);


		//alert("---------> list item changed (add/delete/...)");
		//this.invalidate();
		//this.removeAllAggregation("items");
		//this._iCurrentNumberOfItems = 0;
		//this.rerender();


		// hide busy indicator and update item information
		this._hideIndicator();
	}

	// check if pull was triggered
	if (this._bPullTriggered) {
		if (oBinding && iCurrentNumberOfItems !== oBinding.iLength) {
			var sListId = this.getId() + "-listUl";
			if ((aContexts.length > 0) && (jQuery.sap.domById(sListId) != undefined)) {
				for ( var i = 0, l = aContexts.length; i < l; i++) {
					var sId = this.getId() + "-id" + (iCurrentNumberOfItems + i), oClone = fnFactory(sId, aContexts[i]);
					oClone.setBindingContext(aContexts[i], oBindingInfo.model);
					this.addListItem(oClone);
				}
				this._iCurrentNumberOfItems = (iCurrentNumberOfItems + iThreshold);
				if (this._iCurrentNumberOfItems > iListItemCount) {
					this._iCurrentNumberOfItems = iListItemCount;
				}
				// refresh scroller and scroll last list item to top
				/*
				if ((this.oParent._oScroller._scroller) && (this._sLastListItemId)) {
					this.oParent._oScroller._scroller.refresh();
					this.oParent._oScroller._scroller.scrollToElement(jQuery.sap.domById(this._sLastListItemId), 1000);
				}
				*/
				// remember last list item id
				this._sLastListItemId = oClone.sId;
			}
		}

		// hide busy indicator and update item information
		this._hideIndicator();
	}

	// reset trigger check
	this._bPullTriggered = false;
	this._loadingByScroll = false;
	this._iListItemCount = iListItemCount;
};

sap.m.GrowingList.prototype._hideIndicator = function() {
	var that = this,
		sId = that.getId(),
		$byId = jQuery.sap.byId;

	window.setTimeout(function() {
		if (that.getScrollToLoad()) {
			$byId(sId + '-triggerList').css("display", "none");
		} else {
			$byId(sId + '-trigger-itemInfo').html(that._getListItemInfo());
			$byId(sId + '-trigger-busyIndicator').toggleClass('sapMGrowingListBusyIndicatorVisible', false);
		}
	}, 0);
};


sap.m.GrowingList.prototype._isInLoadingLimit = function(iscroll) {
	//start loading if 75% of the scroll container is scrolled
	var scrollThreshold = Math.floor(iscroll.wrapperH / 4);
	return -iscroll.maxScrollY + iscroll.y < scrollThreshold;
};

sap.m.GrowingList.prototype._triggerLoadingByScroll = function() {
	if (!this._loadingByScroll &&  this._iCurrentNumberOfItems !== this.getBindingInfo("items").binding.iLength) {
		jQuery.sap.byId(this.getId() + '-triggerList').css("display", "block");
		this._loadingByScroll = true;
		this._loadNewItems();
	}
};

sap.m.GrowingList.prototype.onScrollEnd = function(iscroll) {
	// user needs to scroll bottom and must be in loading range
	if (iscroll.dirY > 0 && this._isInLoadingLimit(iscroll)) {
		this._triggerLoadingByScroll();
	}
};
