(function(){
    ListCtrl = function($scope, FilmService){
        console.log("ListCtrl");
        
        $scope.addedFilms = [];
        $scope.ganres = ["Action & Adventure", "Comedy", "Kids & Family"];

        $scope.films = FilmService.getFilms();
        $scope.setChecked = function(ganre, checked){
            
            var sortedFilms = $scope.films;
            var initFilms = FilmService.getFilms();
            
            if(checked){
                if(initFilms.length == sortedFilms.length){
                    sortedFilms = [];
                }
                for(var i in initFilms){
                    if(initFilms[i].ganres == ganre ) 
                        sortedFilms.push(initFilms[i]);
                }
            } else{
                for(var i in sortedFilms){
                    if(sortedFilms[i].ganres == ganre)
                        sortedFilms.splice(i, 3);
                }
            }
        
            if(sortedFilms.length != 0)
                $scope.films = sortedFilms;
             else
                 $scope.films = FilmService.getFilms();
        };   

        $scope.addItemToBacket = function(film){

            var added = $scope.addedFilms;
            added.push(film);
            $scope.addedFilms = added;
        };
        
        $scope.removeFromBasket = function(id, hashKey){
            var added = $scope.addedFilms;
            angular.forEach(added, function(row, index){
                if (row.$$hashKey === hashKey)
                    added.splice(index, 1);
            });
            $scope.addedFilms = added;
        };
    };
    
    var uniqueItems = function (data, key) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    }
    return result;
};
    ListCtrl.$inject = ['$scope','FilmService'];
    
    var app = angular.module('shop');
    
    app.controller('ListCtrl', ListCtrl);
    
    app.filter('unique', function () {
        return function(input, key) {
            var unique = {};
            var uniqueList = [];
            for(var i = 0; i < input.length; i++){
                if(typeof unique[input[i][key]] == "undefined"){
                    unique[input[i][key]] = "";
                    uniqueList.push(input[i]);
                }
            }
            return uniqueList;
        };
    });
    
    app.filter('quantity', function(){
       return function(input, key){
           var q = 0;
           angular.forEach(input, function(row){
               if(row.id == key) 
                   q++;            
           });
           return q;
       } 
    });

    app.filter('totalQuantity', function(){

        return function(input, key1, key2){
           
           var sum = 0;
           function count(id){
               var q = 0;
               angular.forEach(input, function(row){

                   if(row.id == id)
                       q++;
               });
               return q;
           }
           
           angular.forEach(input, function(v, k){

               var id = v.id;
               var price = parseFloat(v[key2]);
               var q = count(v.id);

               if (q > 1)
                   q = q/q;
               
               sum +=  (q * price);
           });
           return sum;
       } 
    });
    
})();