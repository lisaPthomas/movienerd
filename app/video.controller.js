
(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('VideoController', VideoController);

    VideoController.$inject = ['VideoService'];

    /* @ngInject */
    function VideoController(VideoService) {
        var vm = this;
        vm.title = 'VideoController';





        vm.getMovie = function(movie) {
                VideoService.getMovie(movie).then(
                        function(response) {
                            vm.movieData = response.data.Search //gets search object

                        } //close getMovie
                        ////////////////
                        // function activate() {}
                    ) //close .then
            } //close function(movie)
    } //close function VideoController($state)

})();
