define([
    'uiComponent',
    'ko',
    'MyCompany_InventoryFulfilment/js/model/box-configurations',
    'jquery'
], function(
    Component,
    ko,
    boxConfigurationsModel,
    $
) {
    'use strict';

    return Component.extend({
        defaults: {
            boxConfigurationsModel: boxConfigurationsModel
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
                console.log('Box configuration success.');
            } else {
                console.log('Box configuration error.');
            }
        }
    });
});
