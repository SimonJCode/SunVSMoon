//Sun vs Moon

//Variables
const sun = document.getElementById("image-sun-moon");
var isSun = true;

//When image is clicked change to moon if sun is showing, and sun if moon is showing.
sun.onclick = function(){
        if(isSun){
            sun.src = "moon.jpg";
            isSun = false;
        }
        else{
            sun.src = "sun.jpg";
            isSun = true;
        }
};