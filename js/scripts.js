$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
debugger;
    var blanks = ['gro0', 'gro1', 'gro2'];
    var idx = [0,1,2]
    var bigblanks = [];

    blanks.forEach(function(blank) {
      var userInput = $('input#' + blank).val();
      bigblanks.push(userInput.toUpperCase());
      bigblanks = bigblanks.sort();
    });

    idx.forEach(function(idx) {
      $('.gro' + idx.toString()).text(bigblanks[idx]);
    });

    $('#results').show();
    // $('#blanks').hide();
  });
});
