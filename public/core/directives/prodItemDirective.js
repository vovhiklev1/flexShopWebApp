(function () {
    'use strict';
    angular.module('app').directive('fixSizeProdItem', fixSizeProdItemDirective);

    fixSizeProdItemDirective.$inject = [];

    function fixSizeProdItemDirective() {
        var directive = {
            restrict: 'AE',
            link: link
        };

        return directive;

        function link() {

            angular.element(document).ready(function () {
                var siblingsElems = angular.element(document.querySelectorAll(('[prod-item]')));
                if (siblingsElems.length && siblingsElems.length > 2) {
                    var first = siblingsElems[0].clientWidth;
                    var last = siblingsElems[siblingsElems.length - 1].clientWidth;
                    if (first != last) {
                        angular.element(angular.element(siblingsElems[siblingsElems.length - 1]).parent()).css({"max-width": first + 'px'});
                    }
                }

            });
        }
    }
})();

(function () {
    'use strict';

    angular.module('app').directive('prodItem', prodItemDirective);

    prodItemDirective.$inject = ['$compile', '$stateParams'];

    function prodItemDirective($compile, $stateParams) {
        var directive = {
            restrict: 'AE',
            controller: ['$state', '$scope', function ($state, $scope) {
                var ctrl = this;
                angular.extend(ctrl, {
                    action: action
                });
                function action() {
                    if ($scope.item.action == 'product') {
                        $state.go("view.subs.desktop.product", {productId: $scope.item.name, type: $scope.item.type}, {inherit: true});
                    }
                }
            }],
            templateUrl: "core/views/prodItem.html",
            controllerAs: 'ctrl',
            bindToController: true,
            link: linkFn
        };
        return directive;

        function linkFn(scope, elem, attr) {

            /*    angular.element(document).ready(function () {
             var siblingsElems = angular.element(document.querySelectorAll(('[prod-item]')));
             if (siblingsElems.length) {
             var first = siblingsElems[0].clientWidth;
             var last = siblingsElems[siblingsElems.length - 1].clientWidth;
             if (first != last) {
             angular.element(angular.element(siblingsElems[siblingsElems.length - 1]).parent()).css({"max-width": first + 'px'});
             }
             }
             var siblingsElems2 = angular.element(document.querySelectorAll(('[prod-item]')));

             });*/

            if (scope.item.show) {
                /*   var template = '<img src="' + scope.item.img + '">' +
                 '<span>' + scope.item.caption + '</span>';


                 var component = $compile(template)(scope);
                 elem.append(component);*/

                if (scope.item.action) {
                    elem.on('click ', scope.ctrl.action); //mouseover
                }

            }


        }

    }
})();