(function () {
	'use strict';

	angular.module('app').directive('navItem', navItemDirective);

	navItemDirective.$inject = ['$compile', '$state'];

	function navItemDirective($compile, $state) {
		var directive = {
			restrict: 'AE',
			scope: {
				'item': '=navItem'
			},
			link: linkFn
		};
		return directive;

		function linkFn(scope, elem, attr) {
			if (scope.item.show) {
				var template =
						//'<a ng-href="#/' + scope.item.action + '">' +
						'<i class="' + scope.item.icon + '" aria-hidden="true"></i>' +
						'<span>' + scope.item.caption + '</span>'
				//	'</a>'
					;

				//var link = scope.uiTool.action;
				//var template = $compile('<a ng-href="#/' + link + '">' + link + '</a>')(scope);
				var component = $compile(template)(scope);
				elem.append(component);
			}

			if (scope.item.action) {
				elem.on('click', action)
			}

			function action() {
				console.log(scope.item.action);
				//$state.go("view.subs", {view: scope.item.action}, {inherit: true});
				$state.go("view.subs.desktop", {view: scope.item.action},{inherit: false});
			}


		}

	}
})();