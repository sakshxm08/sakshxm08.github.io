const firebaseConfig = {
  apiKey: "AIzaSyBzwdDLPdq3ru4bxViGJifoGJSaTsP0x0Y",
  authDomain: "portfolio-886b2.firebaseapp.com",
  databaseURL: "https://portfolio-886b2-default-rtdb.firebaseio.com",
  projectId: "portfolio-886b2",
  storageBucket: "portfolio-886b2.appspot.com",
  messagingSenderId: "577743586019",
  appId: "1:577743586019:web:e62d7a548274f3fb083bd6",
  measurementId: "G-HDD6YJTNEW",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.database();

let messagesRef = db.ref("Collected Data");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  saveMessage(name, email, message);
  document.getElementById("contactForm").reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}

// Project Section

// const addScript = async () => {
//   let carouselScript = document.createElement("script");
//   carouselScript.src =
//     "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
//   carouselScript.integrity =
//     "sha512-NiWqa2rceHnN3Z5j6mSAvbwwg3tiwVNxiAQaaSMSXnRRDh5C2mk/+sKQRw8qjV1vN4nf8iK2a0b048PnHbyx+Q==";
//   carouselScript.crossOrigin = "anonymous";
//   carouselScript.referrerPolicy = "no-referrer";

//   document.getElementsByTagName("body")[0].appendChild(carouselScript);
// };

const techLinks = {
  html: "https://img.shields.io/badge/HTML-%23E34F26?style=for-the-badge&logo=html5&logoColor=white",
  css: "https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=css3&logoColor=white",
  js: "https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  tailwind:
    "https://img.shields.io/badge/tailwind%20CSS-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
  react:
    "https://img.shields.io/badge/react-black?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  gsap: "https://img.shields.io/badge/greensock%20gsap-%2388CE02?style=for-the-badge&logo=greensock&logoColor=white",
  firebase:
    "https://img.shields.io/badge/firebase-black?style=for-the-badge&logo=firebase&logoColor=%23FFCA28",
  github:
    "https://img.shields.io/badge/github-%23181717?style=for-the-badge&logo=github&logoColor=white",
};
const traverse = async (projects) => {
  let carousel = document.getElementById("carousel");

  carousel.innerHTML = "";
  for (let project of projects) {
    let techDiv = "";
    for (tech of project.techStack) {
      for (let techLink in techLinks) {
        if (techLink == tech) {
          techDiv += `<span><img src=${techLinks[techLink]}></span>`;
        }
      }
      console.log(techDiv);
    }
    // console.log(projects[project].name);
    carousel.innerHTML += ` <a
    class="carousel-item"
    style="width: fit-content; height: fit-content"
    href="#${project.href}"
  >
    <div class="project-card">
      <div class="mockup">
        <img
          src=${project.img}
          alt=""
        />
      </div>
      <div class="desc">
        <div class="title open-project-brief">${project.name}</div>
        <div class="project-brief">
          <div>
          ${project.desc}
          </div>
          <div class="devTools">
            ${techDiv}
          </div>
          <div class="buttons">
          <button
            onclick="window.open('${project.url}')"
          >
            Visit Site
          </button>
          <button
            onclick="window.open('${project.repo}')"
          >
            View Repository
          </button></div>
        </div>
      </div>
    </div></a
  > `;
  }
};
const projects = [
  {
    href: "one",
    img: "./content/wearworx-all-devices-black.png",
    name: "WearWorx",
    url: "https://wearworx.netlify.app",
    desc: "Seamless ecommerce with React, Tailwind CSS, Firebase. Google, GitHub login, user-friendly cart, favorites.",
    techStack: ["react", "tailwind", "firebase"],
    repo: "https://github.com/sakshxm08/wearworx",
  },
  {
    href: "two",
    img: "./content/gitfolio-all-devices-black.png",
    name: "GitFolio",
    url: "https://gitfolio-sakshxm08.netlify.app",
    desc: "This project lets you explore Github profiles. It uses HTML, TailwindCSS, and JavaScript, ensuring a user-friendly experience.",
    techStack: ["tailwind", "js", "github"],
    repo: "https://github.com/sakshxm08/gitfolio",
  },
  {
    href: "three",
    img: "./content/onetap-all-devices-white.png",
    name: "OneTap",
    url: "https://onetap-sakshxm08.netlify.app",
    desc: "This website provides information about banquet halls, auditoriums, gym, swimming pool etc. in one tap.",
    techStack: ["react", "firebase"],
    repo: "https://github.com/sakshxm08/onetap-final",
  },
  {
    href: "four",
    img: "./content/payment-all-devices-black.png",
    name: "Payment Page",
    url: "https://payment-page-sakshxm08.netlify.app/",
    desc: "This website is an interative design for a payment portal of a website with CSS animations like flipping of card.",
    techStack: ["html", "css", "js"],
    repo: "https://github.com/sakshxm08/payment-page",
  },
  {
    href: "five",
    img: "./content/animated-all-devices-black.png",
    name: "Animated Website Template",
    url: "https://thefrontendeer-business-temp-02.netlify.app/",
    desc: "This is a single page animated website template of a b usiness website to present my skills of HTML, CSS and GSAP",
    techStack: ["html", "css", "gsap"],
    repo: "https://github.com/thefrontendeer/templates/tree/main/business/02",
  },
];
traverse(projects);
// let projectsDB = db.ref("projects");
// projectsDB.on("value", (project) => {
//   const projects = project.val();
//   addScript().then(traverse(projects));
// });
