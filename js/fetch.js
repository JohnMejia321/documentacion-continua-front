const tabla = document.querySelector('#lista-usuarios tbody');



function cargarUsuarios(){
    fetch('usuarios.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                   
                    <td>${usuario.Dominio}</td>
                    <td>  ${usuario.Palabras}  </td>
                    <td>${usuario.Proyecto}</td>
                    <td>${usuario.Servidor}</td>
                    <td>${usuario.Carpeta}</td>
                    <td>${usuario.Subproyecto}</td>
                    <td>${usuario.Namesapce}</td>
                    <td>${usuario.Infra}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();