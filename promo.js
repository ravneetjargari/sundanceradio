const slideContainer = document.getElementById("promoSlides");
let slideIndex = 0;

// Fetch CMS content
fetch('/content/promotions/index.json')
  .then(res => res.json())
  .then(data => {
    const promoImages = data.map(item => item.image);

    promoImages.forEach((src, idx) => {
      const img = document.createElement("img");
      img.src = src;
      if(idx === 0) img.classList.add("active");
      slideContainer.appendChild(img);
    });

    setInterval(() => changeSlide(1), 5000);
  })
  .catch(err => console.log("No promotions found", err));

function showSlide(n) {
  const slides = slideContainer.getElementsByTagName("img");
  if(slides.length === 0) return;

  if(n >= slides.length) slideIndex = 0;
  if(n < 0) slideIndex = slides.length - 1;

  for(let slide of slides) slide.classList.remove("active");
  slides[slideIndex].classList.add("active");
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}
