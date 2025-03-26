//RESUELVE TUS EJERCICIOS AQUI
//1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro.

function getAllBreeds() {
    return fetch("https://dog.ceo/api/breeds/list")
      .then((res) => res.json())
      .then((json) => json.message)
      .catch(err => console.log('Solicitud fallida', err));
  }; 
  
  //2.- Declara una función getRandomDog que obtenga una imagen random de una raza.
  
  const getRandomDog = () => {
    return fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((json) => json.message)
      .catch(err => console.log('Solicitud fallida', err));
  };
  
  // - [ ] 3.- Declara una función **getAllImagesByBreed** que obtenga todas las imágenes de la raza komondor.
  
  const getAllImagesByBreed = () => {
    return fetch("https://dog.ceo/api/breed/komondor/images")
      .then((res) => res.json())
      .then((json) => json.message)
      .catch(err => console.log('Solicitud fallida', err));
  };
  
  //4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento
 
  
  function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => res.json())
      .then((json) => json.message)
      .catch(err => console.log('Solicitud fallida', err));
  }
  getAllImagesByBreed2('briard');
  
  //5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de
  // github a partir de su nombre de usuario. (https://api.github.com/users/{username}).
  
  
  function getGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => json)
      .catch(err => console.log('Solicitud fallida', err));
  }
  getGitHubUserProfile('k3nray');

  //- [ ] 6.- Declara una función **printGithubUserProfile(username)** que 
  //reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.
  
  function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then ((res) => res.json())
    .then((data)=>{
    const userProfile= {
        img:data.avatar_url,
        name: data.name
    };
    const imgElement=document.createElement('img');
    const nameElement= document.createElement('p')
    imgElement.src= userProfile.img
    nameElement.textContent= userProfile.name;
    document.body.appendChild(imgElement);
    document.body.appendChild(nameElement);

    })
  }
  
  printGithubUserProfile('alenriquez96').then(data=>console.log(data))

  //- [ ] 7. Crea una función **getAndPrintGitHubUserProfile(username)** que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:

/*```html
<section>
    <img src="url de imagen" alt="imagen de usuario">
    <h1>Nombre de usuario</h1>
    <p>Public repos: (número de repos)</p>
</section>*/

  