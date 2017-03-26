(function () {
"use strict";


angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/my-info/my-info.html',
  bindings: {
    menuItem: '<'
  },
  controller: MyInfoController
});

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath'];
function MyInfoController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}


})();
