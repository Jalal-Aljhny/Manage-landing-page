let logo = document.querySelector("body header .container .image");
let menuIcon = document.querySelector("body header .container nav img");
let mobileNav = document.querySelector("body header .container nav img + ul");
let mod = "open";
let overlay = document.querySelector("section .overlay");
let emailField = document.querySelector(
  "body footer .container > div:last-child form input[type='text']"
);
let errorMsg = document.querySelector(
  "body footer .container > div:last-child form > div p"
);
let placeHolder = emailField.getAttribute("placeholder");
let manageDivs = document.querySelectorAll(
  "body section.manage .container > div:last-child > div"
);
let mainDivs = document.querySelectorAll("body main .container > div");
let beginTime = Date.now();
let testimonialH = document.querySelector("body section.testimonilas h2");

window.addEventListener("load", () => {
  let endTime = Date.now();
  window.setTimeout(() => {
    mainDivs.forEach((div) => {
      div.classList.add("show");
    });
  }, endTime - beginTime);
});
logo.addEventListener("click", () => {
  window.location.reload();
});
menuIcon.addEventListener("click", () => {
  if (mod == "open") {
    mobileNav.classList.add("mobile-nav");
    menuIcon.src = "images/icon-close.svg";
    mod = "close";
    overlay.style.display = "block";
  } else {
    mobileNav.classList.remove("mobile-nav");
    menuIcon.src = "images/icon-hamburger.svg";
    mod = "open";
    overlay.style.display = "none";
  }
});

let slider = document.querySelector("body section.testimonilas .slider");
let testimonials = [
  {
    srcImg: "images/avatar-anisha.png",
    name: "Anisha Li",
    opinion:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    srcImg: "images/avatar-ali.png",
    name: "Ali Bravo",
    opinion:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    srcImg: "images/avatar-richard.png",
    name: "Richard Watts",
    opinion:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
  },
  {
    srcImg: "images/avatar-shanai.png",
    name: "Shanai Gough",
    opinion:
      "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  },
];
let paginations = Array.from(
  document.querySelectorAll("body section.testimonilas ul li")
);

function addTestmonial(index) {
  slider.innerHTML += `
    <div data-num = "${index}" class ="swiper-slide">
          <figure>
            <img src="${testimonials[index].srcImg}" alt="photo" />
            <figcaption>${testimonials[index].name}</figcaption>
          </figure>
          <q>${testimonials[index].opinion}</q>
        </div>
    `;
}
for (let i = 0; i < 3; i++) {
  addTestmonial(i);
}
let testimonialDivs = document.querySelectorAll(
  "body section.testimonilas .slider > div"
);
let changeTestimonials = function () {
  testimonialDivs.forEach((testimonial) => {
    testimonial.addEventListener("click", () => {
      let current = Number(testimonial.dataset.num);
      let prev;
      let next;
      if (current == 0) {
        prev = testimonials.length - 1;
      } else {
        prev = current - 1;
      }
      if (current == testimonials.length - 1) {
        next = 0;
      } else {
        next = current + 1;
      }
      changeActive(current);
      slider.innerHTML = "";
      addTestmonial(prev);
      addTestmonial(current);
      addTestmonial(next);
      testimonialDivs = document.querySelectorAll(
        "body section.testimonilas .slider > div"
      );
      changeTestimonials();
    });
  });
};
changeTestimonials();

paginations.forEach((li, index) => {
  li.addEventListener("click", () => {
    let current = index;
    let prev;
    let next;
    if (current == 0) {
      prev = testimonials.length - 1;
    } else {
      prev = current - 1;
    }
    if (current == testimonials.length - 1) {
      next = 0;
    } else {
      next = current + 1;
    }
    changeActive(current);
    slider.innerHTML = "";
    addTestmonial(prev);
    addTestmonial(current);
    addTestmonial(next);
    testimonialDivs = document.querySelectorAll(
      "body section.testimonilas .slider > div"
    );
    changeTestimonials();
  });
});
function changeActive(index) {
  paginations.forEach((li) => {
    li.classList.remove("active");
  });
  paginations[index].classList.add("active");
}
function validEmail(email) {
  return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(email);
}
document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validEmail(emailField.value)) {
    errorMsg.style.height = "100%";
    emailField.style.border = "1px solid #db1831";
    emailField.style.color = "#db1831";
  } else {
    errorMsg.style.height = "0";
    emailField.style.border = "none";
    emailField.style.color = "#232f55";
  }
});
emailField.onfocus = function () {
  this.placeholder = "";
};
emailField.onblur = function () {
  this.placeholder = placeHolder;
};
document.getElementById("year").innerText = new Date().getFullYear();

//scroll animation
window.addEventListener("scroll", () => {
  manageDivs.forEach((div) => {
    if (window.scrollY > div.offsetTop - screen.height * 0.65) {
      div.classList.add("show");
    } else {
      div.classList.remove("show");
    }
  });
  if (window.scrollY > testimonialH.offsetTop - screen.height * 0.65) {
    testimonialH.classList.add("show");
  }
});
