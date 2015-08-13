var app = angular.module("app", []);

var $URL = "https://api.github.com/repos/javierugarte/GourmetApp-android/releases";


app.controller("appCtrl", function($scope, $http) {
    $http.get($URL)
    .success(function(data) {
      json = angular.fromJson(data);   

      var releases = [];
      for( i = 0; i < json.length; i++) {
        var release = {};
        release.tagName = json[i].tag_name;
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
        projectName: 'Gourmet App - Android',
        tagName: 'Download ' + releases[0].tagName,
        available: '(Android 4.1 or above)',
        projectUrl: 'http://github.com/javierugarte/GourmetApp-Android',
        footerText: 'Developed by Javier González. You can see the application code and contribute on ',
        footerGitHub: 'GitHub.',
        downloadUrl: releases[0].downloadUrl,
        releases: releases
      };

      $scope.gourmet = gourmet;
    });
 
});