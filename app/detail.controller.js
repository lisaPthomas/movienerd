(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['VideoService', '$stateParams', 'toastr'];

    /* @ngInject */
    function DetailController(VideoService, $stateParams, toastr) {
        var vm = this;
        vm.title = 'DetailController';



        ////////////////
        function getDetail() {
            VideoService.getDetail($stateParams.movieDetailId
).then(
                    function(response) {
                        vm.movieDetail = response.data;
                        console.log(vm.movieDetail);
                    } //close getDetail
                    ////////////////
                    // function activate() {}
                ) //close .then
        } //close function
        getDetail();
    } //close function VideoController($state)

})();
