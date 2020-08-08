(function(){
    var settingsModule=angular.module('settingsModule',[]).
    controller('settingsController',function($scope,$location,$rootScope){
        $scope.password='';
        $scope.newPassword='';
        $scope.newConfirmPass='';
        $scope.newEmail='';
        $scope.newConfirmEmail='';
       $scope.ChangePass=function(){ 
        for(i in users){ 
        if(users[i].Id==ID){
            if(users[i].password==$scope.password &&$scope.newPassword==$scope.newConfirmPass){
              
               
              users[i].password=  $scope.newPassword;
              users[i].confirmPass= $scope.newPassword;
              $scope.password='';
        $scope.newPassword='';
        $scope.newConfirmPass='';
        $scope.msg='';
       
                console.log(users);
            }
            else if($scope.newPassword!==$scope.newConfirmPass){
                $scope.msg='The password and the confirmation password must be the same!!!';
            }
          else  if(users[i].password!==$scope.password){
                $scope.msg='password is incorrect!!!'
            }
     

        }
     

    }
    
   
    
    } 
        console.log(user.password);
       $scope.ChangeEmail=function(){
        for(i in users){ 
            if(users[i].Id==ID){
                console.log();
                
                if(users[i].password==$scope.password &&$scope.newEmail==$scope.newConfirmEmail){
                users[i].email=$scope.newEmail;
                $scope.password='';
                $scope.newEmail='';
        $scope.newConfirmEmail='';
        $scope.msgEmail='';
        console.log(users);

                }
                else if(users[i].password!==$scope.password){
                    $scope.msgEmail='password is incorrect!!!';
                }
                else if($scope.newEmail!==$scope.newConfirmEmail){
                    $scope.msgEmail='The email and the confirmation email must be the same!!!';
                }
            }
          


        } 
        
       


       }
       
       
        $scope.Logout=function(){

            $location.path('/');
            $rootScope.isLogged=false;
    
        }

    })
})();