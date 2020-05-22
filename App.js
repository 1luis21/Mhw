const btnLlamar = document.getElementById("btnCall");
btnLlamar.addEventListener("click", e => {
    var request = new XMLHttpRequest();
    request.open("GET", "https://mhw-db.com/weapons", true);
    request.onload = function() {
        let data = JSON.parse(this.response);
        console.log(data);
        let detalles = document.getElementById("details");
        if (request.status >= 200 && request.status <= 400) {
            data.forEach(weapon => {
                detalles.innerHTML += `
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${weapon.name}</div>    
                <div class="card-body">
                <h5 class="card-title">${weapon.display}</h5>
                <p class="card-text">${weapon.damageType}</p>
                </div>
                </div>`;
      });
    } else {
      detalles.innerHTML = `
      <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
      <div class="card-header">Error</div>
      <div class="card-body">
      <h5 class="card-title">Fallo el servidor o algo</h5>
      <p class="card-text">Ocurrio un error en la comunicacion</p>
      </div>
      </div>`;
    }
  };
  request.send();
});
