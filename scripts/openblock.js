function show_list() {
  var hide = document.getElementById("hide");
  var arrow1 = document.getElementById("arrow1");
  if (hide.style.display == "block") {
    hide.style.display = "none";
    arrow1.classList.remove("activearrow");
  } else {
    arrow1.classList.add("activearrow");
    hide.style.display = "block";
  }
}
function show_list2() {
  var hide2 = document.getElementById("hide2");
  var arrow2 = document.getElementById("arrow2");
  if (hide2.style.display == "block") {
    arrow2.classList.remove("activearrow");
    hide2.style.display = "none";
  } else {
    arrow2.classList.add("activearrow");
    hide2.style.display = "block";
  }
}

function show_list3() {
  var hide3 = document.getElementById("hide3");
  var arrow3 = document.getElementById("arrow3");
  var top = document.getElementById("idTop");
  if (hide3.style.display == "block") {
    top.style.display = "none";
    arrow3.classList.remove("activearrow");
    hide3.style.display = "none";
  } else {
    top.style.display = "block";
    arrow3.classList.add("activearrow");
    hide3.style.display = "block";
  }
}

function show_list4() {
  var hide4 = document.getElementById("hide4");
  var arrow4 = document.getElementById("arrow4");
  //var top = document.getElementById("idTop");
  if (hide4.style.display == "block") {
    //top.style.display = "none";
    arrow4.classList.remove("activearrow");
    hide4.style.display = "none";
  } else {
    //top.style.display = "block";
    arrow4.classList.add("activearrow");
    hide4.style.display = "block";
  }
}

function show_list5() {
  var hide5 = document.getElementById("hide5");
  var arrow5 = document.getElementById("arrow5");
  //var top = document.getElementById("idTop");
  if (hide5.style.display == "block") {
    //top.style.display = "none";
    arrow5.classList.remove("activearrow");
    hide5.style.display = "none";
  } else {
    //top.style.display = "block";
    arrow5.classList.add("activearrow");
    hide5.style.display = "block";
  }
}
