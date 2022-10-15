//  Validacion formulario

function validarEnvio() {
    if(document.datos_usuario.nombre.value.length < 4) {    //validacion del nombre por longitud
        alert("Ingrese su Nombre");
        document.datos_usuario.nombre.focus();
        return 0;
    }

    if(document.datos_usuario.apellido.value.length < 4) {     //validacion del apellido por longitud
        alert("Ingrese su Apellido");
        document.datos_usuario.apellido.focus();
        return 0;
    }

    // if(document.datos_usuario.email.value.length < 10) {      //validacion del mail por html con required. Tengo que revisar como validar con @ y .
    //     alert("Ingrese su E-mail");                      
    //     document.datos_usuario.email.focus();
    //     return 0;
    // }

    var edad = document.datos_usuario.edad.value       //validacion de edad por numero entero con funcion
    var edad = validarNumeroEntero(edad) 
    document.datos_usuario.edad.value = edad
    if (edad =="" || edad < 0) {                       //Edad no negativa o vacia
        alert("Introduzca una edad valida")
        document.datos_usuario.edad.focus()
        return 0;
    } else if (edad <18) {                              //Edad mayor a 18
        alert("Debe ser mayor de 18 años")
        document.datos_usuario.edad.focus()
        return 0;
    }

    alert("Datos enviados");
            document.datos_usuario.submit();
}

function validarNumeroEntero(valor) {                   //funcion para transformar valor a numero entero
    valor =parseInt(valor)
    if (isNaN(valor)) {
        return "";
    } else {
        return valor;                                   //Si ya es entero, devuelve el mismo valor;
    }
}