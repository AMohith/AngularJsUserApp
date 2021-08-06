app.controller('OrdersController', ['$scope', '$localStorage','$location', function($scope,$localStorage, $location){
    if($localStorage.id == null){
        $location.path('/signIn')   
    }
    $scope.delete = function() {
        $localStorage.$reset();
        $location.path('/signIn');
     }
}]);