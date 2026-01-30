import React from 'react';
import {
    TextField,
    Card,
    CardContent,
    InputAdornment,
    Divider
} from '@mui/material';

// Iconos
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BadgeIcon from '@mui/icons-material/Badge';


import SignaturePad from "./SignaturePad";

export default function Form({ data, setData }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <CardContent className="form-body">

  {/* ===================== */}
  {/* SECCIÓN: FUNCIONARIO */}
  {/* ===================== */}
  <div className="form-divider">
    <Divider />
    <span>Datos del Funcionario</span>
    <Divider />
  </div>

  <div className="form-group">
    <TextField
      label="Nombre del Funcionario"
      name="funcionarioNombre"
      value={data.funcionarioNombre}
      onChange={handleChange}
      fullWidth
    />
    
    <TextField
      label="Cedula al funcionario"
      name="funcionarioCedula"
      value={data.funcionarioCedula}
      onChange={handleChange}
      fullWidth
    />

    <TextField
      label="Dirección"
      name="direccion"
      value={data.direccion}
      onChange={handleChange}
      fullWidth
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
      InputLabelProps={{ shrink: true }}
    />

    <TextField
      label="Hora"
      type="time"
      name="hora"
      value={data.hora}
      onChange={handleChange}
      fullWidth
      InputLabelProps={{ shrink: true }}
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
    />
  </div>

  {/* FIRMA FUNCIONARIO */}
  <div className="signature-pads">
    <SignaturePad
      label="Firma del Funcionario"
      onSave={(img) => setData({ ...data, FuncionarioFirma: img })}
    />
  </div>

  {/* ===================== */}
{/* SECCIÓN: TÉCNICO */}
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
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <EngineeringIcon className="form-icon" />
        </InputAdornment>
      ),
    }}
  />

  <TextField
    label="C.C Técnico"
    name="tecnicoCedula"
    value={data.tecnicoCedula}
    onChange={handleChange}
    fullWidth
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
    onSave={(img) => setData({ ...data, tecnicoFirma: img })}
  />
</div>


</CardContent>

    );
}