window.onload = function () {
  document.getElementById('home').onmouseover = function (event) {
    console.log(event);
    document.getElementById('x-coord').innerText = event.x + ' :x coord';
    document.getElementById('y-coord').innerText = event.y + ' :y coord';
  };

  document.getElementsByTagName("h1")[0].onclick = function (event) {
    alert("You Clicked the h1!");
  };

  var h2s = document.getElementsByTagName("h2");
  for (var i = 0; i < h2s.length; i++) {
    h2s[i].onclick = function (event) {
      console.log("You clicked an h2. There's another one here too.");
    };
  };

  document.getElementById("test-box").onclick = function (event) {
    alert("You Clicked the box!");
  };

  document.getElementById('danger_box').onmouseover = function (event) {
    console.log(event);
    document.getElementById('danger_box').innerHTML = ("WHY WOULD YOU DO?");
  };
  document.getElementById('danger_box').onmouseout = function (event) {
    document.getElementById('danger_box').innerHTML = ("it's okay just don't let it happen again");
  };

};
