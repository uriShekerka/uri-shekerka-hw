import { showLightBox } from "./lightbox.js";

export default class vipClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.img = _item.picture.large;
        this.first_name = _item.name.first;
        this.last_name = _item.name.last;
        this.country = _item.location.country;
        this.age = _item.dob.age;
        this.email = _item.email;
        this.phone = _item.phone;
        this.street_name = _item.location.street.name;
        this.street_number = _item.location.street.number;


    }

    render() {
        let div = document.createElement("div");
        div.className = 'col-sm-12 col-md-4  mt-5 d-flex justify-content-center  ';
        document.querySelector(this.parent).append(div);
        div.innerHTML +=
            ` <div class="card d-flex align-items-center" style="width: 18rem; ">
        <img src="${this.img}" class="card-img-top"
            alt="${this.name}">
        <div class="card-body">
            <h4 class="card-title">${this.first_name + " " + this.last_name}</h4>
            <p class="card-text">
            <div>Country: ${this.country}</div>
            <div>Age: ${this.age}</div>
            </p>
           <button class=" myBtn text-align-center btn-outline-success btn btn-dark text-warning ">More Info</button>
        </div>
    </div>  `
        let myBtn = div.querySelector(".myBtn");
        myBtn.addEventListener("click", () => {

            showLightBox(this);
        });
    }
}
