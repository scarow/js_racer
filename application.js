$(document).ready(function() {
  var counter1 = 0
  var counter2 = 0
  var rowCount = (('.racer_table').length);

  $(document).on('keyup', function(e) { 

    if(e.which == 80) { 
      if(counter1 < rowCount) {
        $("#player1_strip td.active").next().addClass("active")
        $("#player1_strip .active").first().removeClass("active");   
        counter1 += 1
      }
      else {
        alert('Player1 has won!', 'Alert Dialog')
      };  
    }
    else if(e.which == 81) {
      if(counter2 < rowCount) {
        $("#player2_strip td.active").next().addClass("active")
        $("#player2_strip .active").first().removeClass("active");   
        counter2 += 1 }
        else {
          alert('Player2 has won!', 'Alert Dialog')
        };
        }
      });
});

