$().ready(function(){


    $('#individual').hide();
    $('#company').hide();
    $('#hospital').hide();
    $('#individual_form').hide();

    $('#patner').click(function(){
        $('#individual').show();
        $('#company').show();
        $('#hospital').show();    
    });
    $('#individual').click(function(){
        $('#individual_form').show();
    });
    $('#company').click(function(){
        $('#individual_form').show();
    });
    $('#hospital').click(function(){
        $('#individual_form').show();
    });

});
function reply(){
    let name =document.getElementById("name").Value;
    let output ="Hello " +  name + "we have received your feedback,thankyou for reaching out to us.";
    alert(output);
}