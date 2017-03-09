var myapp = angular.module("app",['angular-md5']);



myapp.controller('Registe',function($scope){


    //var apiroot = "http://192.168.1.11/kuafu/diana/"
    var GetQueryString = function(name){
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if(r!=null)return  unescape(r[2]); return null;
    };
    var index = GetQueryString('index');
    $scope.index = index;
    var items_0 = ['img/gc1.png','img/gc2.png','img/gc3.png','img/gc4.png'];
    var items_1 = ['img/ly1.png','img/ly2.png'];
    var items_2 = ['img/sx1.png','img/sx2.png','img/sx3.png','img/sx4.png','img/sx5.png'];
    var items_3 = [];





    if(index == 0){
      $scope.items = items_0;
    }else if(index == 1){
      $scope.items = items_1;
    }else if(index == 2){
      $scope.items = items_2;
    }else if(index == 3){
      $scope.items = items_3;
    }


})
