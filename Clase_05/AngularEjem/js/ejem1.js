var app1 = angular.module('app1', []);

app1.controller('gListCtrl', function($scope) {

  $scope.groceries= [
    {item: "Tomates", purchased: false},
    {item: "Papas", purchased: false},
    {item: "Pan", purchased: false},
    {item: "Humus", purchased: false}
  ];

  // Receives the new item entered in the input box and puts
  // it on the end of the array
  $scope.addItem = function(newItem) {

    // Check that the input box has a value
    if(!(newItem === undefined || newItem === "")){
      $scope.groceries.push({
        item: newItem, purchased: false
      });
      $scope.missingNewItemError = "";
    } else {

      // Show an error if no item was entered
      $scope.missingNewItemError = "Por favor ingrese un producto";
    }
  };
});

app1.controller('userCtrl', function($scope) {

  $scope.user= [{
    fName: "Exequiel",
    lName: "Fuentes",
    street: "Avenida Angamos 0610",
    subscribe: "Subscribe",
    delivery: "Email"
  }];

  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, street: userInfo.street, subscribe: userInfo.subscribe, delivery: userInfo.delivery
      });
      console.log('User guardado');
    } else {
      console.log('Error: no puede guardar usuario');
    }
 }

});
