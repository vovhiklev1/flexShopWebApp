(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            /*.state('nav', {
             url: "/:name1",
             templateUrl: "core/views/nav.html",
             controller: 'navController as navCtrl',
             resolve: {
             navConfig: ['nav', function (nav) {
             return nav.init();
             }]
             }
             })
             .state('nav.view', {
             abstract: true,
             url: '/:name',
             views: {
             'main': {
             template: '<h1>Hello!!!</h1>' +
             '<div ui-view="navdetails"></div>' +
             '<div ui-view="desktop"></div>'
             }
             }
             })
             .state('nav.view.subs', {
             url: '',
             views: {
             'navdetails@nav.view': {
             template: "navdetails"
             },
             'desktop@nav.view': {
             template: "desktop"
             }
             }
             });*/

            /*.state('common', {
             abstract: true,
             url: '/:name',
             views: {
             'common': {
             templateUrl: "core/views/nav.html",
             controller: 'navController as navCtrl'
             }
             },
             resolve: {
             navConfig: ['nav', function (nav) {
             return nav.init();
             }]
             }

             })
             .state('common.subs', {
             url: '',
             views: {
             'desktop@common': {
             templateUrl: "core/views/desktop.html"
             }
             }
             })*/
            .state('view', {
                abstract: true,
                url: '/:view',
                views: {
                    'view': {
                        templateUrl: "core/views/nav.html",
                        controller: 'navController as navCtrl'
                    }
                },
                resolve: {
                    navConfigData: ['http', function (http) {
                        return http.init('./nav.json');
                    }]
                },
                onEnter: ['navConfigData', '$stateParams', '$rootScope', '$state', function (navConfigData, $stateParams, $rootScope, $state) {
                    $rootScope.navDetailsAvailable = false;
                    angular.forEach(navConfigData, function (val, key) {
                        if (val.nav_details && $stateParams.view == val.action) {
                            $rootScope.navDetailsAvailable = true;
                        }
                    });
                    //$rootScope.$broadcast('stateChangeSuccess', {});


                }]
            })
            .state('view.subs', {
                url: '',
                views: {
                    'navdetails@view': {
                        templateUrl: "core/views/nav-details.html"
                    },
                    'desktop@view': {
                        template: '<div ui-view="products"></div> '/*,
                         controller: 'desktopController as desktopCtrl',
                         resolve: {
                         desktopData: ['http', function (http) {
                         return http.init('./products.json');
                         }]
                         },
                         onEnter: ['desktopData', '$stateParams', '$rootScope', function (desktopData, $stateParams, $rootScope) {
                         /!*$rootScope.navDetailsAvailable = false;
                         angular.forEach(navConfigData, function (val, key) {
                         if (val.nav_details && $stateParams.view == val.action) {
                         $rootScope.navDetailsAvailable = true;
                         }

                         });*!/
                         //$rootScope.$broadcast('stateChangeSuccess', {});

                         }]*/,
                        controller: ['$state', function ($state) {
                            //  $state.go("view.subs.desktop", {productId: 'defaultPage'},{inherit: true});
                        }]
                    }
                }
                ,
                onEnter: ['$state', function ($state) {

                }]
            })
            /* .state('view.subs.list', {
             views: {
             "list@view.subs": {
             templateUrl: "core/views/navDetailsList.html",
             controller: 'navDetailsListController as listCtrl'
             }
             }
             /!*,
             resolve: {
             navDetailsLinkList: ['$stateParams', '$state', function ($stateParams, $state) {
             var curr = $state.currBar['state'];
             return true;
             }]
             }*!/

             })*/
            .state('view.subs.desktop', {
                url: '/:type',
                views: {
                    "products": {
                        template: '<div ui-view="product" ></div>' , /*"core/views/desktop.html",*/
                        controller: 'desktopController as desktopCtrl'
                    }
                },
                resolve: {
                    desktopData: ['http', function (http) {
                        return http.getData('./products.json');
                    }]
                },
                onEnter: ['desktopData', '$stateParams', '$rootScope', '$state', function (desktopData, $stateParams, $rootScope, $state) {
                    /*$rootScope.navDetailsAvailable = false;
                     angular.forEach(navConfigData, function (val, key) {
                     if (val.nav_details && $stateParams.view == val.action) {
                     $rootScope.navDetailsAvailable = true;
                     }

                     });*/
                    //$rootScope.$broadcast('stateChangeSuccess', {});

                }]
            })
            .state('view.subs.desktop.product', {
                url: '/:productId',
                views: {
                    "product": {
                        templateUrl: "core/views/product.html",
                        controller: 'productController as productCtrl'
                    }
                }, resolve: {
                    productData: ['http', 'product', 'desktopData', '$stateParams', function (http, product, desktopData, $stateParams) {
                        return product.getData(desktopData, $stateParams.productId);
                    }
                    ]
                }

                ,
                onEnter: ['$stateParams', '$rootScope', '$state', function ($stateParams, $rootScope, $state) {
                    /*$rootScope.navDetailsAvailable = false;
                     angular.forEach(navConfigData, function (val, key) {
                     if (val.nav_details && $stateParams.view == val.action) {
                     $rootScope.navDetailsAvailable = true;
                     }

                     });*/
                    //$rootScope.$broadcast('stateChangeSuccess', {});

                    $stateParams.view = 'products';

                }]


            })


    }
    ;
})
();