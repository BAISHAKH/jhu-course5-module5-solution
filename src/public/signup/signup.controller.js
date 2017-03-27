(function () {
    "use strict";

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['MyInfoService', 'MenuService'];
    function SignupController(MyInfoService, MenuService) {
        var ctrl = this;
        ctrl.userInfo = {};
        ctrl.saved = false;
        ctrl.message = '';
        ctrl.validShortCode = false;
        ctrl.itemSearched = false;

        console.log('SignupController instantiated');

        ctrl.setMyinfo = function() {
            console.log('SignupController.setMyinfo()');
            MyInfoService.setMyinfo(ctrl.userInfo);

            ctrl.saved = true;
            ctrl.message = 'Your information has been saved!';
        };

        ctrl.validateFavdish = function() {
            ctrl.validShortCode = false;
            ctrl.itemSearched = false;
            console.log('in SignupController.validateFavdish():', ctrl.userInfo);

            if(typeof ctrl.userInfo.favoriteDish === 'undefined') return;
            if(ctrl.userInfo.favoriteDish.trim().length <= 0) return;

            MenuService.getMenuItem(ctrl.userInfo.favoriteDish).then(
                function(response) {
                    console.log('SignupController.validateFavdish() - Success:', response.data);
                    ctrl.userInfo.MenuItem = response.data;
                    ctrl.validShortCode = true;
                    ctrl.itemSearched = true;
                },
                function(response) {
                    console.log('SignupController.validateFavdish() - Failed:', response.data);
                    ctrl.itemSearched = true;
                }
            );
        };


    }
})();
