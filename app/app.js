(function() {
    'use strict';

    angular
        .module('myApp', [
            'ui.router', 'toastr'
        ])

    .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/main");
            $stateProvider
                .state('main', {
                    url: "/main",
                    templateUrl: "app/partials/main.html",
                    controller: "VideoController",
                    controllerAs: "vm"
                })
                .state("maindetail", {
                    url: "/maindetail/:movieDetailId",
                    templateUrl: "app/partials/maindetail.html",
                    controller: "DetailController",
                    controllerAs: "vm"
                })
        })
        //close config function

})(); //end of strict


//a tag-->state2 (main.detail)-->controller.detail-->service
