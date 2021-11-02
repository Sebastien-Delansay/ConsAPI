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

