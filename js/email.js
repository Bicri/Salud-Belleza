
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

    if(document.querySelector('#nombre').value.length>0 && document.querySelector('#asunto').value.length>0 && document.querySelector('#email').value.length>0 && document.querySelector('#telefono').value.length>0 && document.querySelector('#mensaje').value.length>0)
    {

      let formularioDatos = new FormData(formulario);
      //console.log(formularioDatos.get("destino"))
      const toastEl = document.querySelector("#toast");
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
      const body = document.querySelector('#bodyToast');
      enviarCorreo(formularioDatos)
        .then((response) => {      
          console.log(response);       
          
          if (response!="Correo enviado con éxito")
          {
            throw { status: response.status, statusText: response.statusText }
          }else{
            body.textContent = "";
            body.classList.remove('justify-content-end');
            body.textContent = response;
            toast.show();
            formulario.classList.remove('was-validated');
            document.querySelector('#nombre').value = "";
            document.querySelector('#asunto').value = "";
            document.querySelector('#email').value = "";
            document.querySelector('#telefono').value = "";
            document.querySelector('#mensaje').value = "";
          }
            
        })
        .catch((err) => {
          body.textContent = "";
          body.textContent = err.status + " " + err.statusText + " No se envió el mensaje";
          toast.show();
        });
    }

  });

