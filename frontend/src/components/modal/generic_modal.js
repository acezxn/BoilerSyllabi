import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const GenericModal = ({ open, onClose, children, title }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="generic-modal-title"
            aria-describedby="generic-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    width: "80vw",
                    maxHeight: "90vh",
                    overflow: "scroll",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                {title && <Typography variant="h6">{title}</Typography>}
                <div>
                    {children}
                </div>
            </Box>
        </Modal>
    );
};

export default GenericModal;
