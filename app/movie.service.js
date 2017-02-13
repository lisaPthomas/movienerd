(function() {
    'use strict';

    angular
        .module('myApp')
        .service('VideoService', VideoService);

    VideoService.$inject = ['$http', '$q'];

    /* @ngInject */
    function VideoService($http, $q) {
        var service = {
            getMovie: getMovie,
            getDetail: getDetail
        };
        return service;

        ////////////////

        function getMovie(movieTitle) {


            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/?',
                params: {
                    s: movieTitle
                }
            }).then(function(response) {

                if (typeof response.data == 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('No Data Found');
                }
            }, function(error) {
                defer.reject(error);
            });

            return defer.promise; //
        } //close getMovie function

        function getDetail(moviePlot) {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/?',
                params: {
                    i: moviePlot

                }
            }).then(function(response) {

                if (typeof response.data == 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('No Movie'); ////*******
                }
            }, function(error) {
                defer.reject(error);
            });

            return defer.promise;

        } // close getDetail function
    }
})();
