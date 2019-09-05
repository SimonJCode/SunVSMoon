const sun = document.getElementById("image-sun-moon");
var isSun = true;

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