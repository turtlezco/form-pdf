import logo from "../assets/logo.png";

export default function PdfPreview({ data }) {
    return (
        <div id="pdf" className="a4">


            {/* HEADER */}
            <div className="header">
                <div className="header-info">
                    <div className="logo-box">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="empresa">
                        <strong>Dirección:</strong> Carrera 42h #84-22 <br />
                        <strong>Teléfono:</strong> 3007491584
                    </div>
                </div>

                <div className="orden-box">
                    <div className="orden-titulo">ORDEN DE SERVICIO</div>
                    <div className="orden-numero">{data.orden || "000"}</div>
                </div>
            </div>

            {/* DATOS */}
            <div className="datos">
                <div className="datos-izq">
                    <div className="linea"><strong>Funcionario:</strong> {data.funcionarioNombre}</div>
                    <div className="linea"><strong>Dirección:</strong> {data.direccion}</div>
                    <div className="linea"><strong>Teléfono:</strong> {data.telefono}</div>
                </div>

                <div className="datos-der">
                    <div className="linea"><strong>Hora:</strong> {data.hora}</div>
                    <div className="linea"><strong>Fecha:</strong> {data.fecha}</div>
                </div>
            </div>

            {/* ACCIONES */}
            <div className="seccion">
                <div className="seccion-titulo">Acciones Realizadas</div>
                <div className="seccion-cuerpo grande">
                    {data.acciones}
                </div>
            </div>

            {/* RECOMENDACIONES */}
            <div className="seccion">
                <div className="seccion-titulo">Recomendaciones</div>
                <div className="seccion-cuerpo mediana">
                    {data.recomendaciones}
                </div>
            </div>

            <div className="firmas">

                {/* FIRMA funcionario */}
                <div className="firma-box">
                    <strong>Firma funcionario:</strong>

                    {data.FuncionarioFirma && (
                        <img
                            src={data.FuncionarioFirma}
                            alt="Firma Funcionario"
                            className="firma-img"
                        />
                    )}


                    <div className="firma-info">
                        <div><strong>Nombre:</strong> {data.funcionarioNombre}</div>
                        <div><strong>Cedula al funcionario:</strong> {data.funcionarioCedula}</div>
                            
                    </div>
                </div>

                {/* FIRMA Tecnico */}
                <div className="firma-box">
                    <strong>Firma Tecnico:</strong>

                    {data.tecnicoFirma && (
                        <img
                            src={data.tecnicoFirma}
                            alt="Firma Técnico"
                            className="firma-img"
                        />
                    )}


                    <div className="firma-info">
                        <div><strong>Nombre:</strong> {data.tecnicoNombre}</div>
                        <div><strong>C.C:</strong> {data.tecnicoCedula}</div>
                    </div>
                </div>

            </div>




        </div>
    );
}
