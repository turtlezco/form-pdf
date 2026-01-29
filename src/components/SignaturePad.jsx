import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SignaturePad({ label, onSave }) {
    const sigCanvas = useRef({});

    const clear = () => {
        sigCanvas.current.clear();
        onSave(""); 
    };

    const handleEnd = () => {

        if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
 
            const canvas = sigCanvas.current.getCanvas();
            const imageURL = canvas.toDataURL("image/png");
            onSave(imageURL);
        }
    };

    return (
        <Box sx={{ mb: 2, width: '100%' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                {label}
            </Typography>

            <Box sx={{ 
                border: '1px solid #c4c4c4', 
                borderRadius: '4px', 
                backgroundColor: '#fff',
                overflow: 'hidden',
                cursor: 'crosshair'
            }}>
                <SignatureCanvas 
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{
                        width: 450,
                        height: 150,
                        className: 'signature-canvas'
                    }}
                    onEnd={handleEnd} 
                />
            </Box>

            <Button 
                variant="outlined" 
                color="error" 
                size="small" 
                startIcon={<DeleteIcon />} 
                onClick={clear}
                sx={{ mt: 1 }}
            >
                Borrar Firma
            </Button>
        </Box>
    );
}