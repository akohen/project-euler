$.holdReady( true );
var currentProblem = 1;
var problems = {};
$.getJSON( "list", function( scripts ) {
  var queue = scripts.map(function(script) {
      return $.getScript("problems/"+script);
  });

  $.when.apply(null, queue).done(function() {
    $.holdReady( false );
  });
});