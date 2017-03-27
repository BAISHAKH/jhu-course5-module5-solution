(function () {
    "use strict";

    angular.module('common')
    .service('MyInfoService', MyInfoService);

    MyInfoService.$inject = [];
    function MyInfoService() {
        var service = this;
        service.userInfo = {};

        service.setUserinfo = function(userInfo) {
            service.userInfo = userInfo;
            console.log('MyInfoService.registerUser() - userInfo:', service.userInfo);
        };

        service.getUserinfo = function () {
            return service.userInfo;
        };
    }
})();
