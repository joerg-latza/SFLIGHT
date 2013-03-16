V   jQuery.sap.declare({modName:"untitledproject.view.View", type:"controller"});

jQuery.sap.require("sap.ui.model.odata.datajs");

untitledproject.view.View = function () {
	   sap.ui.core.mvc.Controller.apply(this, arguments);
	};

	untitledproject.view.View.prototype = jQuery.sap.newObject(sap.ui.core.mvc.Controller.prototype);

	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	*/
	untitledproject.view.View.prototype.onInit = function() {
        alert("Loaded");
        jQuery.get("/sflight/sflight/app/hungry.xsjs/count", function(data) {
            alert(data);
            if(data) {
                this.changeStateToYes();
            } else {
                this.changeStateToNo();
            }
        })
	   };
	   
	   untitledproject.view.View.prototype.onAfterRendering = function() {
		   this.changeStateToNo();
	   };
	   
	   untitledproject.view.View.prototype.changeStateToYes = function() {
		   this.byId("btnYes").setEnabled(true);
		   this.byId("btnNo").setEnabled(false);
		   this.byId("YesDescription").setVisible(false);
	   };
	  
	   untitledproject.view.View.prototype.changeStateToNo = function() {
		   this.byId("btnNo").setEnabled(true);
		   this.byId("btnYes").setEnabled(false);
		   this.byId("YesDescription").setVisible(true);
	   };
	   
	   untitledproject.view.View.prototype.onConfirm = function() {
        jQuery.get("/sflight/sflight/app/hungry.xsjs/toggle", function(data) {
        jQuery.get("/sflight/sflight/app/hungry.xsjs/count", function(data) {
            alert(data);
            if(data) {
                this.changeStateToYes();
            } else {
                this.changeStateToNo();
            }
        })
        });
	   };