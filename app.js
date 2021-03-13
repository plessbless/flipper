const card = document.querySelector('.card');
card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});


// Разобрать нижнюю анимацию



// //Movement Animation to happen
// // const card = document.querySelector(".card");
// const container = document.querySelector(".scene");
// //Items
// const title = document.querySelector(".title");
// const hero = document.querySelector(".hero img");
// const circle = document.querySelector(".circle img");
// const work = document.querySelector(".work");
// const description = document.querySelector(".info h3");
// const social = document.querySelector(".social");

// //Moving Animation Event
// container.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
// //Animate In
// container.addEventListener("mouseenter", (e) => {
//   card.style.transition = "none";
//   //Popout
//   title.style.transform = "translateZ(150px)";
//   hero.style.transform = "translateZ(200px)";
//   description.style.transform = "translateZ(150px)";
//   social.style.transform = "translateZ(150px)";
//   work.style.transform = "translateZ(125px)";
//   circle.style.transform = "rotateZ(360deg)";
// });
// //Animate Out
// container.addEventListener("mouseleave", (e) => {
//   card.style.transition = "all 0.5s ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Popback
//   title.style.transform = "translateZ(0px)";
//   hero.style.transform = "translateZ(0px) rotateZ(0deg)";
//   description.style.transform = "translateZ(0px)";
//   social.style.transform = "translateZ(0px)";
//   work.style.transform = "translateZ(0px)";
//   circle.style.transform = "rotateZ(-0deg)";
// });


