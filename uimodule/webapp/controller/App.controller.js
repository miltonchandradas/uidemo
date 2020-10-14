sap.ui.define(["com/sap/ui5demo/controller/BaseController"], function (
  Controller
) {
  "use strict";

  return Controller.extend("com.sap.ui5demo.controller.App", {
    onInit: function () {},

    // onChange update valueState of input
    onChange: function (oEvent) {
      let oInput = oEvent.getSource();
      let validEmail = this._validateInput(oInput.getValue());
      let sValueState = "None";

      if (!validEmail) {
        sValueState = "Error";
      }

      oInput.setValueState(sValueState);
    },

    // PRIVATE FUNCTIONS
    _validateInput: function (sValue) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(sValue).toLowerCase());
    },
  });
});
