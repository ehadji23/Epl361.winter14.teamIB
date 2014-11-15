'use strict';

angular.module('cvinApp')
  .controller('CreatecvCtrl', function ($scope) {
    $scope.message = 'Hello';
    console.log("test");
    $scope.user={};
    $scope.user.teachings={};
    $scope.addThing = function() {
      $scope.user.teachings.push({});
      console.log("pushed");
    };
  });