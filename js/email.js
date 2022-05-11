
const nombre = document.querySelector('#nombretxt');
nombre.addEventListener('input', e => {
  nombre.value = nombre.value.replace( /[^a-z,A-Z,( ),á,é,í,ó,ú,Á,É,Í,Ó,Ú]|(,)|^\s|( ( ){1})/, ''); /* Expresion regular que que se escriba solo lo que está dentro de los corchetes y no permite ingresar mas de un espacio en blanco */
})

const telefono = document.querySelector('#telefonotxt');
telefono.addEventListener('input', e => {
  telefono.value = telefono.value.replace( /\D/, ''); /* Expresion regular que busca solo letras y las remplaza por un '' */
})





const enviarCorreo = async (formulario) => {
    /* let peticion = {"nombre":"Angel","destino":"correo@gmail.com","asunto":"asunto",
      "numero":"51","mensaje":"Cuerpo del mensaje"}; */ 
    try {
        
      const resp = await fetch("php/email.php", {
        method: "POST", // or 'PUT'
        body: formulario,
      });
      if (!resp.ok)
        throw { status: resp.status, statusText: resp.statusText };
      const respuestajson = await resp.json();
      
      return respuestajson;
    } catch (error) {
      return error;
    }
  };
 
  const formulario = document.querySelector("#formularioEmail");
  //const alerta = document.querySelector("#alerta");
  //console.log(formulario[0].value)
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if(document.querySelector('#nombretxt').value.length>0 && document.querySelector('#emailtxt').value.length>0 && document.querySelector('#telefonotxt').value.length>0 && document.querySelector('#mensajetxt').value.length>0)
    {

      let formularioDatos = new FormData(formulario);
 
      enviarCorreo(formularioDatos)
        .then((response) => {      
          console.log(response);
          
          if (response!="Correo enviado con éxito")
          {
            throw { status: response.status, statusText: response.statusText }
          }else{

            formulario.classList.remove('was-validated');
            document.querySelector('#nombretxt').value = "";
            document.querySelector('#emailtxt').value = "";
            document.querySelector('#telefonotxt').value = "";
            document.querySelector('#mensajetxt').value = "";
          }
            
        })
        .catch((err) => {
          const error = err.status + " " + err.statusText + " No se envió el mensaje";
        });
    }

  });

