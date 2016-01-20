/**
 * Created by PAmbure on 25/9/15.
 */
var module = angular.module('profile', []);

module.controller('profileCtrl', function($scope, $http, $routeParams, appService){

    var profileName = $routeParams.profileName;

    var onSuccess = function(response) {
        $scope.user = response.data;
        appService.userInfo.avatar_url = $scope.user.avatar_url;
        appService.userInfo.name = $scope.user.name;
        $scope.failureMsg = null;
    };

    var onFailure = function(failureReason) {
        $scope.failureMsg = failureReason.data;

        $scope.user = null;
        $scope.followers = null;
        $scope.followings = null;
        $('.nav li.profile-a').removeClass('active');

    };

    $http.get('https://api.github.com/users/'+profileName)
        .then(onSuccess, onFailure);


    var followersOnSuccess = function(response) {
        $scope.followers = response.data;
    };

    var followersOnFailure = function(failureReason) {
        $scope.failureMsg = failureReason.data;
    };

    $http.get('https://api.github.com/users/'+profileName+'/followers')
        .then(followersOnSuccess, followersOnFailure);

    var followingOnSuccess = function(response) {
        $scope.followings = response.data;
    };

    var followingOnFailure = function(failureReason) {
        $scope.failureMsg = failureReason.data;
    };

    $http.get('https://api.github.com/users/'+profileName+'/following')
        .then(followingOnSuccess, followingOnFailure);
});