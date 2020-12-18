let menuProfile = document.createElement('div');

menuProfile.innerHTML= "<ul><a href='#'><li>My account</li></a><a href='#'><li>My tasks</li></a><a href='#'><li>Log out</li></a></ul>";
menuProfile.classList.add("menuProfile");
menuProfile.id = "menuProfile";
let parent = document.querySelector('#profile');
export function show() {
  arrow.classList.toggle('rotate');
  let element = document.getElementById("menuProfile");
  if (element !== null) {
    menuProfile.remove();
  } else {
    parent.append(menuProfile);
  }
}