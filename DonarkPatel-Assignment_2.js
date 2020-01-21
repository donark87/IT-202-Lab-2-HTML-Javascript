function validate()
{
  var name = document.getElementById("username").value; 
  var password = document.getElementById("password").value;
  var userId  = document.getElementById("userId").value;
  var email = document.getElementById("email").value;
  var selectedService = document.getElementById("service").value;
  var validateValue1 = false; //To validate name
  var validateValue2 = false; //To validate password
  var validateValue3 = false; ////To validate ID
  var validateValue4 = false; //To validate name & password & ID
  var validateValue5 = false; //To validate email
  var validateValue6 = false; //To validate checkBox
  var at = email.indexOf("@");
	var dot = email.lastIndexOf(".");
  
  var names = ["donark", "dave", "smith", "john", "david", "steve"]; //patrons name
  var passwords = ["1234Abcd", "2345Lhgf", "5678Efgh", "Efgh5678", "9101Ijkl", "Ijkl9101"]; //patrons password
  var ids = ["12345678", "87654321", "14725836", "63258741", "15995123", "9511596"]; //patrons ID
    
  verify(name, password, userId, email, selectedService, validateValue1, validateValue2, validateValue3, validateValue4, validateValue5, validateValue6, at, dot, names, passwords, ids );
}

function verify(name, password, userId, email, selectedService, validateValue1, validateValue2, validateValue3, validateValue4, validateValue5, validateValue6, at, dot, names, passwords, ids)
{
validateValue1 = validateName(name);

    if(validateValue1 == true)
    {
        validateValue2 =  validatePassword(password);
          if(validateValue2 == true)
          {
                validateValue3 = validateID(userId);
                    if(validateValue3 == true)
                    {
                        for ( var i = 0; i < 5; i++)
                        {


                          if(names[i] == name && passwords[i] == password && ids[i] == userId)
                          {

                            validateValue4 = true;

                          }
                        }

                      }
                      else if(validateValue3 == false)
                      {return;}
              }
              else if(validateValue2 == false)
              {return;}
    }
    else if(validateValue1 == false)
    {return;}

    if(validateValue4 == false)
    {alert("Your account cannot be found \nName, Password and ID must match to access the account");
    return;}

    
    if((at < 1) || (dot < (at+2)) || ((dot+2) >= email.length)){
      alert("Please enter a valid email address");
      validateValue5 = false;
    }
    else
    {
      validateValue5 = true
    } 

    if(document.getElementById("myCheckBox").checked == true)
    {
      validateValue6 = true;
     
    }
    else 
    {
      validateValue6 = false;
      
    }
    
    if(validateValue1 == true && validateValue2 == true && validateValue3 == true 
      && validateValue4 == true && validateValue5 == true && validateValue6 == true)
      {
        alert("Welcome to Smiles Galore \nWe have found your account. \nYou should receive email confirmation \nService selected: " + selectedService );
      }
     else if(validateValue1 == true && validateValue2 == true && validateValue3 == true 
        && validateValue4 == true && validateValue5 == true && validateValue6 == false)
        {
          alert("Welcome to Smiles Galore \nWe have found your account. \nYou will NOT receive email confirmation (Checkbox not selected) \nService selected: " + selectedService );
        }
}




























// validates the name input
function validateName(name)
{

  if(name.length < 1)
  {
  		alert("Please enter your name");
  		return false;

  }
  return true;

}
// validates the ID input
function validateID(id)
{

  errors = [];
  if(id.length < 8)
  {
    errors.push("Enter ID number. \nID number must be 8 digit  1");
  }
  if (id.length > 8)
  {
    errors.push("Enter ID number \nID number must be 8 digit  2");
  }
  if (id.length == 8)
  {

    if(id.search(/[A-Z]/) > 0)
    {
      errors.push("Enter ID number cannot contain any characters");
    }

  }
  if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
  }

  return true;

}
// validates the password input
function validatePassword(passw) {

        errors = [];
    if (passw.length < 8) {
        errors.push("Your password must be at least 8 characters");
    }
    if (passw.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one upper case letter.");
    }
    if (passw.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}
