(function () {
	'use strict';

	angular.module('app').directive('navLinkDetails', navLinkDetailsDirective);

	navLinkDetailsDirective.$inject = ['$compile', '$stateParams'];

	function navLinkDetailsDirective($compile, $stateParams) {
		var directive = {
			restrict: 'AE',
			/*scope: {
			 'config': '=navDetails'
			 },*/
			controller: ['$state', '$scope', '$stateParams', function ($state, $scope, $stateParams) {
				var ctrl = this;
				angular.extend(ctrl, {
					action: action
				});
				function action() {
					console.log($scope.item.action);
					//$state.go("view.subs.desktop", {productId: $scope.item.action}, {inherit: true});
					$state.go("view.subs.desktop", {type: $scope.item.action}, {
						//location: true,
						inherit: true
						//relative: $state.$current,
						//notify: true,
						//reload: true
					});
				}
			}],
			controllerAs: 'ctrl',
			bindToController: true,
			link: linkFn
		};
		return directive;

		function linkFn(scope, elem, attr) {

			if (scope.item.show) {
				var template = '<div class="item-wrap"><div class="line">' +
					'<span>' + scope.item.caption + '</span>' +
					'</div></div>';
				var component = $compile(template)(scope);
				elem.append(component);
			}

			if (scope.item.action) {
				elem.on('click', scope.ctrl.action);
			}

		}

	}
})();