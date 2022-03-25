import {Film} from "./film.mjs";

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let url = '/pages/ajouter';

document.querySelector('#add').addEventListener('click', (event) => {
    // event.preventDefault();
    const nameF = document.querySelector('#name').value;
    const season = document.querySelector('#saison').value;
    const episodes = document.querySelector('#nb_episodes').value;
    const film = new Film(nameF, season, episodes);
    console.log(film);
    let tmp = {
      name: nameF,
      season: season,
      episodes: episodes
    };
  
    let options = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(film)
    }
  
    fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        console.log(response)
      })
  });