var myApp = angular.module('myApp', []);

myApp.controller('ContactController', ['$scope', function ($scope) {
    $scope.contacts = ["hi@email.com", "hello@email.com"];

    $scope.add = function () {
      $scope.contacts.push($scope.newcontact);
      $scope.newcontact = "";
    };
  }]);

