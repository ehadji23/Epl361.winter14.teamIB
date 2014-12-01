'use strict';

angular.module('cvinApp')
  .controller('MycvCtrl', function ($scope,$http,$location) {
    $scope.message = 'Hello';

    $scope.edit = function () {
      $location.path('/CreateCV');
    };

    $http.get('/api/users/me').success(function(me) {
     $scope.me=me;
     console.log($scope.me.name);
    if (me.cv) {
        $scope.CreateCV=me.cv;
      }
   });

  });




 