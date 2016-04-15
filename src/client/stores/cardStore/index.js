'use strict';
angular.module('projBoard')
  .service('cardService', [
    '$q',
    '$http',
    function($q, $http) {
      /** Card definition:
        {
          id: 'id'
          dateCreated: 'date',
          title: 'string'
          primaryContact: 'id'
          languages: ['id',...]
          frameworks: ['id',...]
          codeMonkeys: ['id',...]
          description: 'string'
          //links: { }
          //userCanEdit: bool
        }

      */

      return {
        add: addCard,
        get: getCard,
        getAll: getAllCards,
        update: updateCard,
        delete: deleteCard
      };

      function addCard(project) {
        return $http.post('/projects/', {
            project: project
          })
          .then(function(res) {
            return res.data;
          });

      }

      function getCard(id) {
        // support getting mult ids
        // if (typeof cardIds === 'number') {
        //   cardIds = [cardIds];
        // }
        return $http.get('/projects/' + id)
          .then(function(res) {
            return res.data;
          });

      }

      function getAllCards() {
        return $http.get('/projects/')
          .then(function(res) {
            console.log("arguments:", arguments)
            return res.data;
          });
      }

      function updateCard(project) {
        return $http.put('/projects/', {
            project: project
          })
          .then(function(res) {
            return res.data;
          });

      }

      function deleteCard(id) {
        return $http.delete('/projects/' + id)
          .then(function(res) {
            return res.data;
          });

      }
    }
  ]);