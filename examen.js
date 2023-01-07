function afficherCacher(etat){
  document.getElementById("mahram").style.display=etat;
}
function calculDuree(){
  var date1= new Date(document.getElementById('par2').value);
  var date2= new Date();
  var duree= date2.getFullYear() - date1.getFullYear();
  if(duree<9){
    alert("vous n'avez pas encore le droit ")
  }
  else{
    alert('inscription ok')
  }   
}
