
// Flipper fine 
const button = document.querySelector('.work');
const card = document.querySelector('.card');
const card_back = document.querySelector('.card__face--back');
const hero = document.querySelector('.hero');
const info = document.querySelector('.info');

button.onclick = function () {
  card.classList.toggle('is-flipped');
  hero.classList.toggle('hidden');
  info.classList.toggle('hidden');
}
card_back.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
  hero.classList.toggle('hidden');
  info.classList.toggle('hidden');
});


//Movement Animation to happen
const front_card = document.querySelector(".front_card");
const container = document.querySelector(".front_container");
//Items
const title = document.querySelector(".title");
const hero_img = document.querySelector(".hero img");
const circle = document.querySelector(".circle img");
const work = document.querySelector(".work");
const description = document.querySelector(".info h3");
const social = document.querySelector(".social");

// //Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  front_card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// //Animate In
container.addEventListener("mouseenter", (e) => {
  front_card.style.transition = "none";
//   //Popout
  title.style.transform = "translateZ(150px)";
  hero_img.style.transform = "translateZ(200px)";
  description.style.transform = "translateZ(150px)";
  social.style.transform = "translateZ(100px)";
  // work.style.transform = "translateZ(125px)";
  circle.style.transform = "rotateZ(360deg)";
});
// //Animate Out
container.addEventListener("mouseleave", (e) => {
  front_card.style.transition = "all 0.5s ease";
  front_card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  hero_img.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  social.style.transform = "translateZ(0px)";
  // work.style.transform = "translateZ(0px)";
  circle.style.transform = "rotateZ(-0deg)";
});


// BACK ANIMATION 
//Movement Animation to happen
const back_card = document.querySelector(".back_card");
const back_container = document.querySelector(".back_container");
//Items
const skill_1_img = document.querySelector(".skill-cards-1 img");
const skill_1_h2 = document.querySelector(".skill-cards-1 h2");
const skill_2_img = document.querySelector(".skill-cards-2 img");
const skill_2_h2 = document.querySelector(".skill-cards-2 h2");
const skill_3_img = document.querySelector(".skill-cards-3 img");
const skill_3_h2 = document.querySelector(".skill-cards-3 h2");


// //Moving Animation Event
back_container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  back_card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// //Animate In
back_container.addEventListener("mouseenter", (e) => {
  back_card.style.transition = "none";
//   //Popout
  // skill_1_img.style.transform = "translateZ(100px)";
  skill_1_h2.style.transform = "translateZ(50px)";
  // skill_2_img.style.transform = "translateZ(100px)";
  skill_2_h2.style.transform = "translateZ(50px)";
  // skill_3_img.style.transform = "translateZ(100px)";
  skill_3_h2.style.transform = "translateZ(50px)";
});
// //Animate Out
back_container.addEventListener("mouseleave", (e) => {
  back_card.style.transition = "all 0.5s ease";
  back_card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  // skill_1_img.style.transform = "translateZ(0px)";
  skill_1_h2.style.transform = "translateZ(0px)";
  // skill_2_img.style.transform = "translateZ(0px)";
  skill_2_h2.style.transform = "translateZ(0px)";
  // skill_3_img.style.transform = "translateZ(0px)";
  skill_3_h2.style.transform = "translateZ(0px)";
});