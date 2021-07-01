$(document).ready(function() {
  $('input[type="radio"]').click(function(){
    var inputValue = $(this).prop("value");
    var targetBox = $("." + inputValue);
    $(".unsuccesful").not(targetBox).hide();
    $(targetBox).show();
  });

      


    });


      



 







    /* $('input[name=colorCheckbox]:radio').change(function(e) {
      let value = e.target.value.trim()
  
      $('[class^="form"]').css('display', 'none');
  
      switch (value) {
        case 'red':
          $('.unsuccesful').show()
          break;
        case 'green':
          $('.form-b').show()
          break;
        case 'blue':
          $('.form-c').show()
          break;
        default:
          break;
      }
    }) */
/*   }); */