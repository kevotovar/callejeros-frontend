'use strict';

describe('Controller: LoginSignupCtrl', function () {

  // load the controller's module
  beforeEach(module('callejeritosAngularApp'));

  var LoginSignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginSignupCtrl = $controller('LoginSignupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginSignupCtrl.awesomeThings.length).toBe(3);
  });
});
