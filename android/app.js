var app = angular.module("app", []);

var $URL = "https://api.github.com/repos/AthleticCalendar/AthleticCalendar-android/releases";


app.controller("appCtrl", function($scope, $http) {
    $http.get($URL)
    .success(function(data) {
      json = angular.fromJson(data);   

      var releases = [];
      for( i = 0; i < json.length; i++) {
        var release = {};
        release.tagName = json[i].tag_name;
        release.changes = json[i].body;
        release.changes = release.changes.split('- ');
        release.changes.shift();
        release.downloadUrl = "";
        if (json[i].assets != null && json[i].assets[0] != null && json[i].assets[0].browser_download_url != "undefined") {
          release.downloadUrl = json[i].assets[0].browser_download_url;
        }
        releases.push(release);
      }

      var app = {
        projectName: 'Athletic Calendar - Android',
        tagName: 'Download ' + releases[0].tagName,
        available: '(Android 4.0.4 or above)',
        projectUrl: 'https://github.com/AthleticCalendar/AthleticCalendar-Android',
        footerText: 'Developed by Javier González. You can see the application code and contribute on ',
        footerGitHub: 'GitHub.',
        downloadUrl: releases[0].downloadUrl,
        releases: releases
      };

      $scope.app = app;
    });
 
});