'use strict';

angular.module('cvinApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('CreateCV', {
        url: '/CreateCV',
        templateUrl: 'app/CreateCV/CreateCV.html',
        controller: 'CreatecvCtrl'
      });
  });