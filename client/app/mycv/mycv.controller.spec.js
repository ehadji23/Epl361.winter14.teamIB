'use strict';

describe('Controller: MycvCtrl', function () {

  // load the controller's module
  beforeEach(module('cvinApp'));

  var MycvCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MycvCtrl = $controller('MycvCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
