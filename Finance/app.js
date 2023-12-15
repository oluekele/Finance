

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const aboutUs = document.querySelector('#about');
const contactUs = document.querySelector('#contact');
const aboutBtn = document.querySelector('#aboutbtn');
const serviceBtn = document.querySelector('#servicebtn');
const service = document.querySelector('#services');


aboutUs.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'about.html';
    console.log('about.html clicked');
});
aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'about.html';
    console.log('about.html clicked');
});

contactUs.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'contact.html';
    console.log('contact.html clicked');
});
service.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'service.html';
    console.log('service.html clicked');
});
serviceBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'service.html';
    console.log('service.html clicked');
});

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function sendMail(){
    
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceId = "service_pkj606o";
    const templateId = "template_9qy512l";

    emailjs.send(serviceId, templateId, params)
    .then((respond) =>{
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";

        console.log(respond);
        alert('Message sent successfully')
    })
    .catch((error) =>{
        console.log('FAILED...', error);
      })
    
}

