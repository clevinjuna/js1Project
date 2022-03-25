import {Film} from "./film.mjs";
const urlParams = new URLSearchParams (window.location.search);
const id = urlParams.get('id');
const nameF = document.querySelector('#name');
const season = document.querySelector('#saison');
const episodes = document.querySelector('#nb_episodes');

let url = "/liste/" + id;
let options = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
}

fetch(url, options)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((response) => {
    nameF.value = response.name;
    season.value = response.season;
    episodes.value = response.episodes;
  })

document.querySelector('#modifier').addEventListener('click', (event) => {
    event.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const film = new Film(nameF, season, episodes);
    console.log(film);
    let datas = {"id": id, "name": nameF.value,"saison": season.value,"episodes": episodes.value}
    let url = "/liste/modifier/" + id;
    console.log(datas)
    let options = {
      method: 'PUT',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default', 
      body: JSON.stringify(datas)
    }

    fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log(res)
          return res.json();
        }
      })
      .then((response) => {
        console.log(response)
      })
  });