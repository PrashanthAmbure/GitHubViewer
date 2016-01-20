/**
 * Created by PAmbure on 25/9/15.
 */
var module = angular.module('globalService', []);

module.service('appService', function(){
    var userInfo = {};
    this.userInfo = userInfo;
});