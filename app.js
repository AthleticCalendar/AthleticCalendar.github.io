var app = angular.module("app", []);

var $URL = "https://api.github.com/repos/javierugarte/GourmetApp-android/releases";


app.controller("appCtrl", function($scope, $http) {
    $scope.download  = function() {};

    $http.get($URL)
    .success(function(data) {
      json = angular.fromJson(data);   

      var releases = [];
      for( i = 0; i < json.length; i++) {
        var release = {};
        release.tagname = json[i].tag_name;
        release.changes = json[i].body;
        release.changes = release.changes.split('* ');
        release.changes.shift();
        release.downloadUrl = "";    
        if (json[i].assets > 0 && json[i].assets[0].browser_download_url != "undefined") {
          release.downloadUrl = json[i].assets[0].browser_download_url;
        }
        releases.push(release);
      }

      var gourmet = {
        appname: "Gourmet App - Android",
        tagname: "Download " + releases[0].tagname,
        available: '(Android 4.1 or above)',
        downloadUrl: releases[0].downloadUrl,
        releases: releases
      };

      $scope.gourmet = gourmet;
    });
 
});