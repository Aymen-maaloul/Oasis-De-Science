function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_pfivuzk";
    const templateID = "template_999brkj";
  if(!document.getElementById("name").value || !document.getElementById("email").value || !document.getElementById("message").value){
    alert('22')
      
  
  }
  else{
  
  emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          window.open("thank you.html")
  
      })
      .catch(err=>console.log(err));
}}