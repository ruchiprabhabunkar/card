function selectOption(optionCard) {
const allOptions = document.querySelectorAll(".option-card");
 
allOptions.forEach(card => {
    card.classList.remove("selected"); 
    card.querySelector(".radio").checked = false; 
    
      const details = card.querySelector(".details");
    if (details) details.style.display = "none";
  });
  
  optionCard.classList.add("selected"); 
  optionCard.querySelector(".radio").checked = true; 
  

  const details = optionCard.querySelector(".details");
  if (details) details.style.display = "block";
}

  