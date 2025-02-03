const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navLinks.classList.toggle("open");
});
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("cllicked");
    navLinks.classList.remove("open");
    hamburger.classList.toggle("is-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const answer = item.querySelector(".faq-answer");
      const toggle = item.querySelector(".faq-toggle");

      // Toggle the answer visibility and icon
      if (answer.style.display === "block") {
        answer.style.display = "none";
        toggle.textContent = "+";
      } else {
        // Hide all other answers and reset their icons
        faqItems.forEach((faq) => {
          faq.querySelector(".faq-answer").style.display = "none";
          faq.querySelector(".faq-toggle").textContent = "+";
        });

        // Show the clicked answer and change the icon to minus
        answer.style.display = "block";
        toggle.textContent = "-";
      }
    });
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const faqItems = document.querySelectorAll('.faq-item');

//     faqItems.forEach(item => {
//         item.querySelector('.faq-question').addEventListener('click', () => {
//             // Hide all answers and reset all pluses
//             faqItems.forEach(faq => {
//                 faq.querySelector('.faq-answer').style.display = 'none';
//                 faq.querySelector('.faq-toggle').textContent = '+';
//             });

//             // Show the clicked answer and change the plus to minus
//             const answer = item.querySelector('.faq-answer');
//             const toggle = item.querySelector('.faq-toggle');
//             if (answer.style.display === 'block') {
//                 answer.style.display = 'none';
//                 toggle.textContent = '+';
//             } else {
//                 answer.style.display = 'block';
//                 toggle.textContent = '-';
//             }
//         });
//     });
// });

/*document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            // Hide all answers
            faqItems.forEach(faq => {
                faq.querySelector('.faq-answer').style.display = 'none';
            });

            // Show the clicked answer
            const answer = item.querySelector('.faq-answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});*/


