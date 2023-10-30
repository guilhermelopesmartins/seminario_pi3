sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
      "use strict";

      return Controller.extend("seminariopi3.controller.View", {
          onInit: function () {
              let default_model = [{
                  Codigo: "1",
                  Descricao: "Aluguel",
                  Valor: 1000,
                  Pago: true
              }];

              this.getView().setModel(new JSONModel(default_model), "Default");
          },
          onNewPress: function() {
            debugger
            this._oBancosFragment = sap.ui.xmlfragment("sicap.mvc.Bancos.fragments.Bancos", that);
            this._oBancosFragment.setEscapeHandler((oEscapeHandler) => {
              this._oBancosFragment.destroy();
            });
            this.getView().addDependent(this._oBancosFragment);
            this._oBancosFragment.addStyleClass(this.getOwnerComponent().getContentDensityClass());
            //let oModel = this.createRequestModel(CURRENT_MODEL_LIST_API_PATH);
            //this._oBancosFragment.setModel(oModel)
            this._oBancosFragment.open()
          }
      });
  });