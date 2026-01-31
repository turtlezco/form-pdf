import { useState } from "react";
import Form from "./components/Form";
import PdfPreview from "./components/PdfPreview";
import GeneratePdfButton from "./components/GeneratePdfButton";
import "./styles/pdf.css";
import "./App.css";

function App() {
  const [data, setData] = useState({
    funcionarioNombre: "",
    clienteNombre: "",
    funcionarioCedula: "",
    direccion: "",
    telefono: "",
    orden: "",
    fecha: "",
    hora: "",
    acciones: "",
    recomendaciones: "",
    tecnicoNombre: "",
    tecnicoCedula: "",
    FuncionarioFirma: "",
    tecnicoFirma: "",
  });

  const isFormComplete = () => {
    return Boolean(
      data.funcionarioNombre &&
      data.direccion &&
      data.telefono &&
      data.orden &&
      data.fecha &&
      data.hora &&
      data.acciones &&
      data.FuncionarioFirma &&
      data.tecnicoNombre &&
      data.tecnicoCedula &&
      data.tecnicoFirma
    );
  };

  return (
    <div className="app">
      <div className="toolbar">
        <h1>Generador de Reportes</h1>

        <GeneratePdfButton disabled={!isFormComplete()} />

        {!isFormComplete() && (
          <p className="form-warning">
            Completa todos los campos para descargar el PDF
          </p>
        )}
      </div>

      <div className="layout">
        <Form data={data} setData={setData} />

        <div className="preview-container">
          <PdfPreview data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
