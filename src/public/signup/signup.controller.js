(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'MyInfoService', 'ApiPath'];
function SignupController(MenuService, MyInfoService, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.userinfo = {};
  $ctrl.existsFavdish = false;
  $ctrl.saved = false;

  $ctrl.submit = function() {

    console.log("we're in submit()");

      MenuService.getMenuItem($ctrl.userinfo.favdish)
        .then(function(response) {
          $ctrl.existsFavdish = true;
          $ctrl.saved = true;
          $ctrl.menuItem = response.data;
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
