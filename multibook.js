$(document).ready(function(){

    $("#multiBookInstructions").hide();
    $("#openCloseMultibook").hide();

    $("input:radio[name='booktype']").change(function(){  

            if(this.value == 'regular_dtb' && this.checked){
              $("#multiBookInstructions").hide();
              $("#openClose").show();
              $("#openCloseMultibook").hide();
            }else{
              
            }

            if(this.value == 'multibook' && this.checked){
                $("#multiBookInstructions").show();
                $("#openCloseMultibook").show();
                $("#openClose").hide();
              }else{
                $("#openClose").show();  
              }

    });

});