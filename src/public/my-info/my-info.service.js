(function () {
"use strict";

angular.module('public')
.service('MyinfoService', MyinfoService);


MyinfoService.$inject = ['$http', 'ApiPath'];
function MyinfoService($http, ApiPath) {
  var service = this;

  service.getMenuItem = function (shortname) {

    var image_url = ApiPath + '/images/' + shortname + '.jpg'

    //http://www.davidchuschinabistro.com/images/L1.jpg
    return image_url;
    
    // return $http.get(image_url).then(function (response) {
    //   return response.data;
    // });
  };

}



})();
