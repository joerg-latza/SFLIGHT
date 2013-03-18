/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
(function($){var c=sap.ui.getCore(),l=sap.m.getLocale(),L=l.getLanguage(),o=sap.m.getLocaleData(),r=c.getLibraryResourceBundle("sap.m"),_=function(t){return r.getText("MOBISCROLL_"+t)},O="",j="sap.ui.thirdparty.mobiscroll.js.",C=$.sap.getModulePath("sap.ui.thirdparty.mobiscroll","/css/"),d={endYear:new Date().getFullYear()+10,lang:L},a={setText:_("SET"),cancelText:_("CANCEL"),monthText:_("MONTH"),dayText:_("DAY"),yearText:_("YEAR"),hourText:_("HOURS"),minuteText:_("MINUTES"),secText:_("SECONDS"),nowText:_("NOW"),dayNames:o.getDays("wide"),dayNamesShort:o.getDays("abbreviated"),monthNames:o.getMonths("wide"),monthNamesShort:o.getMonths("abbreviated")};if($.os.ios){O="ios";d.display="bubble"}else if($.os.android){O="android-ics";if($.os.fVersion==2.3){d.mode="clickpick"}else if($.os.fVersion==3.2){d.mode="scroller"}}$.sap.includeStyleSheet(C+"mobiscroll-core.css");$.sap.require(j+"mobiscroll-core");$.sap.require(j+"mobiscroll-datetime");if(O){d.theme=($.os.android)?O+" light":O;$.sap.includeStyleSheet(C+"mobiscroll-"+O+".css");$.sap.require(j+"mobiscroll-"+O);$.extend($.mobiscroll.themes[d.theme].defaults,d)}$.scroller.i18n[L]=$.extend(a);$.scroller.setDefaults(d)})(jQuery);
