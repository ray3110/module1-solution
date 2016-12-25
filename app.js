(function() {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    var msg = "";
    var separator = ',';
    $scope.foods = "";

      $scope.count = function() {
        var arrayOfFoods = $scope.foods.split(separator);
        $scope.totalCount = arrayOfFoods.length;
        // console.log('The original string is: "' + $scope.foods + '"');
        // console.log('The separator is:"' + separator +'"');
        // console.log('The array has ' + arrayOfFoods.length + ' elements: ' + arrayOfFoods.join(' / '));
        // console.log('Total count ' + $scope.totalCount);
        if (arrayOfFoods[0] == '') {
          msg = "Please enter data first";
          // console.log('Empty : ' + arrayOfFoods[0].length);
        } else {
        if ($scope.totalCount > 3) {
          msg = "Too much!";
        } else {
          msg = "Enjoy!";
        }
      }
        // console.log('Output = ' + msg);
        $scope.msg = msg;
        return $scope.totalCount;
      };
  }

})();
