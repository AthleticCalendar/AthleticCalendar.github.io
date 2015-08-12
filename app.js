var app = angular.module("gourmetApp", []);

app.controller("appCtrl", function($scope) {
    $scope.gourmet = gourmet;
    $scope.download  = function() {};
});

var releases = [
  {
  	tagname:'v1.1.0', 
  	changes:[
  	{name:"Login doesn't require an external webservice"},
  	{name:"Notify you when a new version"},
  	{name:"Added unit test"}]
  },
  {tagname:'v1.0.1', 
  	changes:[
  	{name:"Spanish translation"},
  	{name:"Exit login when the user has changed the password"},
  	{name:"Fixed fonts of EditText"}]
  },
  {tagname:'v1.0.0', 
  	changes:[
  	{name:"Initial version"}]
  }
];

var gourmet = {
	tagname: releases[0].tagname,
  available: '(Android 4.1 or above)',
	downloadUrl: "https://github.com/javierugarte/GourmetApp-android/releases/download/v1.1.0/GourmetApp-v1.1.0.apk",
	releases: releases
};