// fonction pour récupérer le GET de l'url
function getParam(param) {
    var varsp = {};
    window.location.href.replace(/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp

        function( m, key, value ) { // callback

            varsp[key] = value !== undefined ? value :  "";

           }
    );

   if ( param ) {

        return varsp[param] ? varsp[param] : null;

    }

   return varsp ;

}

let user = getParam('id');

// récupértion des datas et injection html
fetch(`https://reqres.in/api/users/${user}`)
.then(response => response.json())
.then(json => { 

    document.querySelector(".main").innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src=${json.data.avatar} class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${json.data.first_name} ${json.data.last_name}</h5>
            <p class="card-text">${json.data.email}</p>
        </div>
    </div>
    `;
})




