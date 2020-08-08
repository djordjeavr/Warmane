var arr=[{
    forumName:'Proterean',
     img:'https://i1.wp.com/v7gaming.com/wp-content/uploads/2018/09/warmane-outland-background.jpg?fit=550%2C550&ssl=1',
     title: 'ipsum dolor sit amet, consectetur adipiscing elit.',
     date:'August 6, 2019',
  content:'Suspendisse nec leo vel purus fringilla eleifend eu a mauris. Sed vestibulum cursus velit ac egestas. Aliquam id vulputate leo, eu finibus urna. Cras ornare hendrerit libero, ut ullamcorper ex tempus eu. Aenean eros ipsum, ultricies sit amet condimentum eget, sagittis non erat. Sed laoreet mi sit amet nisi lobortis, quis vehicula nisi tempor. Mauris sed nisi ex. Donec id nibh nec magna consectetur viverra. Nunc pellentesque felis quis odio sagittis aliquam. Morbi sit amet imperdiet lectus.' ,
 openThisPost:false,
  userForumDocuments:[ 
    
 ]

 },
 {
    forumName:'Proterean',
     img:'https://i1.wp.com/v7gaming.com/wp-content/uploads/2018/09/warmane-outland-background.jpg?fit=550%2C550&ssl=1',
     title: 'ipsum dolor sit amet, ',
     date:'June 30, 2019',
  content:'Suspendisse nec leo vel purus fringilla eleifend eu a mauris. Sed vestibulum cursus velit ac egestas. Aliquam id vulputate leo, eu finibus urna. Cras ornare hendrerit libero, ut ullamcorper ex tempus eu. Aenean eros ipsum, ultricies sit amet condimentum eget, sagittis non erat. Sed laoreet mi sit amet nisi lobortis, quis vehicula nisi tempor. Mauris sed nisi ex. Donec id nibh nec magna consectetur viverra. Nunc pellentesque felis quis odio sagittis aliquam. Morbi sit amet imperdiet lectus.' ,
  openThisPost:false,
  userForumDocuments:[ 
    
 ]


 },
 {
    forumName:'Proterean',
     img:'https://i1.wp.com/v7gaming.com/wp-content/uploads/2018/09/warmane-outland-background.jpg?fit=550%2C550&ssl=1',
     title: 'Suspendisse nec leo vel purus fringilla eleifend eu a mauris. ',
     date:'April 11, 2019',
  content:'Suspendisse nec leo vel purus fringilla eleifend eu a mauris. Sed vestibulum cursus velit ac egestas. Aliquam id vulputate leo, eu finibus urna. Cras ornare hendrerit libero, ut ullamcorper ex tempus eu. Aenean eros ipsum, ultricies sit amet condimentum eget, sagittis non erat. Sed laoreet mi sit amet nisi lobortis, quis vehicula nisi tempor. Mauris sed nisi ex. Donec id nibh nec magna consectetur viverra. Nunc pellentesque felis quis odio sagittis aliquam. Morbi sit amet imperdiet lectus.' ,
  openThisPost:false,
  userForumDocuments:[ 
    
 ]


 },
 {
    forumName:'Proterean',
     img:'https://i1.wp.com/v7gaming.com/wp-content/uploads/2018/09/warmane-outland-background.jpg?fit=550%2C550&ssl=1',
     title: 'Suspendisse nec leo vel  ',
     date:'February 26, 2019',
  content:'Suspendisse nec leo vel purus fringilla eleifend eu a mauris. Sed vestibulum cursus velit ac egestas. Aliquam id vulputate leo, eu finibus urna. Cras ornare hendrerit libero, ut ullamcorper ex tempus eu. Aenean eros ipsum, ultricies sit amet condimentum eget, sagittis non erat. Sed laoreet mi sit amet nisi lobortis, quis vehicula nisi tempor. Mauris sed nisi ex. Donec id nibh nec magna consectetur viverra. Nunc pellentesque felis quis odio sagittis aliquam. Morbi sit amet imperdiet lectus.' ,
  openThisPost:false,
  userForumDocuments:[ 
    
 ]


 },
 {
    forumName:'Proterean',
     img:'https://i1.wp.com/v7gaming.com/wp-content/uploads/2018/09/warmane-outland-background.jpg?fit=550%2C550&ssl=1',
     title: 'fringilla eleifend eu a mauris  ',
     date:'January 24, 2019',
  content:'Suspendisse nec leo vel purus fringilla eleifend eu a mauris. Sed vestibulum cursus velit ac egestas. Aliquam id vulputate leo, eu finibus urna. Cras ornare hendrerit libero, ut ullamcorper ex tempus eu. Aenean eros ipsum, ultricies sit amet condimentum eget, sagittis non erat. Sed laoreet mi sit amet nisi lobortis, quis vehicula nisi tempor. Mauris sed nisi ex. Donec id nibh nec magna consectetur viverra. Nunc pellentesque felis quis odio sagittis aliquam. Morbi sit amet imperdiet lectus.' ,
  openThisPost:false,
  userForumDocuments:[ 
    
 ]


 }
 
];

(function(){
var forumModule=angular.module('forumModule',[]).
controller('forumController',function($scope){
    
   
   
    $scope.arr=arr;
  
  
    $scope.userObj={
        forumName:'',
        img:"https://a.allegroimg.com/original/1e5caa/ad3de1a048698faf6e6574bcf410",
        newReplay:'',
  
    }
    $scope.Click=function(){
        console.log(i);
        
    }

    $scope.newReplay=function(){
        $scope.Replay=true;
        
        
    }

    $scope.Cancel=function(){
        $scope.Replay=false;
    }
    $scope.Post=function(index){
        
        for(i in users){
            if(users[i].Id==ID){
                console.log( index);
                
                $scope.userObj.forumName=users[i].forumName;
                index.userForumDocuments.push( $scope.userObj);
        
                
                $scope.userObj={
                    forumName:'',
                    img:"https://a.allegroimg.com/original/1e5caa/ad3de1a048698faf6e6574bcf410",
                    newReplay:'',
                    
                }
            
               
            }
        }
    
   
      
    }
    
   $scope.Openpost=function(index){
       for(i in $scope.arr){ 
    $scope.arr[i].openThisPost=false;
}
    console.log( $scope.arr.openThisPost);
    
       if(index.openThisPost==false){ 
    index.openThisPost=true;
}

      console.log( index.openThisPost);
       
   }
   
    console.log( $scope.arr);
  
    
    

})
})()