(function(){
    var accountModule=angular.module('accountModule',[]).
    controller('accountController',function($scope,$location,$rootScope){
$scope.vote=0;
for(i in users){ 
        if(users[i].Id==ID){ 

        $scope.accName=users[i].accName;
        $scope.email=users[i].email;
        console.log(ID);
    }
    $scope.Vote=function(){
        $scope.vote=$scope.vote+1;
        if(users[i].Id==ID){
            $scope.votePoints=$scope.vote;
        }
    }
    $scope.Logout=function(){

        $location.path('/');
        $rootScope.isLogged=false;

    }

    }
        
    })
})();