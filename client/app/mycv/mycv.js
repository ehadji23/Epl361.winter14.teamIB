'use strict';

angular.module('cvinApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mycv', {
        url: '/mycv',
        templateUrl: 'app/mycv/mycv.html',
        controller: 'MycvCtrl'
      });
  });