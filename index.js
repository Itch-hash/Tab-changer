const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab4 = document.getElementById("tab4");
let paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");
const paragraph3 = document.getElementById("paragraph3");
const paragraph4 = document.getElementById("paragraph4");

paragraph1.innerHTML =
  "This is what I want to say in the content part of Tab 1.";
paragraph2.style.display = "none";
paragraph3.style.display = "none";
paragraph4.style.display = "none";
tab1.classList.add("active");

function showTab1() {
  if (tab1.classList.contains("active")) {
    return;
  } else {
    paragraph1.innerHTML =
      "This is what I want to say in the content part of Tab 1.";
    paragraph1.style.display = "block";
    paragraph2.style.display = "none";
    paragraph3.style.display = "none";
    paragraph4.style.display = "none";
    tab1.classList.add("active");
    paragraph1.classList.add("animated");
    tab3.classList.remove("active");
    tab2.classList.remove("active");
    tab4.classList.remove("active");
  }
}

function showTab2() {
  paragraph2.innerHTML =
    "And in Tab 2, I want to say that life....is beautiful.";
  paragraph1.style.display = "none";
  paragraph2.style.display = "block";
  paragraph3.style.display = "none";
  paragraph4.style.display = "none";
  tab2.classList.add("active");
  paragraph2.classList.add("animated");
  tab1.classList.remove("active");
  tab3.classList.remove("active");
  tab4.classList.remove("active");
}

function showTab3() {
  paragraph3.innerHTML = "Now Watch the classic in Tab number 4.";
  paragraph1.style.display = "none";
  paragraph2.style.display = "none";
  paragraph3.style.display = "block";
  paragraph4.style.display = "none";
  tab3.classList.add("active");
  paragraph3.classList.add("animated");
  tab1.classList.remove("active");
  tab2.classList.remove("active");
  tab4.classList.remove("active");
}
function showTab4() {
  paragraph4.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 😊";
  tab4.classList.add("active");
  paragraph1.style.display = "none";
  paragraph2.style.display = "none";
  paragraph3.style.display = "none";
  paragraph4.style.display = "block";
  paragraph4.classList.add("animated");
  tab1.classList.remove("active");
  tab2.classList.remove("active");
  tab3.classList.remove("active");
}
