'use strict';

angular.module('romaleev')
	.config(function($stateProvider) {
	    $stateProvider
	        .state('people', {
				title: 'People',
	            url: '/people',
	            templateUrl: 'app/people/people.html',
	            controller: 'PeopleCtrl',
	            abstract: true,
	            resolve: {
	            	people: function(peopleService){
	            		return peopleService.getPeople();
	            	}
	            }
	        })
			.state('people.list', {
				url: '/list/:filter',
				templateUrl: 'app/people/people.list.html',
			})
			.state('people.grid', {
				url: '/grid/:filter',
				templateUrl: 'app/people/people.grid.html',
			})
	        .state('details', {
				title: 'Details',
	            url: '/id/:personId',
				templateUrl: 'app/people/details.html',
				controller: 'DetailsCtrl',
	            resolve: {
	            	person: function(peopleService, $stateParams){
	            		return peopleService.getPerson($stateParams.personId);
	            	}
	            }
	        });
	})
	.controller('PeopleCtrl', function($scope, people, peopleService) {
		$scope.people = people;
		$scope.peopleService = peopleService;
	})
	.controller('DetailsCtrl', function($scope, person, peopleService) {
		$scope.person = person;
		$scope.peopleService = peopleService;
	});