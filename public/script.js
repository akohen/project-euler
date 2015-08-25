function showProblem (argument) {
  $.getJSON( "get/"+argument, function( data ) {
    $('#current').empty();
    $('#current')
      .append($('<h2>').text('Current Problem: ' + data['t']))
      .append(data['p'])
      .append($('<h4>').text('Source'))
      .append($('<pre class="prettyprint text-left">')
        .text(problems[argument].toString()) )
      .append($('<h4>').text('Result : ' +problems[argument]().toString()) );
    prettyPrint();
  });
}

  $(function() {

    $.each(problems,function(index,value) {
      var link = '<a href="https://projecteuler.net/problem='+index+'" target="_blank">Project Euler page</a>';
      var setActive = $("<button>Set Active</button>").click(function(e) {
          sessionStorage.setItem('currentProblem', index);
          showProblem(index);
      });
      var problem = $('<button>Problem '+index+'</button>');
      problem.data('id',index);
      problem.on('click', function() {
        var foo = $(this);
        $.getJSON( "get/"+$(this).data('id'), function( data ) {
          foo.popover({
            trigger: 'focus',
            placement: 'bottom',
            html: true,
            title: data['t'],
            content: data['p']
          });
        foo.popover("toggle");
        });
      });

      var solution = $('<button rel="popover" />').text('Solution');
      solution.data('content', function() {
        if (this.cache) return this.cache;
        return this.cache = value().toString();
      });

      var code = $('<button rel="popover" />').text('Code');
      code.data('content', $('<pre class="prettyprint">').text(value.toString()));
      code.on('shown.bs.popover', prettyPrint);

      $("tbody").append($('<tr class="text-center">')
        .append($('<td>')
          .append(problem))
        .append($('<td>')
          .append(solution))
        .append($('<td>')
          .append(code))        
        .append($('<td>')
          .append(setActive))
        .append($('<td>')
          .append(link))
        );
    });

    $('body').popover({selector: '[rel=popover]', html : true, placement : 'bottom', trigger : 'focus'});
    prettyPrint();

    var currentProblem = sessionStorage.getItem('currentProblem') == null ? 0 : sessionStorage.getItem('currentProblem');

    if( currentProblem > 0 ) {
      showProblem(currentProblem);
    }

  });