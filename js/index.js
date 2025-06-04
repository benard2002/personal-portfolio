// jQuery on Hamburger
$(".hamburger").on("click", ()=>{
  $('.hamburger').toggleClass('active');
  $('.nav-menu').toggleClass('active')
})

//Js and jQuery on nav
document.querySelectorAll('.nav-link').forEach(n => {
  n.addEventListener('click', ()=>{
    
    $('.hamburger').removeClass('active');
    $('.nav-menu').removeClass('active')
  })
});

const projectContainer = document.querySelector(".project-container");


const details = [{
  name : "FLASH NEWS",
  description :"A fully responsive fullstack news application",
  image: "newss.png",
  live : "https://flashnews-wwlf.onrender.com/",
  github: "https://github.com/benard2002/flashNews"
},{
  name : "WEATHER APPLICATION",
  description :"A Weather app providing data on chances of rain tomorrow.",
  image: "weather.png"
},{
  name : "BLOG APP",
  description :"A blog app for writing blogs.",
  image: "blog.png",
  live : "https://blog-capstone-vev1.onrender.com/",
  github: "https://github.com/benard2002/blog-capstone-project"
}

]

projectContainer.innerHTML = ""
details.forEach(k =>{
  projectContainer.innerHTML += `
    <div class="project-wraps">
          <div class="project-img-wrap">
            <img src="./images/${k.image}" alt="project-image" class="project-img" class="project-img">
          </div>
          <h3>${k.name}</h3>
          <p class="project-description">${k.description}</p>
          <div class="project-buttons">
            <button class="btn left" onclick="window.open('${k.github}')">
              Github 
            </button>
            <button class="btn right" onclick="window.open('${k.live}')">
              Live Demo
            </button>
          </div>
        </div>
  
  `
  console.log(k.name)
})