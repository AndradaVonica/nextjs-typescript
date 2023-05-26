import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
    Button,
    Modal,
    TextField,
    Typography,
    Box
} from '@mui/material'

const style = {
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#fffafa',
        border: '2px solid #000',
        padding: '20px',
        minWidth: '400px',
    },
};

export default function LoginModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Log in
      </Button>
            <Modal style={style.modal} open={open} onClose={handleClose}>
                <div style={style.paper}>
                    <CloseIcon onClick={handleClose} />

                    <Typography variant="h5" gutterBottom >
                        Log in
          </Typography>
                    <form>
                        <TextField label="Email" fullWidth margin="normal" />
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            onClick={handleClose}
                        >
                            Log in
            </Button>
                    </form>
                </div>
            </Modal>
        </Box>
    );
}
