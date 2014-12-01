'use strict';

angular.module('cvinApp')
  .controller('CreatecvCtrl', function ($scope,$http,$location) {
    $scope.message = 'Hello';
  


$http.get('/api/users/me').success(function(me) {
     $scope.me=me;
     console.log($scope.me.name);
    if (me.cv) {
        $scope.CreateCV=me.cv;
      }
   });


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
        else if (spliced && $scope.CreateCV.educations.length>0) {
          $scope.CreateCV.educations[i].id--;
        }
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
       else if (spliced && $scope.CreateCV.achievment.length>0) {
          $scope.CreateCV.achievment[i].id--;
        }
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
       else if (spliced && $scope.CreateCV.academic.length>0) {
          $scope.CreateCV.academic[i].id--;
        }
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
       else if (spliced && $scope.CreateCV.teaching.length>0) {
          $scope.CreateCV.teaching[i].id--;
        }
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
       else if (spliced && $scope.CreateCV.research.length>0) {
          $scope.CreateCV.research[i].id--;
        }
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
        else if (spliced && $scope.CreateCV.reference.length>0) {
          $scope.CreateCV.reference[i].id--;
        }
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
       else if (spliced && $scope.CreateCV.scientific.length>0) {
          $scope.CreateCV.scientific[i].id--;
        }
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
       else if (spliced && $scope.CreateCV.conferences.length>0) {
          $scope.CreateCV.conferences[i].id--;
        }
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
        else if (spliced && $scope.CreateCV.researchInterest.length>0) {
          $scope.CreateCV.researchInterest[i].id--;
        }
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
        else if (spliced && $scope.CreateCV.languages.length>0) {
          $scope.CreateCV.languages[i].id--;
        }
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
        else if (spliced &&  $scope.CreateCV.scientificActivities.length>0) {
          $scope.CreateCV.scientificActivities[i].id--;
        }
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
        else if (spliced &&  $scope.CreateCV.trainingCourses.length>0) {
          $scope.CreateCV.trainingCourses[i].id--;
        }
      }
    };

   

 $scope.register = function () {
      var data = {
        cv: $scope.CreateCV,

      };
      $http.post('/api/users/cv' , data).success(function () {
        $location.path('/mycv');
      });
    };

    $scope.submit = function () {
      var data = {
        cv: $scope.CreateCV,

      };
      $http.post('/api/users/cv' , data).success(function () {
    
      });
    };


});