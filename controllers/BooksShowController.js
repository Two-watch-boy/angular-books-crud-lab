angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'http://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function(response){
    vm.book = response.data;
  });

  vm.editBook = function(){
    $http({
      method: 'PUT',
      url: 'http://super-crud.herokuapp.com/books/' + $routeParams.id,
      data:{
        title: vm.book.title,
        author: vm.book.author,
        releaseDate: vm.book.releaseDate,
        image: vm.book.image
      }
    }).then(function(response){
      vm.book = response.data;
      $location.path('/');
    });
  };

  vm.deleteBook = function(){
    $http({
      method: 'DELETE',
      url: 'http://super-crud.herokuapp.com/books/' + $routeParams.id
    })then(function())
  }
}
