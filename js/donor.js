let donorNumber ;
let dID, donorName, dEmail, dAge, dBlood, dDonation;



$(document).ready(function() {
  $('input[type="radio"]').click(function(){
    var inputValue = $(this).prop("value");
    var targetBox = $("." + inputValue);
    $(".unsuccesful").not(targetBox).hide();
    $(targetBox).show();
    
  });
  
  $( "#donateform" ).click(function(event) {
    event.preventDefault();

    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let email = $('#exampleInputEmail1').val();
    let age = $('#age').val();
    let gender = $("#gender option:selected").val();
    let donationType = $("#donation-type option:selected").val();
    let bloodType = $("#blood-type option:selected").val(); 

    class Donor {
      constructor(dID, donorName, dEmail, dAge,dGender,dDonation, dBlood, ) {
        this.dID = dID;
        this.donorName = donorName;
        this.dEmail = dEmail;
        this.dAge = dAge;
        this.dGender =dGender
        this.dDonation = dDonation;
        this.dBlood = dBlood;
        
      }
    }

    let name = fname + lname;
    let name2 = fname +" "+ lname;

    donorNumber = Math.floor(Math.random() * 1000);

    name = new Donor( donorNumber,name2, email,age,gender,donationType,bloodType );
    
    localStorage.setItem('name', JSON.stringify(name));

    let message = "Thanks "+ name.donorName + " for your Donation. You Saved a life";
    let message2 = "You are donor Number: "+ donorNumber;

    alert(message);
    alert(message2);

    $('#donorId').html(name.dID);
    $('#FName').html(fname);
    $('#LName').html(lname);
    $('#email').html(name.dEmail);
    $('#donations-type').html( name.dDonation);
    $('#bloods-type').html(name.dBlood);
    

    $("#myforms").trigger("reset");



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