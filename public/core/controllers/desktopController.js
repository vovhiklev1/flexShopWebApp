(function () {
    'use strict';

    angular.module('app').controller('desktopController', desktopController);

    desktopController.$inject = ['desktopData', '$scope', '$stateParams'];

    function desktopController(desktopData, $scope, $stateParams) {
        var ctrl = this;

        angular.extend(ctrl, {
            desktopData: {}
          //  config: {}
        });

        ctrl.desktopData = desktopData;




    }
})();