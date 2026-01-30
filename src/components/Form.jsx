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
        <Card className="form-card" elevation={0}>

            {/* ENCABEZADO */}
            <div className="form-header">
                <h2>Orden de Servicio</h2>
                <p>Complete los datos para generar el reporte</p>
            </div>

            <CardContent className="form-body">

                {/* GRUPO: DATOS DEL CLIENTE */}
                <div className="form-group">
                    <TextField
                        label="Funcionario"
                        name="funcionarioNombre"
                        value={data.funcionarioNombre}
                        onChange={handleChange}
                        fullWidth
                    />

                    
                    <TextField
                        label="Dirección"
                        name="direccion"
                        value={data.direccion}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><HomeIcon className="form-icon" /></InputAdornment>,
                        }}
                    />
                </div>

                {/* GRUPO: TELÉFONO Y ORDEN (En fila) */}
                <div className="form-row">
                    <TextField
                        label="Teléfono"
                        name="telefono"
                        value={data.telefono}
                        onChange={handleChange}
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PhoneIcon className="form-icon" /></InputAdornment>,
                        }}
                    />
                    <TextField
                        label="N° Orden"
                        name="orden"
                        type="number"
                        value={data.orden}
                        onChange={handleChange}
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><ConfirmationNumberIcon className="form-icon" /></InputAdornment>,
                        }}
                    />
                </div>

                {/* GRUPO: FECHA Y HORA (En fila) */}
                <div className="form-row">
                    <TextField
                        label="Fecha"
                        type="date"
                        name="fecha"
                        value={data.fecha}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><CalendarTodayIcon className="form-icon" /></InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Hora"
                        type="time"
                        name="hora"
                        value={data.hora}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><AccessTimeIcon className="form-icon" /></InputAdornment>,
                        }}
                    />
                </div>

                {/* SEPARADOR */}
                <div className="form-divider">
                    <Divider />
                    <span>Detalles Técnicos</span>
                    <Divider />
                </div>

                {/* GRUPO: TEXTAREAS */}
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
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    sx={{ alignSelf: "flex-start", mt: 2 }}
                                >
                                    <AssignmentIcon className="form-icon" />
                                </InputAdornment>
                            ),
                        }}
                    />

                </div>

                {/* GRUPO: FIRMAS (Contenedor gris) */}
                <div className="signature-section">
                    <div className="section-title">VALIDACIÓN Y FIRMAS</div>


                    <div className="form-row">
                        <TextField
                            label="CC tecnico"
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

                        <TextField
                            label="Nombre del tecnico"
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
                    </div>

                    <div className="signature-pads">
                        <SignaturePad
                            label="Firma del Funcionario"
                            onSave={(img) => setData({ ...data, FuncionarioFirma: img })}
                        />
                        <SignaturePad
                            label="Firma del Técnico"
                            onSave={(img) => setData({ ...data, tecnicoFirma: img })}
                        />
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}