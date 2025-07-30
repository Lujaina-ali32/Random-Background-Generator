  let btn = document.getElementById('btn');

  btn.onclick = function() {
    let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink','brown',];
    let random = Math.floor(Math.random() * colors.length);
    let color = colors[random];
    document.body.style.backgroundColor = color;
  }
