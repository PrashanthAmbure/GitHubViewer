/**
 * Created by PAmbure on 26/9/15.
 */
var module = angular.module('followerForm', []);

module.controller('followerFormCtrl', function($scope, $location){

    $scope.followerSearch = function(followerName){
        $location.path('profile/'+followerName);
    };

});