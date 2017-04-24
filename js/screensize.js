$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".container1").css("flex-direction") == "column" ){
      console.log("short", "left");
      $("#sliders").simpleSlider({navigation: false, direction: "left", interval: 3000});
    } else{
      console.log("long", "up");
      $("#sliders").simpleSlider({navigation: false, direction: "up", interval: 3000});

    }
}
