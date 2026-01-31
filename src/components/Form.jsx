import React from "react";
import {
  TextField,
  CardContent,
  InputAdornment,
  Divider,
} from "@mui/material";

// Iconos
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BuildIcon from "@mui/icons-material/Build";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BadgeIcon from "@mui/icons-material/Badge";

import SignaturePad from "./SignaturePad";

export default function Form({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <CardContent className="form-body">

      {/* ===================== */}
      {/* SECCIÓN FUNCIONARIO */}
      {/* ===================== */}
      <div className="form-divider">
        <Divider />
        <span>Datos del Funcionario</span>
        <Divider />
      </div>

      <div className="form-group">
        <TextField
          label="Nombre del Cliente"
          name="funcionarioNombre"
          value={data.funcionarioNombre}
          onChange={handleChange}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Dirección"
          name="direccion"
          value={data.direccion}
          onChange={handleChange}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="form-row">
        <TextField
          label="Teléfono"
          name="telefono"
          value={data.telefono}
          onChange={handleChange}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="N° Orden"
          name="orden"
          value={data.orden}
          onChange={handleChange}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ConfirmationNumberIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="form-row">
        <TextField
          label="Fecha"
          type="date"
          name="fecha"
          value={data.fecha}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Hora"
          type="time"
          name="hora"
          value={data.hora}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccessTimeIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="form-group">
        <TextField
          label="Acciones Realizadas"
          name="acciones"
          value={data.acciones}
          onChange={handleChange}
          multiline
          minRows={1}
          maxRows={8}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{ alignSelf: "flex-start", mt: 1 }}
              >
                <BuildIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Recomendaciones"
          name="recomendaciones"
          value={data.recomendaciones}
          onChange={handleChange}
          multiline
          minRows={1}
          maxRows={8}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{ alignSelf: "flex-start", mt: 1 }}
              >
                <AssignmentIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="signature-pads">
        <SignaturePad
          label="Firma del Funcionario"
          onSave={(img) =>
            setData({ ...data, FuncionarioFirma: img })
          }
        />
      </div>

      {/* ===================== */}
      {/* SECCIÓN TÉCNICO */}
      {/* ===================== */}
      <div className="form-divider">
        <Divider />
        <span>Datos del Técnico</span>
        <Divider />
      </div>

      <div className="form-group">
        <TextField
          label="Nombre del Técnico"
          name="tecnicoNombre"
          value={data.tecnicoNombre}
          onChange={handleChange}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EngineeringIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="C.C del Técnico"
          name="tecnicoCedula"
          value={data.tecnicoCedula}
          onChange={handleChange}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon className="form-icon" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="signature-pads">
        <SignaturePad
          label="Firma del Técnico"
          onSave={(img) =>
            setData({ ...data, tecnicoFirma: img })
          }
        />
      </div>

    </CardContent>
  );
}
