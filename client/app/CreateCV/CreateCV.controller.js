'use strict';

angular.module('cvinApp')
  .controller('CreatecvCtrl', function ($scope,$http,$location) {
    $scope.message = 'Hello';
   

 $scope.CreateCV={};

  $scope.CreateCV.educations= [];

  $scope.CreateCV.educations.push({From:'', To: '', School: '',Titlequali:'',grade:'', id: $scope.CreateCV.educations.length});

    $scope.addEdu = function () {
       $scope.CreateCV.educations.push({From:'', To: '', School: '',Titlequali:'',grade:'', id: $scope.CreateCV.educations.length});
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
          Grade: $scope.CreateCV.educations.Grade,
        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };



  $scope.CreateCV.achievment= [];

$scope.CreateCV.achievment.push({Year:'', Title: '', Description: '', id: $scope.CreateCV.achievment.length});

    $scope.addAch = function () {
       $scope.CreateCV.achievment.push({Year:'', Title: '', Description: '', id: $scope.CreateCV.achievment.length});
    };

    $scope.removeAch = function(item){
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

$scope.CreateCV.academic= [];

$scope.CreateCV.academic.push({From:'', To: '', Title: '', id: $scope.CreateCV.academic.length});

    $scope.addAcad = function () {
       $scope.CreateCV.academic.push({From:'', To: '', Title: '', id: $scope.CreateCV.academic.length});
    };

    $scope.removeAcad = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.academic.length; i++){
        if($scope.CreateCV.academic[i].id == item.id) {
         $scope.CreateCV.academic.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.academic[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          From: $scope.CreateCV.academic.From,
          To: $scope.CreateCV.academic.To,
          Title: $scope.CreateCV.academic.Title,

        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };

    $scope.CreateCV.teaching= [];

$scope.CreateCV.teaching.push({From:'', To: '', School: '', Title: '', id: $scope.CreateCV.teaching.length});

    $scope.addTeaching = function () {
       $scope.CreateCV.teaching.push({From:'', To: '', School: '', Title: '', id: $scope.CreateCV.teaching.length});
    };

    $scope.removeTeaching = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.teaching.length; i++){
        if($scope.CreateCV.teaching[i].id == item.id) {
         $scope.CreateCV.teaching.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.teaching[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          From: $scope.CreateCV.teaching.From,
          To: $scope.CreateCV.teaching.To,
          School: $scope.CreateCV.teaching.School,
          Title: $scope.CreateCV.teaching.Title,

        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };

    $scope.CreateCV.research= [];

$scope.CreateCV.research.push({From:'', To: '', School: '', Title: '', id: $scope.CreateCV.research.length});

    $scope.addResearch = function () {
       $scope.CreateCV.research.push({From:'', To: '', School: '', Title: '', id: $scope.CreateCV.research.length});
    };

    $scope.removeResearch = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.research.length; i++){
        if($scope.CreateCV.research[i].id == item.id) {
         $scope.CreateCV.research.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.research[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          From: $scope.CreateCV.research.From,
          To: $scope.CreateCV.research.To,
          School: $scope.CreateCV.research.School,
          Title: $scope.CreateCV.research.Title,

        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };

$scope.CreateCV.reference= [];

$scope.CreateCV.reference.push({FirstName:'', LastName: '', PhoneNumber: '', Email: '', id: $scope.CreateCV.reference.length});

    $scope.addReference = function () {
       $scope.CreateCV.reference.push({FirstName:'', LastName: '', PhoneNumber: '', Email: '', id: $scope.CreateCV.reference.length});
    };

    $scope.removeReference = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.reference.length; i++){
        if($scope.CreateCV.reference[i].id == item.id) {
         $scope.CreateCV.reference.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.reference[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          FirstName: $scope.CreateCV.reference.FirstName,
          LastName: $scope.CreateCV.reference.LastName,
          PhoneNumber: $scope.CreateCV.reference.PhoneNumber,
          Email: $scope.CreateCV.reference.Email,

        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };

$scope.CreateCV.scientific= [];

$scope.CreateCV.scientific.push({MagazineName:'', ArticleName: '', Edition: '', Year: '', id: $scope.CreateCV.scientific.length});

    $scope.addScientific = function () {
       $scope.CreateCV.scientific.push({MagazineName:'', ArticleName: '', Edition: '', Year: '', id: $scope.CreateCV.scientific.length});
    };

    $scope.removeScientific = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.scientific.length; i++){
        if($scope.CreateCV.scientific[i].id == item.id) {
         $scope.CreateCV.scientific.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.scientific[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          MagazineName: $scope.CreateCV.scientific.MagazineName,
          ArticleName: $scope.CreateCV.scientific.ArticleName,
          Edition: $scope.CreateCV.scientific.Edition,
          Year: $scope.CreateCV.scientific.Year,

        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };


     $scope.CreateCV.conferences= [];

$scope.CreateCV.conferences.push({ConfName:'', Year: '', Locations: '', id: $scope.CreateCV.conferences.length});

    $scope.addConferences = function () {
       $scope.CreateCV.conferences.push({ConfName:'', Year: '', Locations: '', id: $scope.CreateCV.conferences.length});
    };

    $scope.removeConferences = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.conferences.length; i++){
        if($scope.CreateCV.conferences[i].id == item.id) {
         $scope.CreateCV.conferences.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.conferences[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          ConfName: $scope.CreateCV.conferences.ConfName,
          Year: $scope.CreateCV.conferences.Year,
          Locations: $scope.CreateCV.conferences.Locations,
        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };
   
   $scope.CreateCV.researchInterest= [];

  $scope.CreateCV.researchInterest.push({Sector:'',Comments: '', id: $scope.CreateCV.researchInterest.length});

    $scope.addResearchInterest= function () {
       $scope.CreateCV.researchInterest.push({Sector:'',Comments: '', id: $scope.CreateCV.researchInterest.length});
    };

    $scope.removeResearchInterest = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.researchInterest.length; i++){
        if($scope.CreateCV.researchInterest[i].id == item.id) {
         $scope.CreateCV.researchInterest.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.researchInterest[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          Sector: $scope.CreateCV.researchInterest.Sector,
          Comments: $scope.CreateCV.researchInterest.Comments,

        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };


   $scope.CreateCV.languages= [];

  $scope.CreateCV.languages.push({languages:'',level: '', id: $scope.CreateCV.languages.length});

    $scope.addLanguages= function () {
       $scope.CreateCV.languages.push({languages:'',level: '', id: $scope.CreateCV.languages.length});
    };

    $scope.removeLanguages = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.languages.length; i++){
        if($scope.CreateCV.languages[i].id == item.id) {
         $scope.CreateCV.languages.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.languages[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          languages: $scope.CreateCV.languages.languages,
          level: $scope.CreateCV.languages.level,

        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };


    $scope.CreateCV.scientificActivities= [];

  $scope.CreateCV.scientificActivities.push({Description:'', id: $scope.CreateCV.scientificActivities.length});

    $scope.addScientificActivities= function () {
       $scope.CreateCV.scientificActivities.push({Description:'',level: '', id: $scope.CreateCV.scientificActivities.length});
    };

    $scope.removeScientificActivities = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.scientificActivities.length; i++){
        if($scope.CreateCV.scientificActivities[i].id == item.id) {
         $scope.CreateCV.scientificActivities.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.scientificActivities[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          Description: $scope.CreateCV.scientificActivities.Description,
         
        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };


    $scope.CreateCV.trainingCourses= [];

  $scope.CreateCV.trainingCourses.push({NameSeminar:'', Year: '' , id: $scope.CreateCV.trainingCourses.length});

    $scope.addTrainingCourses= function () {
       $scope.CreateCV.trainingCourses.push({NameSeminar:'',Year: '', id: $scope.CreateCV.trainingCourses.length});
    };

    $scope.removeTrainingCourses = function(item){
      var spliced = false;
      for(var i = 0; i < $scope.CreateCV.trainingCourses.length; i++){
        if($scope.CreateCV.trainingCourses[i].id == item.id) {
         $scope.CreateCV.trainingCourses.splice(i, 1);
          spliced=true;
        }
        if (spliced) {
          $scope.CreateCV.trainingCourses[i].id--;
        }
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        var data = {
          NameSeminar: $scope.CreateCV.trainingCourses.NameSeminar,
          Year: $scope.CreateCV.trainingCourses.Year,
        };
        $http.post('/api/CreateCV/' , data).success(function () {
            //$location.path('/');
        });
      }
    };
  });