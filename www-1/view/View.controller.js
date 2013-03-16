jQuery.sap.declare({modName:"untitledproject.view.View", type:"controller"});

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
			// Check the current state
//		   OData.read(
//			   {
//				   requestUri: "http://pub3-1.env.cloudshare.com:8000/StayHungry/StayHungry.xsodata/MyRenounceMeals/$count",
//				   method: "GET"
//			   },
//			   jQuery.proxy(function (data) {
//				   // TODO: Correct if-Clause
//				   if(data) {
//					   this.changeStateToYes();
//				   } else {
//					   this.changeStateToNo();
//				   }
//    			},this),
//    			function (err) { //Error Callback:
//    			}
//		   );
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
		   // Check the current state
		   OData.read(
			   {
				   requestUri: "http://pub10-20.env.cloudshare.com:8000/StayHungry/StayHungry.xsodata/MyRenounceMeals/$count",
				   method: "GET"
			   },
			   jQuery.proxy(function (data) {
				   // TODO: Correct if-Clause
				   if(data) {
					   this.changeStateToYes();
				   } else {
					   this.changeStateToNo();
				   }
//	    				alert(data);
    			},this),
    			function (err) { //Error Callback:
//	    				alert(err.message);
    			}
		   );
	   };