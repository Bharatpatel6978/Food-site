const toggle_menu = document.querySelector(".toggle_ul");
const open = document.querySelector(".three_line")
const close = document.querySelector(".close_line")

function toggle_open(){

  toggle_menu.classList.toggle("open");
  open.classList.toggle("close")
  close.classList.toggle("open")
}


const counter_section = document.querySelector(".counter_sec");
const ob = new IntersectionObserver((enter,exit)=>{
  const [entry]=enter;
  if(!entry.isIntersecting){
    return;
  }
  else{
    const dispval = document.querySelectorAll(".numbers");
    let interval = 1000;
    dispval.forEach((dispval)=>{
      let start= 0;
      let end = parseInt(dispval.getAttribute("data"));
      let duration = Math.floor(interval/end);
      let counter = setInterval(function(){
        start += 1;
        dispval.textContent = start;
        if(start==end)
        {
          clearInterval(counter);
        }
      },duration);
    });
  }

  exit.unobserve(counter_section)
},{
  root:null,
  threshold:0,
});
ob.observe(counter_section);