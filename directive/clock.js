app.directive('agClock',function($interval){
    return{
        restrict:'AE',
        template:'{{hours}}:{{minutes}}',
        link:function(scope,element,attr){
            $interval(function(){
            scope.hours=new Date().getHours();
            scope.minutes=new Date().getUTCMinutes();
        },1000)
        } 

    }
})