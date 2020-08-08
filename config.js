app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        resolve:{
            check:function($location,$rootScope){
                if($rootScope.isLogged){
                    $location.path('/account');
                }
           

            }
        },
        templateUrl:'home/home.html',
        controller:'homeController'
    })
    .when('/createAccount',{
        templateUrl:'CreateAccount/createAccount.html',
        controller:'createAccController'
    })
    .when('/download',{
        templateUrl:'Download/download.html',
        controller:'downloadController'
    })
    .when('/information',{
        templateUrl:'information/information.html'
    })
    .when('/login',{
        templateUrl:'login/login.html',
        controller:'loginController'
    })
    .when('/devlog',{
        templateUrl:'home/devlog.html',
        controller:'homeController'
    })
    .when('/terms',{
        templateUrl:'policy/terms of service.html'
    })
    .when('/privacy',{
        templateUrl:'policy/privacy policy.html'
    })
    .when('/refund',{
        templateUrl:'policy/refund policy.html'
    })
    .when('/retrieve account',{
        templateUrl:'retrieveAccount/retrieveAccount.html',
        controller:'retrieveAccController'
    })
    .when('/account',{
        resolve:{
            check:function($location,$rootScope){
                if(!$rootScope.isLogged){
                    $location.path('/');
                }
           

            }
        },
        templateUrl:'account/account.html',
        controller:'accountController'
       
    })
    .when('/settings',{
        resolve:{
            check:function($location,$rootScope){
                if(!$rootScope.isLogged){
                    $location.path('/');
                }
           

            }
        },
        templateUrl:'account/settings/settings.html',
        controller:'settingsController'
       
    })
    .when('/armory',{
        templateUrl:'armory/armory.html',
        controller:'armoryController'
    })
    .when('/forum',{
        
        templateUrl:'forum/forum.html',
        controller:'forumController'
    })
    .when('/post',{
        templateUrl:'forum/postbody.html',
        controller:'forumController'
    })



    .otherwise({
        redirectTo:'/'
    })
})