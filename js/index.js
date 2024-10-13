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
