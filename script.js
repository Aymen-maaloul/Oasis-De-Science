$(document).ready(function(){
    $(".a2").click(function(){
        $(".menu").fadeIn(500);
        $(".body2").toggle();
    });
    $(".out").click(function(){
        $(".menu").fadeOut(500);
    });
    setTimeout(function(){
        $(".custom-loader").fadeToggle();
        $(".loa").fadeToggle();
    }, 3000);
});
window.addEventListener('scroll',function(){
    var menu = document.querySelector(".menu");
    menu.classList.toggle('sticky',window.scrollY > 1);
})
//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}