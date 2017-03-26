(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'userinfo'];
function MyInfoController(MenuService, userinfo) {
  var $ctrl = this;

  if (userinfo) {
    $ctrl.userinfo = userinfo;
    MenuService.getMenuItem(userinfo.favdish)
      .then(function(response) {
        $ctrl.menuItem = response;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};

})();
