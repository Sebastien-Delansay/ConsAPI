const operationForm = document.getElementById("operationForm");

operationForm.addEventListener("submit", async function (event) {
  //empêche le rechargement auto de la page
  event.preventDefault();

  const formData = new FormData(operationForm);
  const dataInsert = Object.fromEntries(formData.entries());

  console.log(dataInsert);

  const options = {
    method: "post",
    body: JSON.stringify(dataInsert),
    headers: { "Content-Type": "application/json" },
  };

  await fetch("https://reqres.in/api/users", options).then(async function (
    response
  ) {
    const result = await response.json();

    console.log(result);

    document.querySelector(".main").innerHTML = `
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">${result.name}</h5>
                  <p class="card-text">${result.job}</p>
                  <p class="card-text" id="id">${result.id}</p>
                  <p class="card-text">${result.createdAt}</p>
                  <a href="#" class="btn btn-primary" id="modif">Modifier</a>
                  <a href="#" class="btn btn-secondary" id="supp">Supprimer</a>
              </div>
          </div>`;
  });

  const deleting = document.getElementById("supp");
  const modifing = document.getElementById("modif");
  const identity = document.getElementById("id");

  deleting.addEventListener("click", (e) => {
    e.preventDefault();

    const option = {
      method: "DELETE",
      //  body : JSON.stringify(identity),
      // headers: { "Content-Type": "application/json" },
    };

    fetch(`https://reqres.in/api/users/${identity}`, option)
      .then((res) => {statu = res.status;
        document.querySelector(".reqres").innerHTML = `<h5>Statut de la requête : ${statu}</h5>`},
      
      
      )
      .then((data) => console.log(data));
      

      


  });


  modifing.addEventListener("click", (e) => {
    e.preventDefault();

    const option = {
      method: "PUT",
      body: JSON.stringify(dataInsert),
       headers: { "Content-Type": "application/json" },
    };

    fetch(`https://reqres.in/api/users/${identity}`, option)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });



});
