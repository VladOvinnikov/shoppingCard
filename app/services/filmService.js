(function(){

   var FilmService = function(){
       var service = {};
       var films = [
           {
               id: 1,
               name: "Ant-Man",
               image: "http://images.apple.com/autopush/us/itunes/charts/movie-rentals/images/2015/12/3e0b51f1142d5dc69a6a29f80d2055f9d863ea10b66d4205bb3edd973345e375_170x170bb.jpg",
               price: 19.99,
               ganres: "Action & Adventure"
           },
           {
               id: 2,
               name: "Minions",
               image: "http://a2.mzstatic.com/us/r30/Video3/v4/33/10/44/33104490-8c85-0ecb-06fb-d06b78a57f8c/poster227x227.jpeg",
               price: 12.99,
               ganres: "Kids & Family"
           },
           {
               id: 3,
               name: "Trainwreck",
               image: "http://images.apple.com/autopush/us/itunes/charts/movie-rentals/images/2015/12/94a541ccb59e0587ce8a0f262200de11f2dc537a7ebc9b3a45263491a9243895_170x170bb.jpg",
               price: 19.99,
               ganres: "Comedy"
           },
           {
               id: 4,
               name: "The Man from U.N.C.L.E.",
               image: "http://images.apple.com/autopush/us/itunes/charts/movie-rentals/images/2015/12/6b272d5d6e5966566c6edc7d6e749a04edddc12a7655f9d16c439122f4fa0e51_170x170bb.jpg",
               price: 19.99,
               ganres: "Action & Adventure"
           },
           {
               id: 5,
               name: "The Transporter Refueled",
               image: "http://images.apple.com/autopush/us/itunes/charts/movie-rentals/images/2015/12/6cfb91c6596c5ed99c8729eb9e5a1582c3fc52a5e56217e7684773fa4ae1339f_170x170bb.jpg",
               price: 19.99,
               ganres: "Action & Adventure"
           },
           {
               id: 6,
               name: "Elf",
               image: "http://images.apple.com/autopush/us/itunes/charts/movie-rentals/images/2015/12/18ea935659adb21bb718ce1679e5c00d1c49c0fffcf6754ed963a8410bcb493f_170x170bb.jpg",
               price: 15.99,
               ganres: "Comedy"
           },
           {
               id: 7,
               name: "Inside Out",
               image: "http://images.apple.com/autopush/us/itunes/charts/movie-rentals/images/2015/12/5902d288564c6827208d1791ab28affc4f56142e6680980ae40a9aa5f948bcd0_170x170bb.jpg",
               price: 12.99,
               ganres: "Kids & Family"
           }
       ];
       service.getFilms = function(){
           return films;
       }
       return service;
    };
    
    angular.module('shop').factory('FilmService', FilmService);
})();