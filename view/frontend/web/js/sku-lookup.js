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
            sku: ko.observable("SKU"),
            placeholder: $t('Example: %1').replace('%1', '24-MB01'),
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        },
    });
});
