    //http://www.davidchuschinabistro.com/images/L1.jpg
    //service.getFavoriteDish = function (shortcode) {

    (function () {
    "use strict";

    angular.module('public')
    .service('MyInfoService', MyInfoService);


    MyInfoService.$inject = [];
    function MyInfoService() {
      var service = this;

      service.setInfo = function (userinfo) {
        service.userinfo = userinfo;
      };

      service.getInfo = function() {
        return service.userinfo;
      }
    };

    })();
