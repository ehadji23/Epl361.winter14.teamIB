'use strict';

angular.module('cvinApp')
  .controller('CreatecvCtrl', function ($scope,$http,$location) {
    $scope.message = 'Hello';
   

 $scope.CreateCV={};
  $scope.CreateCV.educations= [];

  $scopeCreateCV.educations.items.push({From:'', To: '', School: ' ',Titlequali:'',grade:''});

    $scope.addEdu = function () {
       $scope.CreateCV.educations.push({From:'', To: '', School: ' ',Titlequali:'',grade:''});
    };

    $scope.removeEdu = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.educations.length; i++){
        if($scope.CreateCV.educations[i].id == item.id) {
          $scope.CreateCV.educations.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.educations[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          From: $scope.CreateCV.educations.From,
          To: $scope.CreateCV.educations.To,
          School: $scope.CreateCV.educations.School,
          Titlequali: $scope.CreateCV.educations.Titlequali,
          grade: $scope.CreateCV.educations.Grade,
        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };



  $scope.CreateCV.achievment= [];

$scope.CreateCV.achievment.push({Year:'', Title: '', Description: ''});

    $scope.addEdu = function () {
       $scope.CreateCV.achievment.push({Year:'', Title: '', Description: ''});
    };

    $scope.removeEdu = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.achievment.length; i++){
        if($scope.CreateCV.achievment[i].id == item.id) {
         $scope.CreateCV.achievment.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.achievment[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          Year: $scope.CreateCV.achievment.Year,
          Title: $scope.CreateCV.achievment.Title,
          Description: $scope.CreateCV.achievment.Description,

        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };



  });