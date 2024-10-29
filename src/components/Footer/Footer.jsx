import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Typography
            component="p"
            variant='h7'
            bgcolor="#ccc"
            fontWeight="bold"
            sx={{
                display: "flex",
                justifyContent: "center",
                p: "0.5rem"
            }}
        >
            کل سایت با react graph ql زده شده است
        </Typography>
    );
};

export default Footer;