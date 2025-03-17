const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navlinks");


// toggle navigation
navToggle.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
 
})

// close navlinks when clicked
document.querySelectorAll('.nav-links a').forEach(link =>{
    link.addEventListener("click", () =>{
        navToggle.classList.remove('active')
        navLinks.classList.remove('active')

    })
})
