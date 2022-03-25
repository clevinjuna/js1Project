// Je récupère le #id
// window.location.hash => va me donner #id
// split ça va me permettre de diviser ma chaine de caractère
// en sous élément qui sont séparé par le caractère en paramètre
let myId = window.location.hash.split('#')[1];

let myHeaders = new Headers();
let url = '/liste/' + myId;
let options = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

fetch(url, options)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((response) => {
    console.log(response)
  });