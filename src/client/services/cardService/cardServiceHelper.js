'use strict';
angular.module('projBoard')
.service('cardServiceHelper', function(){
  return {
    convertToClientCard: convert
  };

  function convert(card) {
    return card;
  }
});