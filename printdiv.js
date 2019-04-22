function printData()
{
   var divToPrint=document.getElementById("openClose");
   var prSelector=document.getElementById("prSelect")
   // var prSelection=prSelector.options[prSelector.selectedIndex].value
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   // newWin.document.write('<p style="position: fixed; bottom: 0; font-size: 15px; font-family: courier" >' + "Proofreader: " + prSelection + '</p>');
   newWin.print();
   newWin.close();
}

$('#printButton').on('click',function(){
printData();
})