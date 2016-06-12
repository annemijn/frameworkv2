var library = {
    
    validate: function(Element){      
 
 var melding = document.getElementById('melding');   //zoek div die melding heet   
var username = document.myform.username.value; //kijk wat de value is van de gebruikersnaam
	if (username == '') //als het leeg is
	{
		Element = 'je moet wel je gebruikersnaam invullen<br>';
		
		document.myform.username.style.borderColor = 'red'; //maak een rood randje 
	}
	
	var password = document.myform.password.value; //kijk wat de value is van het wachtwoord
	if (password == '') //als het leeg is
	{
		Element = 'je moet wel je wachtwoord invullen<br>';
		document.myform.password.style.borderColor = 'red'; //maak een rood randje
	}
	
	if(Element !== '') //als element niet leeg is
    {
        melding.innerHTML = Element; //zet in de div melding alles wat de Element heeft opgeslagen
        return false;
    }
	
	
    },
};
