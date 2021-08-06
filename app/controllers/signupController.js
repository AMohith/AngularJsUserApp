app.controller('SignupController',
            ['$scope', '$http','$location','$window','staticObjects', function($scope, $http, $location,$window, staticObjects){
    
    $scope.countries = staticObjects.getCountries();
    $scope.reg = staticObjects.getRegEx();

    $scope.reset = function(){
        $scope.user = null;
    }
    $scope.signupUser = function(){
        console.log($scope.user)
        $http.post("http://localhost:8080/UserService/webapi/Users/user",$scope.user)
        .success(function(data,status) {
            console.log(data);
            console.log(status);
            if(status == 200){
                $window.alert("User Successfully Registered")
                $location.path('/signIn');
            }else if (status == 204){
                $window.alert("User Already Exists");
                $location.path('/signup')
            }
        })
        .error(function(data){
            $window.alert("Internal Server error: User not Registered \n Try again soon...")
            $location.path('/signIn');
        });
    }
    
}]);