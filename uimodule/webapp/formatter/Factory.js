sap.ui.define(["sap/m/ObjectAttribute"], function (ObjectAttribute) {
  "use strict";

  return {
    hobbyFactory: function (sId, oContext) {
      let oUIControl;

      // Decide based on the data which dependent to clone
      if (oContext.getProperty("skill") === "amateur") {
        // This player is amateur, so use a StandardListItem
        oUIControl = this.byId("amateur").clone(sId);
      } else {
        // The player is professional, so we will create an ObjectListItem
        oUIControl = this.byId("professional").clone(sId);
      }

      return oUIControl;
    },
  };
});
