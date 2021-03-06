'use strict';
angular.module('confboilerplate.speakers.services')
    .service('Speakers', function ($http, $q) {
    this.get = function () {
        var dfd = $q.defer();
        $http.get('assets/data/speakers.json')
            .success(function (data) {
            dfd.resolve(data);
        })
            .error(function (data) {
            dfd.reject(data);
        });
        return dfd.promise;
    };
});

//# sourceMappingURL=../../app/speakers/speakers-service.js.map