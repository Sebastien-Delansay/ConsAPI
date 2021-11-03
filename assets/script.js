
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json =>{
    const liste = json.data.map(el =>{
        return `
        <div class="card" style="width: 18rem;">
        <img src=${el.avatar} class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${el.first_name} ${el.last_name}</h5>
            <p class="card-text">${el.email}</p>
            
        </div>
        </div>
        `
    })
    console.log(liste);
    document.querySelector(".main").innerHTML = liste;
})

const operationForm2 = document.getElementById("operationForm2");

operationForm2.addEventListener("submit",(event) =>{
  //empêche le rechargement auto de la page
//   event.preventDefault();

  const formData = new FormData(operationForm2);
  const dataInsert = Object.fromEntries(formData.entries());

  console.log(dataInsert);

  const options = {
    method: "POST",
    body: JSON.stringify(dataInsert),
    headers: { "Content-Type": "application/json"},
    redirect: 'follow'
  };

//   console.log(JSON.stringify(dataInsert));

 fetch("https://reqres.in/api/register", options)
  .then(response => response.json())
  .then(data => localStorage.setItem("donnees", JSON.stringify(data.token))
  )

  });

  let tokenactual = JSON.parse(localStorage.getItem("donnees"));

  document.querySelector(
    ".reqres"
  ).innerHTML = `<h5>token en localstorage : ${tokenactual}</h5>`
