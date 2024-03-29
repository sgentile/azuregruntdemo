(function (){

angular.module('azuregruntdemo', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('azuregruntdemo').config(function($routeProvider) {

    $routeProvider.when('/home',{
        templateUrl: 'partial/home/home.html',
        controllerAs: 'vm',
        controller: 'HomeCtrl'
});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('azuregruntdemo').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

})();
