define([
    'uiComponent',
    'ko',
    'mage/storage',
    'jquery',
    'mage/translate',
], function(
    Component,
    ko,
    storage,
    $,
    $t,
) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: ko.observable('24-MB01'),
            placeholder: $t('Example: %1').replace('%1', '24-MB01'),
            messageResponse: ko.observable('')
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        },
        handleSubmit() {
            this.messageResponse('');

            storage.get(`rest/V1/products/${this.sku()}`)
                .done(response => {
                    console.log(response);
                    this.messageResponse($t('Product found! %1').replace('%1', `<strong>${response.name}</strong>`));
                })
                .fail(() => {
                    this.messageResponse($t('Product not found.'));
                })
        }
    });
});
