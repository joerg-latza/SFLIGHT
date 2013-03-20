jQuery.sap.declare({modName:"untitledproject.view.View", type:"controller"});

jQuery.sap.require("sap.ui.model.odata.datajs");

untitledproject.view.View = function () {
	   sap.ui.core.mvc.Controller.apply(this, arguments);
	};

	untitledproject.view.View.prototype = jQuery.sap.newObject(sap.ui.core.mvc.Controller.prototype);

	var oBundle = jQuery.sap.resources({url:"i18n/i18n.properties", locale:""});
	var oRoundtripDescription;
	var oResult;
	var oCheckBox;
	var oldstate;
//	var baseURL = "http://ld8608.wdf.sap.corp:8014";
	var baseURL = "http://pub4-111.env.cloudshare.com:8000";
	var baseODataURL = baseURL+"/StayHungry/StayHungry.xsodata";
//	var baseODataURL = baseURL+"/appdesigner/StayHungry.xsodata";
	
	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	*/
	untitledproject.view.View.prototype.onInit = function() {
		oRoundtripDescription = this.byId("RoundtripDescriptionYes");
		oResult = this.byId("Result");
		oCheckBox = this.byId("checkBox");
	};
	   
	untitledproject.view.View.prototype.onAfterRendering = function() {
		this.hideLabels();
		this.deactivateConfirm();
		var me = this;
		   OData.read(
			   {
				   requestUri: baseODataURL+"/MyRenounceMeals/$count",
				   method: "GET"
			   },
			   jQuery.proxy(function (data) {
				   oldstate = (data === "1");
				   oCheckBox.setSelected(oldstate);
    			},this),
    			function (err) { //Error Callback:
				   me.showError(err.message);
    			}
		   );
	   };
	   
	   untitledproject.view.View.prototype.onSelect = function() {
		   if(oldstate == oCheckBox.getSelected()) {
			   this.deactivateConfirm();
			   this.showLabels();
		   } else {
			   this.activateConfirm();
			   this.hideLabels();
		   }
	   };
	   
	   untitledproject.view.View.prototype.showRoundtripDescription = function() {
		   oRoundtripDescription.setVisible(true);
		   if(oCheckBox.getSelected()) {
			   oRoundtripDescription.setText(oBundle.getText("view.MainPage.RoundtripDescriptionYes"));
		   } else {
			   oRoundtripDescription.setText(oBundle.getText("view.MainPage.RoundtripDescriptionNo"));
		   }
	   };
	   
	   untitledproject.view.View.prototype.onConfirm = function() {
		   var me = this;
		   jQuery.ajax({
			url: baseURL+"/sflight/sflight/app/hungry.xsjs/toggle",
			method: "GET",
			success: function(data){
				oldstate = oCheckBox.getSelected();
				me.deactivateConfirm();
				OData.read(
				   {
					   requestUri: baseODataURL+"/MyNumberOfRenounceMeals/$count",
					   method: "GET"
				   },
				   jQuery.proxy(function (data) {
					   me.showRoundtripDescription();
					   oResult.setVisible(true);
		    			oResult.setText(oBundle.getText("view.MainPage.Result", [data]));
	    			},this),
	    			function (err) { //Error Callback:
					   me.showError(err.message);
	    			}
			   );
			},
			error: function(err){
				me.showError(err.message);
			}
			});
	   };
	   
	   untitledproject.view.View.prototype.deactivateConfirm = function() {
		 var oConfirmButton = this.byId("Confirm");
		 oConfirmButton.setEnabled(false);
		 oConfirmButton.removeStyleClass("sapMBtnAccept");
	   };
	   
	   untitledproject.view.View.prototype.activateConfirm = function() {
			 var oConfirmButton = this.byId("Confirm");
			 oConfirmButton.setEnabled(true);
			 oConfirmButton.addStyleClass("sapMBtnAccept");
		   };
		   
	   untitledproject.view.View.prototype.hideLabels = function() {
		   oRoundtripDescription.setVisible(false);
		   oResult.setVisible(false);
	   };
	   
	   untitledproject.view.View.prototype.showLabels = function() {
		   oRoundtripDescription.setVisible(true);
		   oResult.setVisible(true);
	   };
	   
	   untitledproject.view.View.prototype.showError = function(message) {
		   oRoundtripDescription.setVisible(true);
		   oRoundtripDescription.setText(message);
		   oResult.setVisible(false);
		   };