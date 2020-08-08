(function(){ 

    var homeModule=angular.module('HomeModule',[])
    homeModule.controller('homeController',function($scope){

        $scope.arr={
            'Outland':{
               players:555 
            },'Lordareon': {
                players:5000
            },'Icecrown': {
                players:12000
            },'Blackrock': {
                players:300
            },'Frostwolf': {
                players:500
            }
             
        }
        
        $scope.totalPlayers=$scope.arr.Outland.players+$scope.arr.Lordareon.players+
        $scope.arr.Icecrown.players+$scope.arr.Blackrock.players+$scope.arr.Frostwolf.players;
        
        

    })
})();