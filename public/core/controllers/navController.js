(function () {
		'use strict';

		angular.module('app').controller('navController', navController);

		navController.$inject = ['navConfigData', '$scope', '$stateParams'];

		function navController(navConfigData, $scope, $stateParams) {
			var ctrl = this;

			angular.extend(ctrl, {
				navDetailsConfig: {},
				config: {}
			});

			//$state.go("view.subs.desktop", {productId: 'defaultPage'});

			ctrl.config = navConfigData;

			$scope.$watch(function () {
				return $stateParams.view
			}, checkPageData);

			function checkPageData(newVal, oldVal) {
				if (angular.isDefined(newVal)) {
					ctrl.navDetailsConfig = parsePageData();
				}
			}
			function parsePageData() {
				var data = {};
				angular.extend(data, {
					headerData: {},
					bar: [],
					link: []
				});

				angular.forEach(ctrl.config, function (val, key) {
					if (val.nav_details && $stateParams.view == val.action) {
						angular.forEach(val['nav_details'], function (barVal, barKey) {
							if (Object.keys(barVal) == 'detail_header') {
								data.headerData.icon = barVal['detail_header'].icon;
								data.headerData.caption = barVal['detail_header'].caption;
								data.headerData.show = barVal['detail_header'].show;
							}
							if (Object.keys(barVal) == 'bar') {
								data.bar= barVal['bar'];
							}
							if (Object.keys(barVal) == 'link') {
								data.link= barVal['link'];
							}

						});

					}
				});
				return data
			};
		}
	})();