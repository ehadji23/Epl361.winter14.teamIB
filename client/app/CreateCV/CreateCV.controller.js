'use strict';

angular.module('cvinApp')
  .controller('CreatecvCtrl', function ($scope) {
    $scope.message = 'Hello';
   

 $scope.user = [];
 $scope.user.cv=[];
  $scope.user.CreateCV.educations.items = [];

  $scope.user.CreateCV.educations.items.push({From:'', To: '', School: ' ',Titlequali:'',grade:''});

    $scope.addEdu = function () {
       $scope.user.CreateCV.educations.items.push({From:'', To: '', School: ' ',Titlequali:'',grade:''});
    };

    $scope.removeEdu = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.user.CreateCV.educations.items.length; i++){
        if($scope.user.CreateCV.educations.items[i].id == item.id) {
          $scope.user.CreateCV.educations.items.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.user.CreateCV.educations.items[i].id--;
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