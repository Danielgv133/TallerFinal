class Pais {
    constructor(Codigo, Nombre, Activo) {
        this.Codigo = Codigo;
        this.Nombre = Nombre;
        this.Activo = Activo;
    }
}
async function Ejecutar(Metodo, Funcion) {
    //let Activo = document.getElementById("chkActivo").checked;
    //const pais = new Pais($("#txtCodigo").val(), $("#txtNombre").val(), Activo);
    const pais = new Pais($("#txtCodigo").val(), $("#txtNombre").val(), document.getElementById("chkActivo").checked);
    let URL = "http://localhost:54671/api/Paises/" + Funcion;
    EjecutarComandoServicio(Metodo, URL, pais);
}
async function Consultar() {
    let Codigo = $("#txtCodigo").val();
    URL = "http://localhost:54671/api/Paises/ConsultarXCodigo?Codigo=" + Codigo;
    //Invoco el servicio genérico
    const pais = await ConsultarServicio(URL);
    if (pais != null) {
        $("#txtNombre").val(pais.Nombre);
        document.getElementById("chkActivo").checked = pais.Activo;
    }
    else {
        //Se presenta el error en un div de Mensaje
        $("#dvMensaje").html("El país no existe en la base de datos");
        $("#txtNombre").val("");
    }
}