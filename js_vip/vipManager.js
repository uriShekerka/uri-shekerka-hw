import vipClass from "./vipClass.js";

export const doApi = async () => {
  document.querySelector("#id_row").innerHTML = `<h2>Loading...</h2>`;
  let url = "https://randomuser.me/api/?results=12&seed=google"
  let resp = await fetch(url);
  let data = await resp.json();
   console.log(data.results);
  createVip(data.results);
}
export const doSearchApi = async (search) => {
  document.querySelector("#id_row").innerHTML = '<h2>Loading...</h2>'

  let url = `https://randomuser.me/api/?results=12&${search}=google`;
  let resp = await fetch(url);
  let data = await resp.json();
   console.log(data.results);
  createVip(data.results);
}

const createVip = (_arr) => {

  document.querySelector("#id_row").innerHTML = " "

  _arr.forEach(item => {
    let list = new vipClass("#id_row", item);
    list.render();

  });

}


