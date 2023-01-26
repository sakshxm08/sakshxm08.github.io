let pencil = document.getElementById("pencil");
let pen = document.getElementById("pen");
let jee = document.getElementById("jee");
let college = document.getElementById("college");
let details = document.getElementById("details");
let orangeButton = document.getElementById("orange");
let blueButton = document.getElementById("blue");
let purpleButton = document.getElementById("purple");
let lightVioletButton = document.getElementById("lightViolet");
let currentTheme = document.getElementById("themeClr");
let projectCardOnetap = document.getElementById("projectCardOnetap");
let projectCardPortfolio = document.getElementById("projectCardPortfolio");
const root = document.querySelector(":root");
pencil.addEventListener("click", () => {
  details.innerHTML = `<span class="std">Class 10th</span>
              <span class="duration">2018-19</span>
              <span class="institute"
                >Army Public School No. 2, Roorkee, Uttarakhand</span
              >
              <span class="result">96.4%</span>`;
});
pen.addEventListener("click", () => {
  details.innerHTML = `<span class="std">Class 12th</span>
              <span class="duration">2020-21</span>
              <span class="institute"
                >Lal Bahadur Shastri Sr. Sec. School, R.K. Puram Sector-3, New
                Delhi</span
              >
              <span class="result">95.6%</span>`;
});
jee.addEventListener("click", () => {
  details.innerHTML = `<span class="std">JEE Mains & Advanced</span>
              <span class="duration">2021</span>
              
              <span class="result"><span class="exam">JEE Mains AIR -</span> 19,637<br><span class="exam">JEE Advanced AIR -</span> 11,205</span>`;
});
college.addEventListener("click", () => {
  details.innerHTML = `<span class="std">College</span>
              <span class="duration">2021-25</span>
              <span class="institute"
                >Delhi Technological University, New Delhi</span
              >
              <span class="result"><span class="exam">1st Year GPA -</span> 9.38</span>`;
});

blueButton.addEventListener("click", () => {
  root.style.setProperty("--bg-dark", "#04151f");
  root.style.setProperty("--bg-light", "#7cb4b8");
  root.style.setProperty("--text-dark", "#04151f");
  root.style.setProperty("--text-light", "#d1e8ea");
  root.style.setProperty("--bg-sidebar", "#003b5d");
  root.style.setProperty("--bg-sidebar-fade", "#0f3349");
  root.style.setProperty("--link-selection", "#d5c5c8");
  root.style.setProperty("--link-hover", "#86626e");
  root.style.setProperty("--bg-themeBtn", "#d8d8d8");
  root.style.setProperty("--bg-themeBtn-hover", "#b8b8b8");
  currentTheme.src = "./content/blue.png";
  currentTheme.alt = "Blue";
  projectCardOnetap.style.backgroundImage =
    "url(./content/Onetap-Mockup-Blue.png)";
  projectCardPortfolio.style.backgroundImage =
    "url(./content/Portfolio-Mockup-Blue.png)";
});
orangeButton.addEventListener("click", () => {
  root.style.setProperty("--bg-dark", "#090446ff");
  root.style.setProperty("--bg-light", "#607b7dff");
  root.style.setProperty("--text-dark", "#090446ff");
  root.style.setProperty("--text-light", "#fcb07eff");
  root.style.setProperty("--bg-sidebar", "#051923ff");
  root.style.setProperty("--bg-sidebar-fade", "rgb(27, 41, 49)");
  root.style.setProperty("--link-selection", "rgb(133, 124, 226)");
  root.style.setProperty("--link-hover", "rgb(85, 189, 179)");
  root.style.setProperty("--bg-themeBtn", "#bebebe");
  root.style.setProperty("--bg-themeBtn-hover", "#8a8a8a");
  currentTheme.src = "./content/orange.png";
  currentTheme.alt = "Orange";
  projectCardOnetap.style.backgroundImage =
    "url(./content/Onetap-Mockup-Orange.png)";
  projectCardPortfolio.style.backgroundImage =
    "url(./content/Portfolio-Mockup-Orange.png)";
});
purpleButton.addEventListener("click", () => {
  root.style.setProperty("--bg-dark", "#161b33ff");
  root.style.setProperty("--bg-light", "#a69cacff");
  root.style.setProperty("--text-dark", "#161b33ff");
  root.style.setProperty("--text-light", "#f1dac4ff");
  root.style.setProperty("--bg-sidebar", "#474973ff");
  root.style.setProperty("--bg-sidebar-fade", "rgb(49, 50, 76)");
  root.style.setProperty("--link-selection", "#dbcbd8");
  root.style.setProperty("--link-hover", "#564787");
  root.style.setProperty("--bg-themeBtn", "#bebebe");
  root.style.setProperty("--bg-themeBtn-hover", "#8a8a8a");
  currentTheme.src = "./content/purple.png";
  currentTheme.alt = "Purple";
  projectCardOnetap.style.backgroundImage =
    "url(./content/Onetap-Mockup-Purple.png)";
  projectCardPortfolio.style.backgroundImage =
    "url(./content/Portfolio-Mockup-Purple.png)";
});
lightVioletButton.addEventListener("click", () => {
  root.style.setProperty("--bg-dark", "rgb(101, 110, 238)");
  root.style.setProperty("--bg-light", "rgb(216, 225, 255)");
  root.style.setProperty("--text-dark", "#0c120cff");
  root.style.setProperty("--text-light", "#f6f8ffff");
  root.style.setProperty("--bg-sidebar", "rgb(83, 87, 150)");
  root.style.setProperty("--bg-sidebar-fade", "rgb(53, 57, 120)");
  root.style.setProperty("--link-selection", "#c0a2ed");
  root.style.setProperty("--link-hover", "#64539f");
  root.style.setProperty("--bg-themeBtn", "#cbcbcb");
  root.style.setProperty("--bg-themeBtn-hover", "#b2b2b2");
  currentTheme.src = "./content/light-violet.png";
  currentTheme.alt = "Light Violet";
  projectCardOnetap.style.backgroundImage =
    "url(./content/Onetap-Mockup-Light-Violet.png)";
  projectCardPortfolio.style.backgroundImage =
    "url(./content/Portfolio-Mockup-Light-Violet.png)";
});
