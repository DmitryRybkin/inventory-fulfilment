define([
    'uiComponent',
    'ko',
    'MyCompany_InventoryFulfilment/js/model/box-configurations',
    'MyCompany_InventoryFulfilment/js/model/sku',
    'jquery'
], function(
    Component,
    ko,
    boxConfigurationsModel,
    skuModel,
    $
) {
    'use strict';

    return Component.extend({
        defaults: {
            boxConfigurationsModel: boxConfigurationsModel,
            skuModel: skuModel
        },

        initialize() {
            this._super();

            console.log('The boxConfigurations component has been loaded.');
        },

        handleAdd() {
            boxConfigurationsModel.add();
        },

        handleDelete(index) {
            boxConfigurationsModel.delete(index);
        },

        handleSubmit() {
            $('.box-configurations form input').removeAttr('aria-invalid');

            if ($('.box-configurations form').valid()) {
                boxConfigurationsModel.isSuccess(true);
            } else {
                boxConfigurationsModel.isSuccess(false);
            }
        }
    });
});
