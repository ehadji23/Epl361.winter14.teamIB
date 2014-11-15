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


    
 $scope.CV = {};
    $scope.offer.items = [];
    $scope.offer.items.push({name:'', price: '', id: $scope.offer.items.length});

    $scope.addFields = function () {
       $scope.offer.items.push({name: '', price: '', id: $scope.offer.items.length});
    };

    $scope.removeItem = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.offer.items.length; i++){
        if($scope.offer.items[i].id == item.id) {
          $scope.offer.items.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.offer.items[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          name: $scope.offer.name,
          info: $scope.offer.info,
          items: $scope.offer.items,
        };
        $http.post('/api/offers/' , data).success(function () {
            //$location.path('/');
        });
      }
    }; 
  });