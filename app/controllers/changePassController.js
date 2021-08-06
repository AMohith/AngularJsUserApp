app.controller('ChangePassController',
            ['$scope', '$http','$location','$localStorage', '$window', '$route',
                function($scope, $http, $location,$localStorage, $window, $route){
                
                if($localStorage.id == null){
                    $location.path('/signIn')   
                } 

                var config = {
                    params : { emailAddress : $localStorage.emailAddress,
                        password : $localStorage.password        
                    }
                }
                
                $scope.change = function(){
                    if($scope.currentPassword != $localStorage.password){
                        $scope.errorMessageCurrentPass = "Sorry, Wrong password."
                    }else{
                        $scope.errorMessageCurrentPass = null;
                        $http.get("http://localhost:8080/UserService/webapi/Users",config)
                        .success(function(data,status){
                            if(status == 200){
                                $scope.user = data;
                                $scope.user.password = $scope.newPassword; 
                                $http.put("http://localhost:8080/UserService/webapi/Users/user",$scope.user,config)
                                    .success(function(data,status) {
                                        if (status ==  200) {
                                            $localStorage.password = $scope.newPassword;
                                            $window.alert("Password Successfully Updated")
                                            $route.reload();
                                        }
                                    });
                            }
                        })
                        .error(function(){
                            $window.alert("Internal Server error \n Redirecting to Home page")
                            $location.path('/home')
                        });
                        
                    } 
                }

                $scope.cancel = function(){
                    $location.path('/home')
                }

                $scope.delete = function() {
                    $localStorage.$reset();
                    $location.path('/signIn');
                    }
}]);                    