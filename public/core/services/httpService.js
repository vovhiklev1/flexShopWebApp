(function () {
    'use strict';
    angular.module('app').service('http', httpService);
    httpService.$inject = ['$http', '$q'];

    function httpService($http, $q) {
        angular.extend(this, {
            init: init,
            getData: getData
        });
        var inst = undefined;

        function init(urlParam) {
            return inst = inst || (function () {
                    var def = $q.defer();
                    $http.get(urlParam).then(function (res) { //'./nav.json'
                        def.resolve(res.data);
                    }, function (err) {
                        def.reject(err)
                    });

                    return def.promise;
                })();
        };

        function getData(urlParam) {
            var def = $q.defer();
            $http.get(urlParam).then(function (res) { //'./nav.json'
                def.resolve(res.data);
            }, function (err) {
                def.reject(err)
            });
            return def.promise;
        };


    }
})();