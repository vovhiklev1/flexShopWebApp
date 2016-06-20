(function () {
	'use strict';

	angular.module('app').directive('navDetails', navDetailsDirective);

	navDetailsDirective.$inject = ['$compile', '$stateParams'];

	function navDetailsDirective($compile, $stateParams) {
		var directive = {
			restrict: 'AE',
			/*scope: {
			 'config': '=navDetails'
			 },*/
			controller: 'navDetailsController as navDetailsCtrl',
			bindToController: true,
			link: linkFn
		};
		return directive;

		function linkFn(scope, elem, attr) {

			scope.chengeHeader = function () {
				try {
					var data = scope.navCtrl.navDetailsConfig.headerData;
					var template = '<i class="' + data.icon + '" aria-hidden="true"></i>' +
						'<span>' + data.caption + '</span>';
					var inner = angular.element(elem[0].querySelector('[nav-details-header]')).append(template);
				} catch (err) {
					console.log(err)
				}
			}
			//scope.chengeHeader();


		}

	}
})();