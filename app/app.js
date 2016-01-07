(function() {
    'use strict';
    
    var app = angular.module('shop', ['ngRoute']);
    
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            controller: 'ListCtrl',
                templateUrl: 'app/views/list.html'
                
            })
            .otherwise({redirectTo: '/'});
    });
})();   
