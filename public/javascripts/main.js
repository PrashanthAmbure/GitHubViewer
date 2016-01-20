$(document).ready(function(){
	var selector = '.nav li';

    $(selector).on('click', function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
    });
});


var app = angular.module('githubProfileViewer', ['ngRoute', 'userInfo', 'searchForm', 'profile', 'followerForm', 'followingForm', 'globalService']);

app.config([
    '$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl:    'views/home.html'
        }).
            when('/profile/:profileName', {
                templateUrl:    'views/profile.html',
                controller: 'profileCtrl'
            }).
            when('/activityStream', {
                templateUrl:    'views/activitystream.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);