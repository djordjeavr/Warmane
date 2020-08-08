var ID='';


(function(){

    var loginModule=angular.module('loginModule',[]).
    controller('loginController',function($scope,$location,$rootScope){
        $scope.accountName='';
        $scope.password='';

        $scope.Login=function(){
            for(i in users){
               
                    
                if(users[i].accName==$scope.accountName&& users[i].password==$scope.password){
                   $location.path('/account');
                    $scope.accountName='';
                    $scope.password='';
                    $scope.msg='';
                    $rootScope.isLogged=true;
                   ID=users[i].Id;
                   

                    
                }
                else{
                    $scope.msg='accountname or password is incorrect'
                    $rootScope.isLogged=true;
                }
            }
        
    }

    })
})();