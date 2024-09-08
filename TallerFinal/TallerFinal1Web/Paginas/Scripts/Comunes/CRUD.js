async function EjecutarComandoServicio(Metodo, URLServicio, Objeto) {
    //Se crea un objeto de la clase cliente con los datos de la interfaz
    try {
        const Respuesta = await fetch(URLServicio,
            {
                method: Metodo,
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Objeto)
            });
        //Leer la respuesta
        const Resultado = await Respuesta.json();
        $("#dvMensaje").html(Resultado);
    }
    catch (error) {
        //Se presenta el error en un div de Mensaje
        $("#dvMensaje").html(error);
    }
}

async function ConsultarServicio(URLServicio) {
    //Para invocar el servicio, vamos a utilizar el método fetch de javascript, el cual me permite invocar una función en un servidor
    try {
        const Respuesta = await fetch(URLServicio,
            {
                method: "GET",
                mode: "cors",
                headers: { "Content-Type": "application/json" }
            });
        //Se traduce la respuesa a un objeto
        const Resultado = await Respuesta.json();

        return Resultado;
    }
    catch (error) {
        //Se presenta el error en un div de Mensaje
        $("#dvMensaje").html(error);
    }
}