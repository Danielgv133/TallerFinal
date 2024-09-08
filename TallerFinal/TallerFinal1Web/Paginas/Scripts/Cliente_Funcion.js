
async function Ejecutar(Metodo, Funcion) {
    //Se crea un objeto de la clase cliente con los datos de la interfaz
    const cliente = new Cliente($("#txtDocumento").val(), $("#txtNombre").val(), $("#txtPrimerApellido").val(), $("#txtSegundoApellido").val(),
        $("#txtDireccion").val(), $("#txtEmail").val(), $("#txtFechaNacimiento").val());
    let URL = "http://localhost:54671/api/Clientes/" + Funcion;
    EjecutarComandoServicio(Metodo, URL, cliente);
}
async function Consultar() {
    let Documento = $("#txtDocumento").val();
    URL = "http://localhost:54671/api/Clientes/ConsultarXDocumento?Documento=" + Documento;
    //Invoco el servicio genérico
    const cliente = await ConsultarServicio(URL);
    if (cliente != null) {
        $("#txtNombre").val(cliente.Nombre);
        $("#txtPrimerApellido").val(cliente.PrimerApellido);
        $("#txtSegundoApellido").val(cliente.SegundoApellido);
        $("#txtDireccion").val(cliente.Direccion);
        $("#txtFechaNacimiento").val(cliente.FechaNacimiento.split('T')[0]);
        $("#txtEmail").val(cliente.Email);
    }
    else {
        //Se presenta el error en un div de Mensaje
        $("#dvMensaje").html("El cliente no existe en la base de datos");
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