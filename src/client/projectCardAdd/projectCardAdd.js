'use strict';
angular.module('projBoard')
  .directive('projectCardAdd', [
    'cardService',
    function(cardService) {
      return {
        scope: {},
        restrict: 'A',
        templateUrl: '/client/projectCardAdd/projectCardAdd.html',
        replace: true,
        link: function($scope, iElm, iAttrs, controller) {
          $scope.editing = false;
          $scope.projectDef = getBlankCard();

          // when editing is true, the editable project loses height=0
          $scope.startEdit = function() {
            $scope.editing = true;
            //focus project name
          };
          $scope.cancelEdit = function() {
            //completely removes values
            $scope.editing = false;
          };
          $scope.save = function() {
          };

          $scope.toggleEdit = function ($evt) {
            console.log("$evt:",$evt)
            if($scope.editing) {
              $scope.cancelEdit();
            } else {
              $scope.startEdit();
            }
          };

          function getBlankCard() {
            return {
              title: '',
              links: '',
              primaryContact: '',
              resources: '',
              codeMonkeys: '',
              description: ''
            };
          }

        }
      };
    }
  ]);
