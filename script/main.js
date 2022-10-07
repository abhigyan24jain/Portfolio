let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  navbar.classList.toggle("open-menu")
  menu.classList.toggle("move");
};

window.onscroll = () =>{
  // navbar.classList.toggle("open-menu")
  menu.classList.remove("move");
};
        
    var swiper = new Swiper(".certificate-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


function validate(){
  let name=document.querySelector('.name');
  let email=document.querySelector('.email');
  let msg=document.querySelector('.message');
  let sendBtn=document.querySelector('.send-btn');

  sendBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(name.value == "" || email.value == "" || msg.value == ""){
      emptyerror();
    }else{
      sendmail(name.value, email.value, msg.value);
      success();
    }
  })
}
validate();

function sendmail(name, email, msg){
  emailjs.send("service_yxmgdeu","template_xotacak",{
    to_name: email,
    from_name: name,
    message: msg,
    });
}


function emptyerror(){
  swal({
    title: "ERROR!",
    text: "Field cannot be empty!",
    icon: "error",
  });
}
function success(){
  swal({
    title: "Successfully Sent",
    text: "We try to reply soon",
    icon: "success",
  });
}

var header = document.querySelector('header')

window.addEventListener('scroll', () =>{
  header.classList.toggle("header-active", window.scrollY > 0);
});



var scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () =>{
 scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});


//Scroll Revel
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: '1000',
  reset: true
})

sr.reveal('.home-text', {delay: 100})
sr.reveal('.home-img', {origin: 'top', delay: 100})


sr.reveal('.about', {delay: 100})
sr.reveal('.about-job', {delay: 200})
sr.reveal('.about-text', {delay: 300})
sr.reveal('.about-btn', {delay: 100, interval: 50})

sr.reveal('.skill', {delay: 50})
sr.reveal('.skill-box', {distance: '20px', delay: 50, interval: 100})



sr.reveal('.service', {delay: 50})
sr.reveal('.service-box', {delay: 100})
sr.reveal('.service-head', {delay: 200})
sr.reveal('.service-text', {delay: 300, interval: 200})

sr.reveal('.certificate', {delay: 100})
// sr.reveal('.certificate-done', {delay: 200})
// sr.reveal('.certificate-source', {delay: 300})


sr.reveal('.contact', {delay: 100})
sr.reveal('.name', {delay: 100})
sr.reveal('.email', {delay: 200})
sr.reveal('.message', {delay: 300})
sr.reveal('.send-btn', {delay: 100})

sr.reveal('.social', {delay: 100})
sr.reveal('.footer-link', {delay: 200})
sr.reveal('.send-btn', {delay: 300})
sr.reveal('.copy', {delay: 400})
