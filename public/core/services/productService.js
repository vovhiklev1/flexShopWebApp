(function () {
    'use strict';
    angular.module('app').service('product', productService);
    productService.$inject = ['$http', '$q', '$stateParams', '$state'];

    function productService($http, $q, $stateParams, $state) {
        angular.extend(this, {
            init: init,
            getData: getData
        });


        function init() {

        };

        function getData(desktopData, productId) {
            var product = {};
            angular.forEach(desktopData, function (val, key) {
                if (val.name = productId) {
                    product = val;
                }
            });

            return product;

        };


    }
})
();