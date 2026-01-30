import { Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import html2pdf from "html2pdf.js";

export default function GeneratePdfButton({ orden }) {
  const generarPDF = () => {
    const element = document.getElementById("pdf");

    const options = {
      margin: 0,
      filename: `orden-servicio-${orden}.pdf`,
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 2,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      startIcon={<PictureAsPdfIcon />}
      onClick={generarPDF}
    >
      Generar PDF
    </Button>
  );
}
