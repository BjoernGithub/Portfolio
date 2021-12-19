// Java script til læs mere knapper på webdesign kategorier:

// Ny function til hver knap, så de ikke åbner den samme enkle kategori:

function myFunction1() {
    var dots = document.getElementById("span1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("button1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more"; 
      moreText.style.display = "none";
    }
    else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
}

function myFunction2() {
    var dots = document.getElementById("span2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("button2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more"; 
      moreText.style.display = "none";
    }
    else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
}

function myFunction3() {
    var dots = document.getElementById("span3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("button3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more"; 
      moreText.style.display = "none";
    }
    else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
}

function myFunction4() {
    var dots = document.getElementById("span4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("button4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more"; 
      moreText.style.display = "none";
    }
    else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
}