/**
 * Created by PAmbure on 26/9/15.
 */
var module = angular.module('followingForm', []);

module.controller('followingFormCtrl', function($scope, $location){

    $scope.followingSearch = function(followingName){
        $location.path('profile/'+followingName);
    };

});