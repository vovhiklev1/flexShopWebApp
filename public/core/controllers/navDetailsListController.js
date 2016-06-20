(function () {
    'use strict';

    angular.module('app').controller('navDetailsListController', navDetailsListController);

    navDetailsListController.$inject = ['$scope', '$stateParams', '$state', '$rootScope'];

    function navDetailsListController($scope, $stateParams, $state, $rootScope) {
        var ctrl = this;

        angular.extend(this, {
            list: []
        });

        $scope.$watch(function () {
                return $scope.navCtrl.navDetailsConfig
            },
            resolveData);

        $scope.$watch(function () {
            return $scope.navCtrl.currBar
        }, resolveData);

        function resolveData(newVal) {
            if (angular.isDefined(newVal)) {
                ctrl.list = [];
                angular.forEach($scope.navCtrl.navDetailsConfig.link, function (val, key) {
                    if (val.parent == $scope.navCtrl.currBar) {
                        ctrl.list.push(val)
                    }
                })
            }
            ;
        }


    }
})
();