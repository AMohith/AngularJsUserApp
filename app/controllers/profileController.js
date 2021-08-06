app.controller('ProfileController',
    ['$scope', '$http','$location','$localStorage', '$route', '$window', 'staticObjects',
         function($scope, $http, $location,$localStorage,$route , $window, staticObjects){
    
    if($localStorage.id == null){
        $location.path('/signIn')   
    }

    $scope.countries = staticObjects.getCountries();
    $scope.reg =  staticObjects.getRegEx();

    var config = {
            params : { emailAddress : $localStorage.emailAddress,
                password : $localStorage.password        
            }
        }
    $http.get("http://localhost:8080/UserService/webapi/Users",config)
        .success(function(data){
            $scope.user = data; 
        })
        .error(function(){
            $window.alert("Internal Server error \n Redirecting to Home page")
            $location.path('/home')
        });
    
        
        $scope.cancel = function(){
        $location.path('/home')
    }   
    
    $scope.updateUser = function(){
        $http.put("http://localhost:8080/UserService/webapi/Users/user",$scope.user,config)
        .success(function(data,status) {
            $scope.user = data
            if (status ==  200) {
                $window.alert("User Successfully Updated")
                $route.reload();
            }
        })
        .error(function(){
            $window.alert("Internal Server error \n Redirecting to Home page")
            $location.path('/home')
        });
    }

    $scope.delete = function() {
       $localStorage.$reset();
       $location.path('/signIn');
    }

}]);