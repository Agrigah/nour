


var buttons= document.querySelectorAll("#button")
console.log(buttons)
buttons[0].addEventListener("click",plus)
buttons[1].addEventListener("click",plus)


 function plus()
  {var reslt=document.getElementById("qte").innerHTML
  var qte= parseInt(reslt)
  qte++
  
  document.getElementById("qte").innerHTML=qte
  var prix=document.getElementById("prixUnitaire").innerHTML
  var prixUnitaire=parseInt(prix)
  document.getElementById("total").innerHTML=prixUnitaire*qte
 

 }
 document.querySelector("#buton").addEventListener("click",moins)

function moins()
{
    var repons=document.getElementById("qte").innerHTML
    var qte= parseInt(repons)
    qte--
    document.getElementById("qte").innerHTML=qte
    var prix=document.getElementById("prixUnitaire").innerHTML
    var prixUnitaire=parseInt(prix)
   
    
    if(qte<0){
       qte=0
       
    }
    document.getElementById("total").innerHTML=prixUnitaire*qte
    document.getElementById("qte").innerHTML=qte

}













