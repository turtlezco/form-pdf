import { useState } from 'react'
import Form from "./components/Form";
import PdfPreview from "./components/PdfPreview";
import "./styles/pdf.css";
import "./App.css";
import GeneratePdfButton from "./components/GeneratePdfButton";

function App() {
  const [data, setData] = useState({
    funcionarioNombre: "",
    funcionarioCedula:"",
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
    tecnicoFirma: ""
  });


  return (

    <div className="app">


      <div className="toolbar">
        <h1>Generador de Reportes</h1>
        <GeneratePdfButton></GeneratePdfButton>
      </div>


      <div className="layout">

        <Form data={data} setData={setData} />


        <div className="preview-container">
          <PdfPreview data={data} />
        </div>

      </div>
    </div>
  )
}

export default App