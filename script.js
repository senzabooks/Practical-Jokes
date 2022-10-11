var spans = document.querySelectorAll("span");
var obrazek = document.querySelector(".image");

spans.forEach( (span) =>{
  span.addEventListener("mouseover",(event) => {
    obrazek.style.display="block";
    obrazek.setAttribute("src", event.currentTarget.dataset.image);
    console.log(event);
  })


  span.addEventListener("mouseout",(event) => {
    obrazek.style.display="none";
    obrazek.setAttribute("src", event.currentTarget.dataset.image);
  })
})
