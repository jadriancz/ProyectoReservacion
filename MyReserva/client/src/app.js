
var app = angular.module('plunker', []);

app.controller('MainCtrl', ['tempDataStorageService', function(tempDataStorageService) {

  var register = this;

  register.firstName = "";

	register.storedData = tempDataStorageService;

	register.test = function () {
	  tempDataStorageService.setName(register.firstName);
	}

}]);


app.factory('tempDataStorageService', function() {
    // The service object
    var profile = {};

    profile.doctorFirstName = "No doctor data stored";

    //The functions

    profile.setName = function(data) {
        profile.doctorFirstName = data;
    }

    profile.getName = function() {
        return profile.doctorFirstName;
    }

    // return the service object
    return profile;
});
