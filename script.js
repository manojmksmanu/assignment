const home = document.getElementById('home');
const contact = document.getElementById('contact');
const information = document.getElementById('information');
const guide = document.getElementById('guide');

const homeshow = document.getElementById("home_show")
const contactshow=document.getElementById("contact_show");
const informationshow=document.getElementById("information_show");
const guideshow = document.getElementById("guide_show")
// --for home
home.addEventListener("click", () => {
    contact.classList.remove("active")
    information.classList.remove("active")
    home.classList.add("active")
    guide.classList.remove("active")
    contactshow.style.display="none"
    homeshow.style.display = "block"
    informationshow.style.display = "none"
   guideshow.style.display = "none"
})
// --for contact
contact.addEventListener("click", () => {
    contact.classList.add("active")
    information.classList.remove("active")
    home.classList.remove("active")
    guide.classList.remove("active")
    contactshow.style.display="block"
    homeshow.style.display = "none"
    informationshow.style.display = "none"
   guideshow.style.display = "none"
})
//for information
information.addEventListener("click", () => {
    contact.classList.remove("active")
    information.classList.add("active")
    home.classList.remove("active")
    guide.classList.remove("active")
    contactshow.style.display="none"
    homeshow.style.display = "none"
    informationshow.style.display = "block"
   guideshow.style.display = "none"
})
//for guide
guide.addEventListener("click", () => {
    contact.classList.remove("active")
    information.classList.remove("active")
    home.classList.remove("active")
    guide.classList.add("active")
    contactshow.style.display="none"
    homeshow.style.display = "none"
    informationshow.style.display = "none"
   guideshow.style.display = "block"
})