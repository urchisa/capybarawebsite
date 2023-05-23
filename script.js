window.onload = function(){
    //$(document).keyup(function(event) {
    //  pop();
    //});
    var img = document.getElementById("malan");
    //var point = document.getElementById("point");
    //var score = 0;
    var point = getCookie("0");
    var pop = document.getElementById("popsound");

    img.addEventListener('mousedown', function (){
      popsound();  
      increaseScore();
      img.src = 'capy2.png';
      growText();
    });

    img.addEventListener('mouseup', function (){
        img.src = 'capy1.png';
        shrinkText();
    });

    function increaseScore(){
        point = Number(point) + 1;
        setCookie("0", point);
        document.getElementById("point").innerHTML = point
    }

    function setCookie(cpoint, cvalue) {
        document.cookie = cpoint + "=" + cvalue;
    }

    function growText() {
      var text = document.getElementById("point");
      text.className = 'large-font';
    }
    function shrinkText() {
      var text = document.getElementById("point");
      text.className = 'normal-font';
    }

    function getCookie(cpoint) {
        let pname = cpoint + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(pname) == 0) {
            return c.substring(pname.length, c.length);
          }
        }
        return "0";
    }
    function popsound() {
      pop.pause();
      pop.play();
    }
    /*function keydownFunction() {
      increaseScore();
      img.src = 'malan2.png';
      audio.play();
      growText();
    }*/
    
    //gallery functions
    var galimg = document.getElementById("galleryimg");

    galimg.addEventListener('mouseover', function() {
      galimg.style.filter = "none";
    });

    galimg.addEventListener('mouseout', function() {
      galimg.style.filter = "grayscale(100%)";
    });
}