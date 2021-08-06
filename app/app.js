var app =  angular.module('AngularUserApp',['ngStorage','ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/signIn',{
        templateUrl: 'view/signIn.html',
        controller: 'SignInController'
    })
    .when('/signup',{
        templateUrl : 'view/signup.html',
        controller : 'SignupController'
    })
    .when('/home',{
        templateUrl: 'view/home.html',
        controller: 'HomeController'
    })
    .when('/profile',{
        templateUrl: 'view/profile.html',
        controller: 'ProfileController'
    })
    .when('/products',{
        templateUrl: 'view/products.html',
        controller: 'ProductsController'
    })
    .when('/orders',{
        templateUrl: 'view/orders.html',
        controller: 'OrdersController'
    })
    .when('/changePassword',{
        templateUrl: 'view/changePassword.html',
        controller: 'ChangePassController'
    })
    .otherwise({
        redirectTo: '/signIn'
    });
}]);


app.directive("compareTo", function ()  
{  
    return {  
        require: "ngModel",  
        scope:  
        {  
            confirmPassword: "=compareTo"  
        },  
        link: function (scope, element, attributes, modelVal)  
        {  
            modelVal.$validators.compareTo = function (val) {  
                return val == scope.confirmPassword;  
            };  
            scope.$watch("confirmPassword", function () {  
                modelVal.$validate();  
            });  
        }  
    };  
});  
