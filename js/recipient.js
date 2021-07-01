$().ready(function(){

    $('#btn-submit').click(function(event){
        event.preventDefault();


        let name = $('#firstname').val();
        let donation = $()
        let delivery = $('input[name="delivery"]:checked').val(); //"home" or "pickup";


        alert("Hello " + name + ", We have received your request, the processing is now underway.Please be patient.");

        alert("We are pleased to inform you that,your request has been accepted. Your donor is code ....., please click to see his details");

        $('#recipient').hide();


    });


    

});