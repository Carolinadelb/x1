const btn = document.querySelector('button');
const container = document.getElementById('root');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
.then(response => response.json())
.then(data => {
  console.log(data);
  renderUsers(data);

})

const renderUsers = data => {
  btn.addEventListener('click',() => {
    //for in recorre objetos si es que fuera objetos (o for of)
    const render = data.forEach(element => {
      //elemen.name === arreglo [i].name
      return container.innerHTML += `<p>${element.name}</p>`   
      
      
      //se concantena los nombre con += si fuera solo = se sobreescriben
    })      
    return render;
    })
}

/*<div class ="lala">
  <button>Click Me</button>
  <p></p>
</div> */
