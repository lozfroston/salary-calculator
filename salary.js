let salaryInput = document.getElementById("salaryInput");
let hoursInput = document.getElementById("hoursInput");
const pageOne = document.getElementById("page1");
const pageTwo = document.getElementById("page2");
let placeCount = document.getElementById("countHere");

let sr = document.getElementById("sr");
let sbg = document.getElementById("sbg");
let skp = document.getElementById("skp");

letsGo = () => {
  if (hoursInput.value === "" || salaryInput.value === "") {
    alert("You must enter a salary and the hours first!");
  } else {
    let hours = hoursInput.value;
    let salary = salaryInput.value;
    let hoursYear = hours * 52;
    let salaryPerHour = salary / hoursYear;
    let salaryPerMin = salaryPerHour / 60;
    let salaryPerSec = salaryPerMin / 60;
    let salaryPerSecFix = salaryPerSec;

    let salaryR = 14.423;
    let salaryRFix = salaryR;

    let salaryBG = 127;
    let salaryBGFix = salaryBG;

    let salaryKP = 12.66;
    let salaryKPFix = salaryKP;

    let money = document.getElementById("money").value;
    let euro = "€";
    let dollar = "$";
    let pound = "£";

    const startAll = () => {
      timerSec = setInterval(startCount, 100);
    };

    function startCount() {
      if (money === euro) {
        placeCount.innerHTML = salaryPerSec.toFixed(2).replace(".", ",");
        document.getElementById("hourlyrate").innerHTML =
          "approx " +
          salaryPerHour.toFixed(0) +
          money +
          " an hour and " +
          (salaryPerHour * hours).toFixed(0) +
          money +
          " a week";
        document.getElementById("moneyBefore").innerHTML = "";
        document.getElementById("moneyAfter").innerHTML = euro;
      } else {
        if (money === dollar) {
          document.getElementById("moneyAfter").innerHTML = "";
          document.getElementById("moneyBefore").innerHTML = dollar;
        } else {
          document.getElementById("moneyAfter").innerHTML = "";
          document.getElementById("moneyBefore").innerHTML = pound;
        }
        document.getElementById("hourlyrate").innerHTML =
          "approx " +
          money +
          salaryPerHour.toFixed(0) +
          " an hour and " +
          money +
          (salaryPerHour * hours).toFixed(0) +
          " a week";
        placeCount.innerHTML = salaryPerSec.toFixed(2);
      }
      salaryPerSec += salaryPerSecFix / 10;
      sr.innerHTML = salaryR.toFixed(0);
      salaryR += salaryRFix / 10;
      sbg.innerHTML = salaryBG.toFixed(0);
      salaryBG += salaryBGFix / 10;
      skp.innerHTML = salaryKP.toFixed(0);
      salaryKP += salaryKPFix / 10;
    }
    startAll();

    pageOne.style.display = "none";
    pageTwo.style.display = "flex";
  }
};
const stopAll = () => {
  clearInterval(timerSec);
};
goBack = () => {
  pageOne.style.display = "flex";
  pageTwo.style.display = "none";
  stopAll();
  sr.innerHTML = " ";
  sbg.innerHTML = " ";
  skp.innerHTML = " ";
};
animateMe = () => {
  document.getElementById("coin").style.display = "none";
  document.getElementById("clock").style.display = "none";
  document.getElementById("coin").style.display = "block";
  document.getElementById("clock").style.display = "block";
};

// Execute a function when the user releases a key on the keyboard
hoursInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("gobtn").click();
  }
});
