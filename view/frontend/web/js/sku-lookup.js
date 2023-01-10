define([
    'uiComponent',
    'ko',
    'mage/storage',
    'jquery',
    'mage/translate',
    'MyCompany_InventoryFulfilment/js/model/sku'
], function(
    Component,
    ko,
    storage,
    $,
    $t,
    skuModel
) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: skuModel.sku,
            placeholder: $t('Example: %1').replace('%1', '24-MB01'),
            messageResponse: ko.observable(''),
            isSuccess: skuModel.isSuccess
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        },
        handleSubmit() {
            this.messageResponse('');

            storage.get(`rest/V1/products/${this.sku()}`)
                .done(response => {
                    skuModel.isSuccess(true);
                    this.messageResponse($t('Product found! %1').replace('%1', `<strong>${response.name}</strong>`));
                })
                .fail(() => {
                    skuModel.isSuccess(false);
                    this.messageResponse($t('Product not found.'));
                })
        }
    });
});
