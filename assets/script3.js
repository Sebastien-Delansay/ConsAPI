const operationForm = document.getElementById("operationForm");

operationForm.addEventListener("submit", async function(event) {
  //empêche le rechargement auto de la page
    event.preventDefault();

    const formData = new FormData(operationForm);
    const dataInsert = Object.fromEntries(formData.entries());

    console.log(dataInsert);

  
  const options = {
    method: "post",
    body: JSON.stringify(dataInsert),
    headers: { "Content-Type": "form-data"}
    
  };
  

await fetch("https://reqres.in/api/users", options)
    .then(async function(response){
       const result =  await response.json();
       
       console.log(result)
    })
    .then(
      (result) => console.log(result)

      //     {
      //      document.querySelector(".formulaire").innerHTML = `
      // <div class="card" style="width: 18rem;">
      //     <img src=${json.data.avatar} class="card-img-top" alt="avatar">
      //     <div class="card-body">
      //         <h5 class="card-title">${json.data.first_name} ${json.data.last_name}</h5>
      //         <p class="card-text">${json.data.email}</p>
      //     </div>
      // </div>
      // `;}
    );
});
