var library = {
    
    validate: function(Element){      
  var message = '';
 var bericht = '';
 var melding = document.getElementById('melding');   //zoek div die melding heet   
var username = document.myform.username.value; //kijk wat de value is van de gebruikersnaam
	if (username == '') //als het leeg is
	{
		message = 'je moet wel je gebruikersnaam invullen<br>';
		bericht += message;
		document.myform.username.style.borderColor = 'red'; //maak een rood randje 
	}
		else
		{
			var pattUsername = /^[a-z0-9_-]{3,15}$/; //3-15 karakters met alleen letters, cijfer of symbool“_-”.
			if(!pattUsername.test(username))
			{
				message += '- De gebruikersnaam moet tussen de 3-15 karakters zijn met alleen de symbolen _-<br>';
				bericht += message;
			}
		}
	
	var password = document.myform.password.value; //kijk wat de value is van het wachtwoord
	if (password == '') //als het leeg is
	{
		message = 'je moet wel je wachtwoord invullen<br>';
		document.myform.password.style.borderColor = 'red'; //maak een rood randje
		bericht += message;
	}
		else
		{
			var pattPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; //een nummer, hoofdletter en meer dan zes karakters
			if(!pattPassword.test(password))
			{
				message += '- Het wachtwoord moet een nummer, hoofdletter en meer dan zes karakters zijn.<br>';
				bericht += message;
			}
		}
	
	if(message !== '') //als element niet leeg is
    {
    	Element = bericht;
        melding.innerHTML = Element; //zet in de div melding alles wat de Element heeft opgeslagen
        return false;
    }
	
	
    },
};
