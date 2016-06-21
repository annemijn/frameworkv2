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
