'use strict';
angular.module('projBoard')
  .service('cardService', [
    'pgDataService',
    'cardServiceHelper',
    function(pgDataSvc, helper) {
    var cardStore = [{
      id: 'flkaw4h5tj5nhy4k54',
      name: 'Proj 1'
    },{
      id: '2poj354moi43j6kj45',
      name: 'Proj 2'
    },{
      id: 'lkj78lk5jdf4098whg',
      name: 'Proj 3'
    }];

    return {
      add: addCard,
      get: getCard,
      getAll: getAllCards,
      update: updateCard,
      delete: deleteCard
    };

    function addCard(cardId, card) {
      // return pgDataSvc.add(card)
      // .then(function (newCard) {
      //    cardList.push(newCard); //is it better to just get everything every time? how likely can things get out of sync?
      // })

      return getStore()
      .then(function(cardsList){
        cardsList.push(card);
        return card;
      });

    }

    function getCard(cardId) {
      // support getting mult ids
      // if (typeof cardIds === 'number') {
      //   cardIds = [cardIds];
      // }

      return getStore()
      .then(function(cardList) {
        return _.find(cardList, {id: cardId});
      });

    }

    function getAllCards() {
      return getStore();
    }

    function updateCard(newCardObj) {
      // return pgDataSvc.addCard(card)
      // .then(function(newCard){
        // var idx = _.findIndex(cardList, {id: newCardObj.id});
        // cardList[idx] = newCardObj;
        // return newCardObj;
      // });

      return getStore()
      .then(function(cardList) {
        var idx = _.findIndex(cardList, {id: newCardObj.id});
        cardList[idx] = newCardObj;
        return newCardObj;
      });

    }

    function deleteCard(cardId) {
      // return pgDataSvc.deleteCard(cardId);

      return getStore()
      .then(function(cardList) {
        var idx = _.findIndex(cardList, {id: cardId});
        cardList.splice(idx,1);
      });
    }

    function getStore() {
      if (cardStore) {
        return Promise.resolve(cardStore);
      } else {
        // return pgDataSvc.getAllCards()
        // .catch(function() {console.log("Failed to get card list")})
      }
    }

  }]);