
const emailEl = document.getElementById("email-el")
const fNameEl = document.getElementById("fname-el")
const passEl = document.getElementById("set-pass-el")
const signInEl = document.getElementById("sign-in-el")
const signUpEl=document.getElementById("sign-up-el")
const checkPass=document.getElementById("check-pass")
const checkEmail=document.getElementById("check-email")

var Userdata=[]

signUpEl.addEventListener("click",function(){
  Userdata.push({emaild:emailEl.value,passd:passEl.value})
  localStorage.setItem("userData",JSON.stringify(Userdata))
  open("sign-in.html","_self")
})

function practice(){
  open("https://www.w3schools.com/")
}

var n =0
function conform(){
  var dataArray = JSON.parse(localStorage.getItem("userData"));
  for(var i=0;i<dataArray.length;i++){
    var k=dataArray[i].emaild
    var p=dataArray[i].passd
   if(k == checkEmail.value && p== checkPass.value){
      open("index.html","_self")
      break;
      }
      else{
        n++
      }
    }
     if(n!=0){
       alert("Wrong login id or password")
     }
    
  }


 function sendmail(){
    Email.send({
      Host: "smtp.gmail.com",
      Username: "shivamyadav35707@gmail.com",
      Password: "@.3s9879",
      To: "shivamyadav8758@gmail.com",
      From: "shivamyadav35707@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert(`mail sent successfully. look ${fNameEl.value} 😒 we  have sent the conformation mail but google is blocking it because of some security issues  so i can't do anything about sorry`)
      });
  }

  

const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
  if (passEl.type === 'password') {
    passEl.type = 'text';
  }else  {
    passEl.type = 'password';
  }
}



