(function () {
    'use strict';

    angular.module('app').controller('navDetailsController', navDetailsController);

    navDetailsController.$inject = ['$scope', '$stateParams', '$rootScope', '$state'];

    function navDetailsController($scope, $stateParams, $rootScope, $state) {
        var ctrl = this;
        $scope.navCtrl.currBar = 'test';



        $scope.$on('CHANGE_CURR_BAR', function (event, data) {
            $scope.navCtrl.currBar = data.newVal;
            $scope.$apply();
        });
        /*  $scope.$watch(function () {
         return $scope.navCtrl.currBar
         }, function (val) {
         var a = val;
         });*/

        /*	angular.extend(this, {
         config: $scope.navCtrl.navDetailsConfig
         });*/

        $scope.$watch(function () {
                return $scope.navCtrl.navDetailsConfig
            },
            changeNavDetailsData);

        function changeNavDetailsData() {

            /*if ($scope.navCtrl.navDetailsConfig.headerData
             || $scope.navCtrl.navDetailsConfig.bar.length
             || $scope.navCtrl.navDetailsConfig.link.length) {*/
            $scope.chengeHeader();
            //}
            //else {
            //$rootScope.navDetailsAvailable = false;
            //}
        }


    }
})();