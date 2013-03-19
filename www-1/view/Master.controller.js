/**
 * Controller. Handles all events of the view. 
 */
sap.ui.controller("untitledproject.view.Master", {
	
	onShowDetails : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id: "detailsPage",
			data: {
				context : evt.oSource.getBindingContext("employee"),
				contextName:"employee"
			}
		});
	}
});