const faqAcc = document.querySelectorAll(".faq-acc");
const faqQ = document.querySelectorAll(".faq-q");
const boxIcon = document.querySelector(".boxIcon");
const faqArrow = document.querySelectorAll(".arrow");
const faqAns = document.querySelectorAll(".faq-a");

for (let i = 0; i < faqAcc.length; i++) {

    faqAcc[i].addEventListener("mouseover", () => boxIcon.style.left = "-14%");
    faqAcc[i].addEventListener("mouseout", () => boxIcon.style.left = "-10%");

    faqAcc[i].addEventListener("click", () => {

        if (faqAcc[i].classList.contains('active')) { 
            closeAcc();
        }
        else { 
            closeAcc(); 
            faqAcc[i].classList.toggle("active");

        }  
        
    });
}

function closeAcc() {
    faqAcc.forEach(item => {
        item.classList.remove("active");
    });
}
