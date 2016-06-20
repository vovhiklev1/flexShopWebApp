(function () {
	'use strict';

	angular.module('app').config(config);

	config.$inject = ['$provide'];
	function config($provide) {

		$provide.decorator('$state', ['$delegate', function ($delegate) {
			$delegate.currBar = {};
			return $delegate;
		}])
	}
})();