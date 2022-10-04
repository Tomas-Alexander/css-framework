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