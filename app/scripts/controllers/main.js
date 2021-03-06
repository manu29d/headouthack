'use strict';

/**
 * @ngdoc function
 * @name headouthackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the headouthackApp
 */
angular.module('headouthackApp')
  .controller('MainCtrl', function ($interval, User, $rootScope) {
    var self = this;
    self.bgImages = ['images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
    self.bgImage = self.bgImages[0];
    $interval(function () { 
      self.bgImage = self.bgImages[self.bgImages.indexOf(self.bgImage) + 1] || self.bgImages[0];
    }, 10000);
    self.createUser = function () {
      return User.createUser().then(function (response) {
        console.log(response);
        $rootScope.currentUser = response.data;
      });
    }
  });
