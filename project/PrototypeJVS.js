/* Function for toogleMenu from button*/
function toggleMenu() {
    var menu = document.getElementById("Lmao");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Optional: close dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-container')) {
        document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
    }
});

//Traveller Count
var adultCount = 1;
var childCount = 0;
var infantCount = 0;

function travelClassE(){
    var displayClass = document.getElementById("displayClass");
    var Tclass = ", Economy";
    displayClass.innerText = Tclass;
}

function travelClassB(){
    var displayClass = document.getElementById("displayClass");
    var Tclass = ", Business";
    displayClass.innerText = Tclass;
}

function travelClassF(){
    var displayClass = document.getElementById("displayClass");
    var Tclass = ", First";
    displayClass.innerText = Tclass;
}


function updateTotal() {
    var total = adultCount + childCount + infantCount;
    if(total == 1){
        total = total + " Traveller"
    } else {
        total = total + " Travellers"
    }
    document.getElementById("displayTotal").innerText = total;
}

// Count Adult
function plusAdult(){
    var displayA = document.getElementById("displayA");

    adultCount = adultCount + 1;
    displayA.innerHTML = adultCount;
    updateTotal();
}

function minusAdult(){
    var displayA = document.getElementById("displayA");

    adultCount = Math.max(1, adultCount - 1); // Does not go below 0

    displayA.innerHTML = adultCount;
    updateTotal();
}

// Count Children
function plusChildren(){
    var displayC = document.getElementById("displayC");

    childCount++;
    displayC.innerHTML = childCount;
    updateTotal();
}

function minusChildren(){
    var displayC = document.getElementById("displayC");

    childCount = Math.max(0, childCount - 1); // Does not go below 0

    displayC.innerHTML = childCount;
    updateTotal();
}

//Count Infant
function plusInfant(){
    var displayI = document.getElementById("displayI");

    infantCount++;
    displayI.innerHTML = infantCount;
    updateTotal();
}

function minusInfant(){
    var displayI = document.getElementById("displayI");

    infantCount = Math.max(0, infantCount - 1); // Does not go below 0

    displayI.innerHTML = infantCount;
    updateTotal();
}

/*----------Slide-----------*/
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-item');
  const slideList = document.getElementById('FlightContent');
  const totalSlides = slides.length;

  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;

  slideList.style.transform = `translateX(-${currentSlide * 100}%)`;
}