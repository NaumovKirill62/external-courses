let menu = document.getElementById('men');
let obj = document.getElementById('obj');
let profile = document.getElementById('profile');
let div = document.createElement('div');

div.className = "menuProfile";
div.id = "menuProfile";

div.innerHTML= "<ul><a href='#'><li>My account</li></a><a href='#'><li>My tasks</li></a><a href='#'><li>Log out</li></a></ul>";
function show() {
  menu.classList.toggle('rotate');
  let element = document.getElementById("menuProfile");
  if (element !== null) {
    div.remove();
  } else {
    document.body.append(div);
  }
}

profile.onmouseenter = function(){
  profile.style.backgroundColor = "tomato";
  profile.style.borderRadius = '50%';
  profile.style.transition = '300ms linear';
  obj.style.fill = "tomato";
  obj.style.transition = "300ms linear";
}
profile.onmouseleave = function() {
  profile.style.backgroundColor = "white";
  obj.style.fill = "white"; 
}
menu.onmouseenter = function(){
  profile.style.backgroundColor = "tomato";
  profile.style.borderRadius = '50%';
  profile.style.transition = '300ms linear';
  obj.style.fill = "tomato";
  obj.style.transition = "300ms linear";
}
menu.onmouseleave = function() {
  profile.style.backgroundColor = "white";
  obj.style.fill = "white"; 
}

 menu.onclick = show;
 profile.onclick = show ;
