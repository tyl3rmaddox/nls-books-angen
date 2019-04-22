var narratorStyle = document.getElementsByClassName('narrator');



console.log(narratorStyle)
$( "#narratorSelect" )
  .change(function () {
    
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).val();
    });
    
    // $(narratorStyle).text( str );
    $( ".narrator" ).text( str );


    var arr = Array.prototype.slice.call( narratorStyle );
    console.log(arr);
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i].innerHTML.indexOf("[SELECT NARRATOR]") !== -1) {
        $(".narrator")[i].style.color = 'red';
      } else if (arr[i].innerHTML.indexOf("[SELECT NARRATOR]") == -1) {
        $(".narrator")[i].style.color = 'black';
      }
    }

    

  })
  .change();