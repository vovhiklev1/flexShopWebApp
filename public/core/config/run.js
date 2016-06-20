(function () {
    'use strict';
    angular.module('app').run(run);

    run.$inject = ['$rootScope'];

    function run($rootScope,$scope) {
        /*$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
         cfpLoadingBar.complete();
         });*/

        $rootScope.navDetailsAvailable = false;


    }

})();