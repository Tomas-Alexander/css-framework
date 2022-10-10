let slidersArray = document.querySelectorAll(".slider");

slidersArray.forEach(function(e, index) {
    e.addEventListener("click", function() {
        let activeElements = document.querySelectorAll(".slider.active");
        activeElements.forEach(
            function(element){
                element.classList.remove("active");
            }
        )
        e.classList.add("active");
        let sliderControls = document.querySelectorAll(".slider-control span");
        sliderControls.forEach(
            function(element){
                element.classList.remove("active");
            }
        )
        sliderControls[index].classList.add("active");
    });
});

function validate(){
    const areatext = document.querySelector("textarea").value.length;
    const textcount = document.querySelector("#textcount");
    textcount.innerHTML = areatext;
}

calendarPickers = document.querySelectorAll("input[type=date]");

calendarPickers.forEach(
    function(e){
        e.setAttribute("type", "hidden");
    }
)

const elem = document.querySelector('input[name="foo"]');
const datepicker = new Datepicker(elem, {
  // ...options
}); 