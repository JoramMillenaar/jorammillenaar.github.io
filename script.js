const workEls = document.querySelectorAll(".work-box");
const workImgs = document.querySelectorAll(".work-img");
const mainEl = document.querySelector("main");

// Animating work instances on scroll

workImgs.forEach((workImg) => workImg.classList.add("transform"));

let observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    const [textbox, picture] = Array.from(entry.target.children);
    if (entry.isIntersecting) {
      picture.classList.remove("transform");
      Array.from(textbox.children).forEach(
        (el) => (el.style.animationPlayState = "running")
      );
    }
  },
  { threshold: 0.3 }
);

workEls.forEach((workEl) => {
  observer.observe(workEl);
});

const lastFocusedEl = document.querySelector('a[data-focused="last-focused"]');

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Tab" && document.activeElement === lastFocusedEl) {
    e.preventDefault();
    btnToggleNav.focus();
  }
});

// Rotating logos animation

const logosWrappers = document.querySelectorAll(".logo-group");

const sleep = (number) => new Promise((res) => setTimeout(res, number));

logosWrappers.forEach(async (logoWrapper, i) => {
  const logos = Array.from(logoWrapper.children);
  await sleep(1400 * i);
  setInterval(() => {
    let temp = logos[0];
    logos[0] = logos[1];
    logos[1] = logos[2];
    logos[2] = temp;
    logos[0].classList.add("hide", "to-top");
    logos[1].classList.remove("hide", "to-top", "to-bottom");
    logos[2].classList.add("hide", "to-bottom");
  }, 5600);
});

document.getElementById('youtube-video-placeholder').addEventListener('click', function() {
    var width = this.offsetWidth;
    var height = this.offsetHeight;
    this.innerHTML = `<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/y5xptzj57sY?autoplay=1&amp;start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});


function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var subject = encodeURIComponent(name + " Reaching Out");
    var emailBody = message;

    window.location.href = "mailto:" + "lockups-entity.0a" + "+jorammillenaar" + "@" + "icloud.com" + "?subject=" + subject + "&body=" + encodeURIComponent(emailBody);
}


/* --------------------------------- */
/* ----- Modal -----*/
/* --------------------------------- */

function closeModal(id) {
  modal = document.getElementById(id)
  modal.style.display = "none";
}

function openModal(id) {
  modal = document.getElementById(id)
  modal.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://api.github.com/repos/JoramMillenaar/AudioFlex';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const starCount = data.stargazers_count;
        const reactionContainer = document.querySelector('.star-box');
        reactionContainer.innerHTML += `${starCount}`;
    })
    .catch(error => console.error('Error fetching GitHub data:', error));
});

