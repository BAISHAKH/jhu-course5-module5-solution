(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'MyInfoService'];
function SignupController(MenuService, MyInfoService) {
  var $ctrl = this;
  $ctrl.userinfo = {};
  $ctrl.existsFavdish = false;
  $ctrl.saved = false;

  $ctrl.submit = function() {

    console.log("we're in submit()");

      MenuService.getMenuItem($ctrl.userinfo.favdish)
        .then(function(response) {
          $ctrl.existsFavdish = true;
          $ctrl.saved = true;
          MyInfoService.setInfo($ctrl.userinfo);
        })
        .catch(function() {
          console.log("User info: ", $ctrl.userinfo);
          $ctrl.existsFavdish = false;
        });


    }

    $ctrl.validateFavdish = function() {

      console.log("we're in validateFavdish()");

      MenuService.getMenuItem($ctrl.userinfo.favdish)
        .then(function () {
          $ctrl.existsFavdish = true;
        })
        .catch(function() {
          console.log("User info: ", $ctrl.userinfo);
          $ctrl.existsFavdish = false;
        });
    }

  };


})();
