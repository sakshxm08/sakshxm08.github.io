let pencil = document.getElementById("pencil");
let pen = document.getElementById("pen");
let jee = document.getElementById("jee");
let college = document.getElementById("college");
let details = document.getElementById("details");
let orangeButton = document.getElementById("orange");
let blueButton = document.getElementById("blue");
let pickTheme = document.getElementById("pickTheme");
let purpleButton = document.getElementById("purple");
let lightVioletButton = document.getElementById("lightViolet");
let currentTheme = document.getElementById("themeClr");
let projectCardOnetap = document.getElementById("projectCardOnetap");
let hamburger = document.getElementById("hamburger");
let sidebar = document.getElementById("sidebar");
let projectCardPortfolio = document.getElementById("projectCardPortfolio");
let hrefBtn = document.querySelectorAll(".inactive");
const root = document.querySelector(":root");
let meta = document.createElement("meta");
window.onload = () => {
  meta.name = "theme-color";
  meta.content = "#04151f";
  document.getElementsByTagName("head")[0].appendChild(meta);
};
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
              
              <span class="result"><span class="exam">JEE Mains AIR -</span> 19,637<br><br><span class="exam">JEE Advanced AIR -</span> 11,205</span>`;
});
college.addEventListener("click", () => {
  details.innerHTML = `<span class="std">College</span>
              <span class="duration">2021-25</span>
              <span class="institute"
                >Delhi Technological University, New Delhi</span
              >
              <span class="result"><span class="exam">1st Year GPA -</span> 9.38</span>`;
});
const setTheme = (
  bgDark,
  bgLight,
  textDark,
  textLight,
  bgSidebar,
  bgSidebarFade,
  linkSelection,
  linkHover,
  bgThemeBtn,
  bgThemeBtnHover
) => {
  root.style.setProperty("--bg-dark", bgDark);
  root.style.setProperty("--bg-light", bgLight);
  root.style.setProperty("--text-dark", textDark);
  root.style.setProperty("--text-light", textLight);
  root.style.setProperty("--bg-sidebar", bgSidebar);
  root.style.setProperty("--bg-sidebar-fade", bgSidebarFade);
  root.style.setProperty("--link-selection", linkSelection);
  root.style.setProperty("--link-hover", linkHover);
  root.style.setProperty("--bg-themeBtn", bgThemeBtn);
  root.style.setProperty("--bg-themeBtn-hover", bgThemeBtnHover);
  meta.name = "theme-color";
  meta.content = bgDark;
  document.getElementsByTagName("head")[0].appendChild(meta);
};
blueButton.addEventListener("click", () => {
  setTheme(
    "#04151f",
    "#7cb4b8",
    "#04151f",
    "#d1e8ea",
    "#003b5d",
    "#0f3349",
    "#d5c5c8",
    "#86626e",
    "#d8d8d8",
    "#b8b8b8"
  );

  currentTheme.src = "./content/blue.png";
  currentTheme.alt = "Blue";
  projectCardOnetap.style.backgroundImage =
    "url(./content/Onetap-Mockup-Blue.png)";
  projectCardPortfolio.style.backgroundImage =
    "url(./content/Portfolio-Mockup-Blue.png)";
});
orangeButton.addEventListener("click", () => {
  setTheme(
    "#090446ff",
    "#607b7dff",
    "#090446ff",
    "#fcb07eff",
    "#051923ff",
    "rgb(27, 41, 49)",
    "rgb(133, 124, 226)",
    "rgb(85, 189, 179)",
    "#bebebe",
    "#8a8a8a"
  );
  currentTheme.src = "./content/orange.png";
  currentTheme.alt = "Orange";
  projectCardOnetap.style.backgroundImage =
    "url(./content/Onetap-Mockup-Orange.png)";
  projectCardPortfolio.style.backgroundImage =
    "url(./content/Portfolio-Mockup-Orange.png)";
});
purpleButton.addEventListener("click", () => {
  setTheme(
    "#161b33ff",
    "#a69cacff",
    "#161b33ff",
    "#f1dac4ff",
    "#474973ff",
    "rgb(49, 50, 76)",
    "#dbcbd8",
    "#564787",
    "#bebebe",
    "#8a8a8a"
  );
  currentTheme.src = "./content/purple.png";
  currentTheme.alt = "Purple";
  projectCardOnetap.style.backgroundImage =
    "url(./content/Onetap-Mockup-Purple.png)";
  projectCardPortfolio.style.backgroundImage =
    "url(./content/Portfolio-Mockup-Purple.png)";
});
lightVioletButton.addEventListener("click", () => {
  setTheme(
    "rgb(101, 110, 238)",
    "rgb(216, 225, 255)",
    "#0c120cff",
    "#f6f8ffff",
    "rgb(83, 87, 150)",
    "rgb(53, 57, 120)",
    "#c0a2ed",
    "#64539f",
    "#cbcbcb",
    "#b2b2b2"
  );
  currentTheme.src = "./content/light-violet.png";
  currentTheme.alt = "Light Violet";
  projectCardOnetap.style.backgroundImage =
    "url(./content/Onetap-Mockup-Light-Violet.png)";
  projectCardPortfolio.style.backgroundImage =
    "url(./content/Portfolio-Mockup-Light-Violet2.png)";
});
pickTheme.addEventListener("click", () => {
  document.getElementById("customize").style.display = "flex";
});
const toggleClass = () => {
  sidebar.classList.toggle("hide");
  hamburger.classList.toggle("hide");
  document.getElementById("cross").classList.toggle("hide");
};
const hideFn = (btn) => {
  document.getElementById(btn).addEventListener("click", () => {
    toggleClass();
  });
};
hideFn("hamburger");
hideFn("cross");

if (window.matchMedia("(max-width:1000px)").matches) {
  sidebar.classList.add("hide");

  hideFn("homeBtn");
  hideFn("aboutBtn");
  hideFn("eduBtn");
  hideFn("projectBtn");
  hideFn("contactBtn");
}
const screen = window.matchMedia("(max-width: 1000px)");

screen.onchange = (e) => {
  if (e.matches) {
    sidebar.classList.add("hide");

    hideFn("homeBtn");
    hideFn("aboutBtn");
    hideFn("eduBtn");
    hideFn("projectBtn");
    hideFn("contactBtn");
    if (hamburger.classList.contains("hide")) {
      hamburger.classList.remove("hide");
    }
    if (!document.getElementById("cross").classList.contains("hide")) {
      document.getElementById("cross").classList.add("hide");
    }
  } else {
    if (sidebar.classList.contains("hide")) {
      sidebar.classList.remove("hide");
    }
    if (!document.getElementById("cross").classList.contains("hide")) {
      document.getElementById("cross").classList.add("hide");
    }
  }
};

picker = document.querySelector(".picker");
for (let i = 0; i < picker.children.length; i++) {
  picker.children[i].children[0].addEventListener("input", () => {
    document.querySelector(".theme").children[i].style.backgroundColor =
      picker.children[i].children[0].value;
  });
}
const colorCalc = (color, div) => {
  let color2 = "#";
  for (let i = 1; i < color.length; i += 2) {
    if (i + 1 < color.length) {
      let num = parseInt(color[i], 16) * 10 + parseInt(color[i + 1], 16);
      let num2 = parseInt(num / div);
      if (num2 < 16) {
        color2 += "0";
      }
      color2 += num2.toString(16);
    }
  }
  return color2;
};
let apply = document.getElementById("applyTheme");
apply.addEventListener("click", () => {
  setTheme(
    picker.children[0].children[0].value,
    picker.children[1].children[0].value,
    picker.children[2].children[0].value,
    picker.children[3].children[0].value,
    colorCalc(picker.children[0].children[0].value, 2),
    colorCalc(picker.children[0].children[0].value, 3),
    picker.children[3].children[0].value,
    colorCalc(picker.children[3].children[0].value, 2),
    "#d8d8d8",
    "#b8b8b8"
  );
  // console.log(colorCalc(picker.children[0].children[0].value, 2));
  document.getElementById("customize").style.display = "none";
});
let closeCustomize = document.getElementById("closeCustomize");
closeCustomize.addEventListener("click", () => {
  document.getElementById("customize").style.display = "none";
});
