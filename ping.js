const start_btn = document.getElementById("start_btn");
const start_title = document.getElementById("title");
const start_sun = document.getElementById("start_sun");
console.log(start_btn);
start_btn.addEventListener("click", function() {
  console.log("clicked start button!!");
  start_btn.remove();
  start_sun.remove();
  start_title.remove();
  const vid = document.createElement('video');
  vid.src="movie.mp4";
  vid.type="video/mp4";
  console.log(vid);
  vid.play();
  // window.location.replace("page1.html")
});


