(function () {
    'use strict';

    angular.module('app').directive('navDetailsList', navDetailsListDirective);

    navDetailsListDirective.$inject = ['$compile', '$stateParams'];

    function navDetailsListDirective($compile, $stateParams) {
        var directive = {
            restrict: 'AE',
            controller: 'navDetailsListController as listCtrl',
            templateUrl: 'core/views/navDetailsList.html',
            bindToController: true,
            link: linkFn
        };
        return directive;

        function linkFn(scope, elem, attr) {


        }

    }
})();