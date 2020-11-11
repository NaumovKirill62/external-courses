let arrow = document.getElementById('arrow');
let profile = document.getElementById('profile');
let menuProfile = document.createElement('div');
let parent = document.querySelector('#profile');

menuProfile.classList.add("menuProfile");
menuProfile.id = "menuProfile";

menuProfile.innerHTML= "<ul><a href='#'><li>My account</li></a><a href='#'><li>My tasks</li></a><a href='#'><li>Log out</li></a></ul>";
function show() {
  arrow.classList.toggle('rotate');
  let element = document.getElementById("menuProfile");
  if (element !== null) {
    menuProfile.remove();
  } else {
    parent.append(menuProfile);
  }
}

 arrow.onclick = show;
 profile.onclick = show ;
