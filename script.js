const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");
const buttonsAll = document.querySelectorAll(".buttons");
const submitbtn = document.querySelector(".submitbtn");
const ratingNumber = document.querySelector("span");

submitbtn.addEventListener("click", () => {
   thanks.classList.remove("hidden");
   rating.classList.add("hidden");
});

for(let buttons of buttonsAll) {
      buttons.addEventListener("click", (e) => 
    {
        const target = e.target.value;
        console.log(target);
        ratingNumber.innerText = target;
    });
   }