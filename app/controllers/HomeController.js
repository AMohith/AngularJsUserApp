app.controller('HomeController',
            ['$scope', '$http','$location','$localStorage',
                function($scope, $http, $location,$localStorage){

    if($localStorage.id == null){
        $location.path('/signIn')   
    }
    $scope.delete = function() {
       $localStorage.$reset();
       $location.path('/signIn');
    }

}]);