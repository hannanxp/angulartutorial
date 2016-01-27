angular.module('myapp', [])
        .controller('Controller', ['$scope', '$http', function ($scope, $http) {
            
            $scope.login = function () {

              var data;

              data = {
                email: $scope.email,
                pwd: $scope.password
              };

              $http.post('server.php', data).then(
                      function (response) {
                        alert("Success!");
                      },
                      function (response) {
                        alert('Failed.')
                      }
              );



            };//login

          }])


        ;