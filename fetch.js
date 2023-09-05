const url = "https://jsonplaceholder.typicode.com/users";

document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById('formulario');

    formulario.addEventListener("submit", function(e){
        e.preventDefault(); // Evita la recarga de la página por defecto

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fecha = document.getElementById('fecha').value;
        
        const data = {
            nombre: nombre,
            apellido: apellido,
            fecha: fecha
        };

        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error('Error en la solicitud:', error); 
        });
    });
});



