document.querySelectorAll(".reveal").forEach(el=>{
  window.addEventListener("scroll",()=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 80){
      el.classList.add("active");
    }
  });
});
