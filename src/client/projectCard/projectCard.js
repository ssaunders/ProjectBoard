'use strict';
angular.module('projBoard')
.directive('projectCard', [function(){
  return {
    scope: {
      projectDef: '='
    },
    restrict: 'A',
    templateUrl: '/client/projectCard/projectCard.html',
    replace: true,
    link: function($scope, iElm, iAttrs, controller) {
      console.log("got a card!", $scope.projectDef);
    }
  };
}]); 