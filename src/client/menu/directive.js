'use strict';
angular.module('projBoard')
.directive('menuBar', function(){
	return {
		scope: {},
		restrict: 'A',
		templateUrl: '/client/menu/template.html',
		replace: true,
		link: function($scope, elem, attrs) {
		}
	};
});