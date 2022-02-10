function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function myFunction_password_validate() {
    var x = document.getElementById("password_validate");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



  document.querySelectorAll('.text-input-validate').forEach(e => {
    e.addEventListener('focusout', setInputValidate)
  });
 
  function setInputValidate() {
    this.style.borderBottom = !!this.value ? "1px solid #594adb" : "1px solid #ee3f47";
  }

  var minnumberofchars = 6;
  var maxnumberofchars = 16;
  var regularexperssion = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var letters = /^[A-Za-z]+$/;
  var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;


  // var number = document.getElementById("number");
  // var password = document.getElementById("password");
  // var email = document.getElementById("email");
  // var tel = document.getElementById("tel");
  // var url = document.getElementById("url");
  // var search = document.getElementById("search");
  

  document.getElementById("first_name").addEventListener('focusout', validate_firstname)

  function validate_firstname(){
    if (this.value == "") {
      document.getElementById("errors_firstname").textContent = "Please enter a text"
    }else{
      if(!letters.test(this.value) && this.value!="") {
        document.getElementById("errors_firstname").textContent = "Enter a text only"
        }else if(this.value == ""){ document.getElementById("errors_firstname").textContent = "Please enter a text"}else{
          document.getElementById("errors_firstname").textContent = ""
        }
    }
  }

  document.getElementById("number").addEventListener('focusout', validate_number)
  function  validate_number(){
    if (this.value == "") {
      document.getElementById("errors_number").textContent = "Please enter a number"
    }else{
    if (isNaN(this.value)) {
      document.getElementById('errors_number').textContent =  "enter the only number";  
    }else{ document.getElementById("errors_number").textContent = ""}  
   }
  }

  document.getElementById("email").addEventListener('focusout',validate_email)

  function validate_email(){
    if(this.value==""){
      document.getElementById('errors_email').textContent =  "enter the email";
    }else if(this.value!="" && !emailRegex.test(this.value)){
      document.getElementById('errors_email').textContent =  "enter the valid email";
    }else{
      document.getElementById('errors_email').textContent =  "";
    }
  }


  document.getElementById("password_validate").addEventListener('focusout',validate_password)

  function validate_password(){
    if(this.value==""){
      document.getElementById('errors_password').textContent =  "enter the password";
    }else if(this.value!="" && (this.value.length < minnumberofchars || this.value.length > maxnumberofchars)){
      document.getElementById('errors_password').textContent =  "password should between 6 to 16 character";
    }else if(!regularexperssion.test(this.value) && this.value!=""){
      document.getElementById('errors_password').textContent =  "password should contain atleast one number and one special character";
    }else{
      document.getElementById('errors_password').textContent =  "";
    }
  }

 


  


 