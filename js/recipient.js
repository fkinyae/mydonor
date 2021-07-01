$().ready(function(){


    $('#recipient').hide();
     $('#blood_donor').show();
        $('#regrets').hide();

            $("#myBtn").click(function(){
                    $("#myModal").modal();
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
                if (donation_type == "blood" && age <= 30) {
                    $('#blood_donor').show();
                    
                } else {
                    let don_msg = "We are sorry to inform you that, We currently do not have a " +donation_type + " donor. However, We are in the process of receiving more donors." + "Please be patient, Once we get a " + donation_type + " donor onboard, We will contact you immediately, We also advice you to possibly look for other sources."  
                    $('#regret').html(don_msg);

                    $('#regrets').show();

            } 
                break;
        }

        $('#recipient').hide();


    });


    

});