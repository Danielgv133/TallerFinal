jQuery(function () {
    //Registrar los botones para responder al evento click
    $("#dvMenu").load("../Paginas/Menu.html")
});
function Insertar() {
    EjecutarComando("POST", "Insertar");
}
function Actualizar() {
    EjecutarComando("PUT", "Actualizar");
}
function Eliminar() {
    EjecutarComando("DELETE", "Eliminar");
}
async function EjecutarComando(Metodo, Funcion) {
    //Se crea un objeto de la clase cliente con los datos de la interfaz
    const cliente = new Cliente($("#txtDocumento").val(), $("#txtNombre").val(), $("#txtPrimerApellido").val(), $("#txtSegundoApellido").val(),
        $("#txtDireccion").val(), $("#txtEmail").val(), $("#txtFechaNacimiento").val());
    try {
        const Respuesta = await fetch("http://localhost:54671/api/Clientes/" + Funcion,
            {
                method: Metodo,
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cliente)
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
async function Consultar() {
    //alert("Botón de consultar");
    //console.log("Botón de consultar");
    let Documento = $("#txtDocumento").val();
    //Para invocar el servicio, vamos a utilizar el método fetch de javascript, el cual me permite invocar una función en un servidor
    try {
        const Respuesta = await fetch("http://localhost:54671/api/Clientes/ConsultarXDocumento?Documento=" + Documento,
            {
                method: "GET",
                mode: "cors",
                headers: { "Content-Type": "application/json" }
            });
        //Se traduce la respuesa a un objeto
        const Cliente = await Respuesta.json();
        //Se presentan los valores en la interfaz
        $("#txtNombre").val(Cliente.Nombre);
        $("#txtPrimerApellido").val(Cliente.PrimerApellido);
        $("#txtSegundoApellido").val(Cliente.SegundoApellido);
        $("#txtDireccion").val(Cliente.Direccion);
        $("#txtFechaNacimiento").val(Cliente.FechaNacimiento.split('T')[0]);
        $("#txtEmail").val(Cliente.Email);
    }
    catch (error) {
        //Se presenta el error en un div de Mensaje
        $("#dvMensaje").html(error);
    }
}

class Cliente {
    constructor(Documento, Nombre, PrimerApellido, SegundoApellido, Direccion, Email, FechaNacimiento) {
        this.Documento = Documento;
        this.Nombre = Nombre;
        this.PrimerApellido = PrimerApellido;
        this.SegundoApellido = SegundoApellido;
        this.Direccion = Direccion;
        this.Email = Email;
        this.FechaNacimiento = FechaNacimiento;
    }
}