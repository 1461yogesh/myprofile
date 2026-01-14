function toggleMode(){
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}
}

window.onload=()=>{
if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}
}

// EMAILJS (replace keys)
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contact-form")?.addEventListener("submit",function(e){
e.preventDefault();
emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
.then(()=>alert("Message Sent"));
});
