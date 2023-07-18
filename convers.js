function calculer() {
    var euros = document.querySelector( "#euros" );
    var valeur = euros.value;
    if ( isNaN( valeur ) ) {
      alert( "Le montant en euros n'est pas un nombre !" );
      euros.focus();
    }
    else {
      var francs = document.querySelector( "#francs" );
      francs.innerHTML = ( valeur * 6.55957 ).toFixed( 2 );
    }
  }