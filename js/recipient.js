$().ready(function(){

/*      $('#recipient').hide(); 
 */     $('#blood_donor').hide();
     $('#blood_donor2').hide();
     $('#blood_donor3').hide();
     $('#send_msg').hide();
     $('#regrets').hide();


    
    

            $("#myBtn").click(function(){
                    $("#myModal").modal();
            });

            $('#btn-msg').click(function(){
                alert("Your Message has been send to your donor!.")

            });
     
 
    $('#btn-submit').click(function(event){
        event.preventDefault();


        let name = $('#firstname').val();
        let donation_type = $('input[name="donation"]:checked').val();
        let age = $('#age').val();



        alert("Hello " + name + ", We have received your request, the processing is now underway.Please be patient.");

        alert("We are pleased to inform you that,your request has been accepted. please click to see your donors details");

        switch (donation_type) {
            case donation_type:
                if (donation_type === "blood" && age <= 25) {
                    $('#blood_donor').show();
                    $('#send_msg').show();
                    
                } else if (age > 25 && age <= 40 && donation_type === "blood") {
                    $('#blood_donor2').show();
                    $('#send_msg').show(); 

                } else if (donation_type === "organ" && age <= 25) {
                    $('#blood_donor3').show();
                    $('#send_msg').show(); 

                }  else if (donation_type === "both" && age <= 30) {
                    $('#blood_donor3').show();
                    $('#send_msg').show(); 

                }  
                
                else {
                    let don_msg = "We are sorry to inform you that, We currently do not have a " +donation_type + " donor. However, We are in the process of receiving more donors." + "Please be patient, Once we get a " + donation_type + " donor onboard, We will contact you immediately, We also advice you to possibly look for other sources." 

                    $('#regret_msg').html(don_msg);

                    $('#regrets').show();
 
                }
                break;
        }

        $('#recipient').hide();


    });


    

});