
var uId=0;
var users=[];


(function(){
   

    var createAcc=angular.module('createAccModule',[])
    createAcc.controller('createAccController',function($scope,saveService){
        
        $scope.user={
                   
            accName:'',
            password:'',
            confirmPass:'',
            email:'',
            forumName:'',
            
        }
            
            $scope.Save=function(){
               
                   
                if($scope.user.accName!==""&& $scope.user.password!=="" && $scope.user.confirmPass!==""  && $scope.user.email!==''&& $scope.user.forumName!==''
                ){
                   
                    uId=uId+1;
                    $scope. user.Id= uId;
                    user=$scope.user;
                 users.push( $scope.user);
                 $scope.user= $scope.user={
                   
                    accName:'',
                    password:'',
                    confirmPass:'',
                    email:'',
                    forumName:'',
                    
                };
                 $scope.msg='';
             console.log( users); 
            
             
           
    }
    else if( $scope.user.password!==$scope.user.confirmPass ){
        $scope.msg='The password and the confirmation password must be the same';
    }
    

    else {
        $scope.msg='All fields must be filled in'
    }
    
   
  
   
       
         }

    })
})();