//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['ngRoute']);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
	templateUrl: 'templates/add_order.html',
	controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
	templateUrl: 'templates/show_orders.html',
	controller: 'ShowOrdersController'
      }).
      otherwise({
	redirectTo: '/AddNewOrder'
      });
}]);

sampleApp.controller('AddOrderController', ['$scope', function ($scope) {
    $scope.message = 'This is Add new order screen';
  }]);

sampleApp.controller('ShowOrdersController', ['$scope', function ($scope) {
    $scope.message = 'This is Show orders screen';
  }]);

