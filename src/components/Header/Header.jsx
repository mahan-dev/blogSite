import { AppBar, Container, IconButton, TableContainer, Toolbar, Typography } from '@mui/material';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth="lg">

                <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }} >
                    <Typography component="h2" variant='h5'>
                        <Link to={"/"}>
                        بلاگینو
                        </Link>
                    </Typography>
                    <IconButton >
                        <BookRoundedIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;