const faqAcc = document.querySelectorAll(".faq-acc");
const faqQ = document.querySelectorAll(".faq-q");
const boxIcon = document.querySelector(".boxIcon");
const faqArrow = document.querySelectorAll(".arrow");
const faqAns = document.querySelectorAll(".faq-a");

for (let i = 0; i < faqAcc.length; i++) {

    faqAcc[i].addEventListener("mouseover", () => boxIcon.style.left = "-14%");
    faqAcc[i].addEventListener("mouseout", () => boxIcon.style.left = "-10%");

    faqAcc[i].addEventListener("click", () => {

        if (faqQ[i].classList.contains('active')) { 
            closeAcc();
        }
        else { 
            closeAcc(); 
            faqQ[i].classList.toggle("active");
            faqArrow[i].classList.toggle("active");
            faqAns[i].classList.toggle("active");
        }  
        
    });
}

function closeAcc() {
    faqQ.forEach(item => {
        item.classList.remove("active");
    });

    faqArrow.forEach(item => {
        item.classList.remove("active");
    });

    faqAns.forEach(item => {
        item.classList.remove("active");
    });
}
