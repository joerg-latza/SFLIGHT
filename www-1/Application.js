jQuery.sap.declare("untitledproject.Application");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("untitledproject.Application", {

	metadata : {
		properties : {
			locale: "string",
			modelUri: "string"
		}
	},

	setLocale : function(value) {
		this.setProperty("locale", value);
		if (this._oI18nModel) {
			this._oI18nModel.destroy();
		}
		this._oI18nModel = new sap.ui.model.resource.ResourceModel({bundleName:"untitledproject.i18n.i18n", bundleLocale: this.getLocale()});
		if (this._oView) {
			this._oView.setModel(this._oI18nModel, "i18n");
		}
	},
	
	setModelUri : function(value) {
		this.setProperty("modelUri", value);
		if (this._oModel) {
			this._oModel.destroy();
		}
		this._oModel = new sap.ui.model.json.JSONModel(value);
		sap.ui.getCore().setModel(this._oModel,"employee");
	},

	_oView : null,

	main : function() {
		this._oView = sap.ui.htmlview("main", "untitledproject.Main");

		this.setLocale(this.getLocale());

		this._oView.placeAt(this.getRoot());
	}/*,

	onError : function(sMessage, sFile, iLine) {

	},

	onBeforeExit : function(oEvt) {

	},

	onExit : function(oEvt) {

	}
*/
});
