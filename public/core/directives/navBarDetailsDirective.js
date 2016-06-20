(function () {
    'use strict';

    angular.module('app').directive('navBarDetails', navBarDetailsDirective);

    navBarDetailsDirective.$inject = ['$compile', '$stateParams'];

    function navBarDetailsDirective($compile, $stateParams) {
        var directive = {
            restrict: 'AE',
            /*scope: {
             'config': '=navDetails'
             },*/
            controller: ['$state', '$scope', '$rootScope', function ($state, $scope, $rootScope) {
                var ctrl = this;
                angular.extend(ctrl, {
                    action: action
                });
                function action() {

                    if ($scope.item.actionType == 'state') {
                        //	$state.current.stateData = {state: $scope.item.action};
                        //$state.currBar = {state: $scope.item.action};
                        //$rootScope.currBar =  $scope.item.action;
                        $scope.$emit('CHANGE_CURR_BAR', {newVal: $scope.item.action})
                        //$scope.navDetailsCtrl.currBar = $scope.item.action;
                        /*$state.go("view.subs.list", {}, {
                         //location: true,
                         inherit: true,
                         //relative: $state.$current,
                         notify: true,
                         reload: true
                         });*/
                    } else {

                        /*switch ($scope.item.action) {
                            case 'desktop':
                                (function () {*/
                                    $state.go("view.subs.desktop", {productId: $scope.item.action}, {inherit: true});

                            /*    })();
                                break;
                            default:
                                (function () {
                                    $state.go("view.subs", {view: $scope.item.action}, {inherit: true});
                                })();

                        }*/



                    }
                }
            }],
            controllerAs: 'ctrl',
            bindToController: true,
            link: linkFn
        };
        return directive;

        function linkFn(scope, elem, attr) {

            if (scope.item.show) {
                var template = '<img src="' + scope.item.img + '">' +
                    '<span>' + scope.item.caption + '</span>';
                var component = $compile(template)(scope);
                elem.append(component);
            }

            if (scope.item.action) {
                elem.on('click ', scope.ctrl.action); //mouseover
            }

        }

    }
})();