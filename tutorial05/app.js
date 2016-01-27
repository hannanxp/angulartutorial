angular.module('docsSimpleDirective', [])
        .controller('Controller', ['$scope', function ($scope) {
            $scope.customer = {
              name: 'Naomi',
              address: '1600 Amphitheatre'
            };
          }])
        .directive('myCustomer', function () {
          return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}'
          };
        })
        .directive('myCustomer2', function () {
          return {
            templateUrl: 'my-customer2.html'
          };
        })


;