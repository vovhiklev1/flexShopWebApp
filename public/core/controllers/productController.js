(function () {
    'use strict';

    angular.module('app').controller('productController', productController);

    productController.$inject = ['productData', '$scope', '$stateParams'];

    function productController(productData, $scope, $stateParams) {
        var ctrl = this;

        angular.extend(ctrl, {
            productData: {}
            //  config: {}
        });

        ctrl.productData = productData;


    }
})();