const pre = document.querySelector(".pre");
const walltext = document.querySelector(".walltext");
const wallpaper = document.querySelector(".wallpaper");

document.addEventListener("mousemove", parallax);
function parallax(e) {
  var speedPerspectiveMove = pre.getAttribute("data-perspective");

  var x = (window.innerWidth - e.pageX * speedPerspectiveMove) / 100;
  var y = ((window.innerHeight - e.pageY * speedPerspectiveMove) / 100) * -1;

  if (
    (window.innerHeight - e.pageY * speedPerspectiveMove) / 10 +
      (window.innerWidth - e.pageX * speedPerspectiveMove) / 10 >=
    0
  ) {
    var a =
      (window.innerHeight - e.pageY * speedPerspectiveMove) / 10 +
      (window.innerWidth - e.pageX * speedPerspectiveMove) / 10 +
      50;
    var b = a + 15;
    var c = b + 15;
    var d = c + 15;
    var e = d + 15;
  } else {
    var a =
      ((window.innerHeight - e.pageY * speedPerspectiveMove) / 10 +
        (window.innerWidth - e.pageX * speedPerspectiveMove) / 10 +
        50) *
      -1;
    var b = a + 15;
    var c = b + 15;
    var d = c + 15;
    var e = d + 15;
  }

  pre.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  walltext.style.background = `linear-gradient(to top right, #2C2C2C ${a}%, #5E5E5E ${b}%, #BABABA ${c}%, #5E5E5E ${d}%, #2C2C2C ${e}%)`;
}

var width573 = window.matchMedia("(max-width: 573px)");

wallpaper.onmouseover = disappear;
function disappear() {
  if (width573.matches) {
    wallpaper.style.opacity = "0";
    setTimeout(function () {
      wallpaper.style.zIndex = "-1";
    }, 400);
  } else {
    wallpaper.style.zIndex = "0";
    wallpaper.style.opacity = "1";
  }
}

walltext.onmouseleave = appear;
function appear() {
  if (width573.matches) {
    wallpaper.style.zIndex = "1";
    setTimeout(function () {
      wallpaper.style.opacity = "1";
    }, 100);
  } else {
    wallpaper.style.zIndex = "0";
    wallpaper.style.opacity = "1";
  }
}