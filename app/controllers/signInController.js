app.controller('SignInController',
            ['$scope', '$http','$location','$localStorage', 
                function($scope, $http, $location,$localStorage){

    $scope.signupRouter = function() {
        $location.path('/signup')
    }

    $scope.signInUser = function(){
        var config = {
            params : { emailAddress : $scope.user.emailAddress,
                password : $scope.user.password        
            }
        }
        $http.get("http://localhost:8080/UserService/webapi/Users",config)
        .success(function(data, status){
            $scope.user = data;
            $scope.status = status;
            if ($scope.user != "" && $scope.status == 200) {
                console.log($scope.user);
                $localStorage.id = $scope.user.id;
                $localStorage.emailAddress = $scope.user.emailAddress;
                $localStorage.password = $scope.user.password;
                $location.path('/home');

            }else if($scope.status == 204) {
                console.log("User Not found in database")
                $scope.errorMessage = "Incorrect email-id or password"
            }
        })
        .error(function(data) {
            $scope.errorMessage = "Internal Server Error. Try again soon..."
        });
        
    }
    
}]);