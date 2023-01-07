var t = [];
function enregistre(){
    var p = {
        "Ref":        document.getElementById("ref").value,
        "Designation":document.getElementById("designation").value,
        "Prix":       document.getElementById("prix").value,
        "Categorie":  document.getElementById("categorie").value,
    }
      t.push(p) ;
    console.log(t);
}
function afficher(){
    document.getElementById('produits').innerHTML= " "
    for(var p of t){
        document.getElementById('produits').innerHTML+='<tr><td>'+ p.Ref +'</td><td>' + p.Designation + '</td><td>' + p.Prix + '</td><td>' + p.Categorie + '</td><td><button type="button" onclick=supp("'+p.Ref+'")>supprimer</button></td></tr>'  
        
    } 
}
function supp(ref){
    for(var i=0;i<t.length;i++){
        if(t[i].Ref==ref){
            t.splice(i,1);
            break;
     }  
 }
    afficher();
    console.log(t);
}
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
