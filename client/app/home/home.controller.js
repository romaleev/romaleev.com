'use strict';

angular.module('romaleev')
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: "app/home/home.html"
			});
	})
	.controller('HomeCtrl', function($scope) {
		$scope.contacts =
			[{
				title: "Phone",
				icon: "fa-phone",
				url: "tel:+48536585744"
			}, {
				title: "Skype",
				icon: "fa-skype",
				url: "skype:romaleev"
			}, {
				title: "Email",
				icon: "fa-envelop-o",
				url: "mailto:aromaleev@gmail.com"
			}, {
				title: "Vkontakte",
				icon: "fa-vk",
				url: "http://vk.com/romaleev"
			}, {
				title: "Facebook",
				icon: "fa-facebook",
				url: "http://fb.com/romaleev"
			}, {
				title: "Instagram",
				icon: "fa-instagram",
				url: "http://instagram.com/romaleev"
			}, {
				title: "Linkedin",
				icon: "fa-linkedin",
				url: "http://linkedin/in/romaleev"
			}, {
				title: "StackOverflow",
				icon: "fa-stack-overflow",
				url: "http://stackoverflow.com/users/991818/roman-malieiev"
			}, {
				title: "GitHub",
				icon: "fa-github",
				url: "https://github.com/romaleev"
			}];
});