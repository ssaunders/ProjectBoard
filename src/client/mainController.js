'use strict';
angular.module('projBoard')
.controller('mainController', [
  '$scope',
  'cardService',
  function($scope, cardSvc) {
    console.log("cardSvc:",cardSvc)
    cardSvc.getAll()
      .then(function (cardList) {
        $scope.cardList = cardList;
      });
    console.log("got into controller");
  }
]);