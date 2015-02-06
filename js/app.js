var app = angular.module("bse", ['ui.router', 'firebase', 'ngSanitize']);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
