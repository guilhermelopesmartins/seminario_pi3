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
                    Codigo: "123",
                    Descricao: "Descrição da descrição"
                }, {
                    Codigo: "456",
                    Descricao: "Descrição número 2"
                }];

                this.getView().setModel(new JSONModel(default_model), "Default");
            }
        });
    });
