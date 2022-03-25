let myHeaders = new Headers();
let url = '/liste';
let options = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};
let containerListe = document.querySelector('#liste');


function deleteFetch(url){
  let optionsDelete = {
    method: 'DELETE',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };

  fetch(url, optionsDelete)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((response) => {
    console.log(response)
  })
}

// function modifierFetch(url){
//   let optionModifier = {
//     method: 'PUT',
//     headers: myHeaders,
//     mode: 'cors',
//     cache: 'default'
//   };

//   fetch(url, optionModifier)
//   .then((res) => {
//     if(res.ok) {
//       return res.json();
//     }
//   })
//   .then((response) => {
//     console.log(response)
//   })
// }



// l'affichage de base
fetch(url, options)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((response) => {
    response.forEach(elt => {
      let myAnime = document.createElement('div');
      let modifierDiv = document.createElement('div');
      let myTitle = document.createElement('h2');
      let myP = document.createElement('p');
      let lien_delete = document.createElement('a');
      let lien_modifier = document.createElement('a');

      lien_modifier.href = '/liste/modifier/' + elt.id + "?id=" + elt.id;
      lien_modifier.innerText = 'modifier';

      lien_delete.href = '/liste/delete/'+ elt.id;
      lien_delete.innerText = 'supprimer';

      myP.innerHTML = `<strong>Pays :</strong> ${elt.pays} <strong>Chaine :</strong> ${elt.chanel}`;

      let myLink = document.createElement('a');
      myLink.href = './anime.html#'+ elt.id;
      myLink.innerText = 'détails';

      if(elt.onAir) {
        myAnime.style.backgroundColor = 'lightgreen';
      } else {
        myAnime.style.backgroundColor = 'tomato';
      }
      lien_delete.addEventListener('click', function(event){
        event.preventDefault();
        deleteFetch(lien_delete.href);
      });

      // lien_modifier.addEventListener('click', function(event){
      //   event.preventDefault();
      //   modifierFetch(lien_modifier.href);
      // });
      myTitle.innerText = elt.name;

      containerListe.appendChild(myAnime);
      myAnime.appendChild(myTitle);
      myAnime.appendChild(myP);
      myP.appendChild(lien_delete);
      myP.appendChild(modifierDiv);
      modifierDiv.appendChild(lien_modifier);
      myAnime.appendChild(myLink);
    });
  });



// l'ajout

