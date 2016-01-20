/**
 * Created by PAmbure on 25/9/15.
 */
var module = angular.module('searchForm', []);

module.controller('searchFormCtrl', function($scope, $location){

    $scope.profileSearch = function(event){
        event.preventDefault();
        $location.path('profile/'+$scope.profileName);
    };

});