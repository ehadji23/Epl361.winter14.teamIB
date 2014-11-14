'use strict';

describe('Controller: CreatecvCtrl', function () {

  // load the controller's module
  beforeEach(module('cvinApp'));

  var CreatecvCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatecvCtrl = $controller('CreatecvCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
