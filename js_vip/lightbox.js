export const lightboxInit = () => {
  // מייצר לייט בוקס
  showBox();
  // מסתיר את הלייט בוקס בהתחלה
  hideBox();
}

const showBox = () => {
  let divLight = document.createElement("div");
  divLight.className = "light_box";
  divLight.id = "id_lightbox";
  document.body.append(divLight);
  divLight.innerHTML =
    `<div class="light_box_inside ">
        <img id="id_img">
        <h2 id="id_name"></h2>
        <div>mail: <span id="id_mail"></span>
        <div>location: <span id="id_location"></span></div>
        <p>number: <span id="id_num"></span></p>
        <button class="btn btn-primary myBtn">Close</button>
      </div>`

  let closebtn = divLight.querySelector(".myBtn");
  closebtn.addEventListener("click", hideBox)
}


// מסתיר את הלייטבוקס
const hideBox = () => {
  let id_lightbox = document.querySelector("#id_lightbox");
  id_lightbox.style.display = "none";
}

export const showLightBox = (_item) => {
  //הלייט בוקס חוזר
  let id_lightbox = document.querySelector("#id_lightbox");
  id_lightbox.style.display = "flex";

  //מדפיס את המידע
  document.querySelector("#id_img").src = _item.img
  document.querySelector("#id_name").innerHTML = _item.first_name + " " + _item.last_name;
  document.querySelector("#id_mail").innerHTML = _item.email;
  document.querySelector("#id_num").innerHTML = _item.phone;
  document.querySelector("#id_location").innerHTML = _item.street_name + " " + _item.street_number;
}
