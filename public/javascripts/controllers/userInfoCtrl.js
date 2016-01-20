/**
 * Created by PAmbure on 25/9/15.
 */
var module = angular.module('userInfo', []);

module.controller('userInfoCtrl', function($scope, appService){

    $scope.user = appService.userInfo;

});