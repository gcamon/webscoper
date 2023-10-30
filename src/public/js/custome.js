var app = angular.module('myApp',[])

app.controller('recipeCtrl',function($scope,$rootScope,$http){
    $scope.getRecipe = function(name,cal,price,photoURL) {
        $rootScope.recipeInfo = {
            name: name,
            cal: cal,
            price: price,
            photoURL: photoURL
        }

        $http.get("http://apilayer.net/api/live?access_key=e130814a8c7ecd1b221b4a2fa9b0e343&source=USD&currencies=NGN")
        .then(function(response){
            $rootScope.rate = response.data.quotes.USDNGN || 0;
        })
        $rootScope.isUSD = false;

        $('#recipeModal').modal({
            show: true
        }); 
    }

    $rootScope.convert = function() {
        $rootScope.isUSD = !$scope.isUSD;     
        $rootScope.toUSD = (parseInt($rootScope.recipeInfo.price) / $rootScope.rate).toFixed(2)
    }

});

app.controller("resturantCtrl", function($scope,$http,$timeout){
   $timeout(function() {
      $scope.userCity = window.userCity
      loadResturants($scope.userCity)
   }, 2000)

   $scope.viewAll = function() {
     loadResturants()
   }

   function loadResturants(city) {
    $http.get(`/api/resturants?city=${city}`)
    .then(function(response){
       $scope.resturants = response.data
    })
   }
})

app.controller("userCtrl", function($scope,$window){
    $scope.getUser = function(name) {
        var url = `/user/${name}`
        $window.location.href = url;
    }
})



